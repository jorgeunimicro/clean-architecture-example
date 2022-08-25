import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../../../../models/customer.model';

@Pipe({
  name: 'customerFullName',
})
export class CustomerFullNamePipe implements PipeTransform {
  public transform(customer: Customer) {
    return customer.first_name + ' ' + customer.last_name;
  }
}
