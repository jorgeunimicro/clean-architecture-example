import { Routes } from '@angular/router';
import { InvoicesListPage } from './invoices-list/invoices-list.page';

export const invoicesPagesRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: InvoicesListPage,
  },
];
