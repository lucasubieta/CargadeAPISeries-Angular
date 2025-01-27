import { Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';

export const routes: Routes = [
  { path: '', component: ProductsListComponent },
  { path: 'add-product', component: ProductFormComponent },
];
