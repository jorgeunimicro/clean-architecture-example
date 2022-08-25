import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../../../models/customer.model';
import { Invoice } from '../../../models/invoice.model';
import { InvoiceListState } from './state/invoices-list.state';

@Component({
  selector: 'invoices-list-page',
  templateUrl: './invoices-list.page.html',
})
export class InvoicesListPage {
  invoices$: Observable<Invoice[]>;
  constructor(private state: InvoiceListState) {
    this.init();
  }

  async init() {
    this.invoices$ = await this.state.query({
      queryName: 'getinvoices',
    });
  }

  accept(invoice: Invoice) {
    this.state.command({
      commandName: 'accept',
      payload: { invoice },
    });
  }
  reject(invoice: Invoice) {
    this.state.command({
      commandName: 'reject',
      payload: { invoice },
    });
  }
  assign(invoice: Invoice) {
    this.state.command({
      commandName: 'assign',
      payload: { invoice, customer: invoice.customer },
    });
  }
}
