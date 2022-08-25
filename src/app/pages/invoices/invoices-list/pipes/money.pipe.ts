import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money',
})
export class MoneyPipe implements PipeTransform {
  public transform(value: number, symbol: string) {
    return value + symbol;
  }
}
