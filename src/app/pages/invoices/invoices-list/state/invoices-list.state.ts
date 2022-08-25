import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { Invoice } from '../../../../models/invoice.model';
import { AcceptCommand } from '../commands/accept.command';
import { AssignCommand } from '../commands/assign.command';
import { RejectCommand } from '../commands/reject.command';
import { GetInvoiceQuery } from '../queries/get-invoices.query';

export interface InvoiceListCommand {
  commandName: 'accept' | 'reject' | 'assign';
  payload?: any;
}

export interface InvoiceListQuery {
  queryName: 'getinvoices';
  payload?: any;
}

@Injectable({
  providedIn: 'root',
})
export class InvoiceListState {
  _invoices$: BehaviorSubject<Invoice[]> = new BehaviorSubject([]);

  constructor(
    private getInvoiceQuery: GetInvoiceQuery,
    private acceptCommand: AcceptCommand,
    private rejectCommand: RejectCommand,
    private assignCommand: AssignCommand
  ) {}

  async query(query: InvoiceListQuery) {
    switch (query.queryName) {
      case 'getinvoices':
        const invoices = await this.getInvoiceQuery.execute();
        this._invoices$.next(invoices);
        return this._invoices$.asObservable();
    }
  }

  async command(command: InvoiceListCommand) {
    switch (command.commandName) {
      case 'accept':
        this.updateState(
          await this.acceptCommand.execute(command.payload.invoice)
        );
        break;
      case 'reject':
        this.updateState(
          await this.rejectCommand.execute(command.payload.invoice)
        );
        break;
      case 'assign':
        this.updateState(
          await this.assignCommand.execute(
            command.payload.invoice,
            command.payload.customer
          )
        );
        break;
    }
  }

  private updateState(invoice): void {
    const list = this._invoices$.getValue();
    const index = list.findIndex((i) => i.id === invoice.id);
    list[index] = invoice;
    this.setInvoices([...list]);
  }

  private setInvoices(invoices: Invoice[]) {
    this._invoices$.next(invoices);
  }
}
