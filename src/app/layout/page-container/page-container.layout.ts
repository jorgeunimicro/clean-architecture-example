import { Component } from '@angular/core';

@Component({
  selector: 'page-container',
  styles: [
    `
      :host {
        display: block;
        padding: 1rem;
      }
    `,
  ],
  template: '<ng-content></ng-content>',
})
export class PageContainerLayout {}
