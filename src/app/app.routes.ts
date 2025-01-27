import { Routes } from '@angular/router';
import { ProductListComponent } from './components/products-list/products-list.component'; 
import { ProductFormComponent } from './components/product-form/product-form.component';


export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'product-list'
    },
    {
        path: 'product-list',
        component: ProductListComponent
    },
    {
        path: 'product-form',
        component: ProductFormComponent
    }
];
