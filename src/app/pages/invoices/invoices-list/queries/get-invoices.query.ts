import { Injectable } from '@angular/core';
import { Invoice } from '../../../../models/invoice.model';
import { InvoiceEndPoint } from '../../../../api/invoice.endpoint';

@Injectable({
  providedIn: 'root',
})
export class GetInvoiceQuery {
  invoiceEndPoint: InvoiceEndPoint;

  constructor() {
    this.invoiceEndPoint = new InvoiceEndPoint();
  }

  async execute(): Promise<Invoice[]> {
    return await this.invoiceEndPoint.GetAll();
  }
}
