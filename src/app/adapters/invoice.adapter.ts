import { Invoice } from '../models/invoice.model';
import { CustomerAdapter } from './customer.adapter';

export class InvoiceAdapter {
  constructor() {}

  adaptList(list: any[]): Invoice[] {
    return list.map((item) => this.adaptEntity(item));
  }

  adaptEntity(item: any): Invoice {
    const customerAdapter = new CustomerAdapter();
    return <Invoice>{
      id: item.ID,
      amount: item.Amount,
      customer: customerAdapter.adaptEntity(item.Customer),
      invoiceNumber: item.InvoiceNumber,
      shippingAddress: item.ShippingAddress,
      status: 'Recieved',
    };
  }
}
