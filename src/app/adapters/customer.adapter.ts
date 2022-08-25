import { Customer } from '../models/customer.model';

export class CustomerAdapter {
  constructor() {}

  adaptList(list: any[]): Customer[] {
    return list.map((item) => this.adaptEntity(item));
  }

  adaptEntity(item: any): Customer {
    return <Customer>{
      id: item.ID,
      first_name: item.FirstName,
      last_name: item.LastName,
    };
  }
}
