import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataTableLayout } from './data-table/data-table.layout';
import { PageBodyLayout } from './page-body/page-body.layout';
import { PageContainerLayout } from './page-container/page-container.layout';
import { PageToolbarLayout } from './page-toolbar/page-toolbar.layout';

const components = [
  DataTableLayout,
  PageBodyLayout,
  PageContainerLayout,
  PageToolbarLayout,
];

@NgModule({
  imports: [CommonModule],
  declarations: components,
  exports: components,
})
export class LayoutModule {}
