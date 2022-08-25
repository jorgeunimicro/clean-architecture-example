import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../../layout/layout.module';
import { InvoicesListPage } from './invoices-list/invoices-list.page';
import { CustomerFullNamePipe } from './invoices-list/pipes/customer-full-name.pipe';
import { MoneyPipe } from './invoices-list/pipes/money.pipe';
import { invoicesPagesRoutes } from './invoices.pages.routes';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule.forChild(invoicesPagesRoutes),
  ],
  declarations: [InvoicesListPage, CustomerFullNamePipe, MoneyPipe],
  exports: [InvoicesListPage],
})
export class InvoicesPagesModule {}
