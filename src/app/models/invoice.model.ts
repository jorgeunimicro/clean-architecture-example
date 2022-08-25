import { Address } from './address.model';
import { Customer } from './customer.model';

export interface Invoice {
  id: number;
  invoiceNumber: string;
  amount: number;
  customer: Customer;
  shippingAddress: Address;
  status: 'Recieved' | 'Accepted' | 'Rejected' | 'Assigned';
}

export interface AssignedInvoice extends Invoice {
  status: 'Assigned';
  assignedTo: Customer;
}
