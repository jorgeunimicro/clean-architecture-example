import { Component } from '@angular/core';

@Component({
  selector: 'data-table',
  template: `
    <table class="table">
      <ng-content></ng-content>
    </table>
  `,
})
export class DataTableLayout {}
