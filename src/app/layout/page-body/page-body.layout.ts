import { Component } from '@angular/core';

@Component({
  selector: 'page-body',
  styles: [
    `
      :host {
        display: block;
        margin: 1rem;
      }
    `,
  ],
  template: '<ng-content></ng-content>',
})
export class PageBodyLayout {}
