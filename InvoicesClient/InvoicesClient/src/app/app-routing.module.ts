import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceListComponent } from './Invoice/invoice-list/invoice-list.component';



const routes: Routes = [
  {
    path: '',
    component: InvoiceListComponent,
  },
  {
    path: 'invoices',
    component: InvoiceListComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
