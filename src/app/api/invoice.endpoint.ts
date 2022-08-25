import { firstValueFrom, from, fromEventPattern } from 'rxjs';
import { map } from 'rxjs/operators';
import { AssignedInvoice, Invoice } from '../models/invoice.model';
import { InvoiceAdapter } from '../adapters/invoice.adapter';
import { Customer } from '../models/customer.model';

const backendData = [
  {
    ID: 1,
    InvoiceNumber: 'A-1',
    Amount: 1000,
    Customer: {
      ID: 1,
      FirstName: 'Jorge',
      LastName: 'Ferrando',
    },
    ShippingAddress: {
      StreetType: 'Avenue',
      StreetName: 'Alacant',
      StreetNumber: 42,
      ZipCode: '03510',
    },
  },
  {
    ID: 2,
    InvoiceNumber: 'A-2',
    Amount: 1500,
    Customer: {
      ID: 2,
      FirstName: 'John',
      LastName: 'Doe',
    },
    ShippingAddress: {
      StreetType: 'Street',
      StreetName: 'Nowhere',
      StreetNumber: 99,
      ZipCode: '0000',
    },
  },
];

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(backendData);
    }, 500);
  });
}

export class InvoiceEndPoint {
  GetAll(): Promise<Invoice[]> {
    const adapter = new InvoiceAdapter();
    return firstValueFrom(
      from(fetchData()).pipe(map((data: any[]) => adapter.adaptList(data)))
    );
  }

  accept(invoice): Promise<Invoice> {
    return new Promise((resolve) => {
      const newInvoice = Object.assign({}, invoice, { status: 'accept'});
      setTimeout(() => resolve(newInvoice), 500);
    });
  }
  reject(invoice): Promise<Invoice> {
    return new Promise((resolve) => {
      const newInvoice = Object.assign({}, invoice, { status: 'reject'});
      setTimeout(() => resolve(newInvoice), 500);
    });
  }
  assign(invoice: Invoice, customer: Customer): Promise<AssignedInvoice> {
    return new Promise((resolve) => {
      const assignedInvoice = <AssignedInvoice>Object.assign({}, invoice, {
        status: 'assigned',
        assignedTo: customer,
      });
      setTimeout(() => resolve(assignedInvoice), 500);
    });
  }
}
