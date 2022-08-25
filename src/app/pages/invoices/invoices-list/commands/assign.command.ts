import { Injectable } from '@angular/core';
import { AssignedInvoice, Invoice } from '../../../../models/invoice.model';
import { InvoiceEndPoint } from '../../../../api/invoice.endpoint';
import { Customer } from '../../../../models/customer.model';

@Injectable({
  providedIn: 'root',
})
export class AssignCommand {
  invoiceEndPoint: InvoiceEndPoint;

  constructor() {
    this.invoiceEndPoint = new InvoiceEndPoint();
  }

  async execute(
    invoice: Invoice,
    customer: Customer
  ): Promise<AssignedInvoice> {
    return this.invoiceEndPoint.assign(invoice, customer);
  }
}
