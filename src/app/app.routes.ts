import { Routes } from '@angular/router';
import { ProductListComponent } from './components/products-list/products-list.component'; 
import { ProductFormComponent } from './components/product-form/product-form.component';


export const routes: Routes = [
    { path: '', redirectTo: '/product-list', pathMatch: 'full' },
    { path: 'product-list', component: ProductListComponent }, 
    { path: 'product-form', component: ProductFormComponent }, 
  ];


