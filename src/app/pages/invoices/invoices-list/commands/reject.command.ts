import { Injectable } from '@angular/core';
import { Invoice } from '../../../../models/invoice.model';
import { InvoiceEndPoint } from '../../../../api/invoice.endpoint';

@Injectable({
  providedIn: 'root',
})
export class RejectCommand {
  invoiceEndPoint: InvoiceEndPoint;

  constructor() {
    this.invoiceEndPoint = new InvoiceEndPoint();
  }

  async execute(invoice): Promise<Invoice> {
    return this.invoiceEndPoint.reject(invoice);
  }
}