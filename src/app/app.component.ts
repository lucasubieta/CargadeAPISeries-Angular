import { Component } from '@angular/core';
import { ProductFormComponent } from "./components/product-form/product-form.component";
import { ProductFilterComponent } from "./components/product-filter/product-filter.component";
import { ProductsListComponent } from "./components/products-list/products-list.component";

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <header class="my-4">
        <h1>Gestión de Productos</h1>
      </header>
      <app-product-form></app-product-form>
      <app-product-filter></app-product-filter>
      <app-products-list></app-products-list>
      <footer class="mt-4 text-center">
        <p>&copy; 2025 API-Series</p>
      </footer>
    </div>
  `,
  styles: [`
    header, footer { text-align: center; }
  `],
  imports: [ProductFormComponent, ProductFilterComponent, ProductsListComponent],
})
export class AppComponent {}
