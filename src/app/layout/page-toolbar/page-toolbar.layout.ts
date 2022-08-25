import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface ToolbarButton {
  id: string;
  text: string;
}

@Component({
  selector: 'page-toolbar',
  styles: [
    `
      :host {
        padding: 1rem;
      }
    `,
  ],
  template: `
    <section class="toolbar">
      <h1>{{title}}</h1>
      <ng-container *ngFor="let button of buttons">
        <button class="btn btn-primary" 
          (click)="buttonClick.emit(button)">
          {{button.text}}
        </button>
      </ng-container>
      <ng-content></ng-content>
    </section>
  `,
})
export class PageToolbarLayout {
  @Input() title: string;
  @Input() buttons: ToolbarButton[] = [];
  @Output() buttonClick = new EventEmitter<ToolbarButton>();
}
