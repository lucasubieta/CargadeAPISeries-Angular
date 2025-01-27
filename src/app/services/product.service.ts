import { Injectable } from '@angular/core';
import { IProduct } from '../interface/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  private apiUrl = 'https://jsonblob.com/api/1333535183483363328';
  private products: IProduct[] = [];

  constructor() {}

  async getProducts(): Promise<IProduct[]> {
    if (this.products.length === 0) {
      try {
        const response = await fetch(this.apiUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error(`Error al obtener productos: ${response.statusText}`);
        }
        this.products = await response.json();
      } catch (error) {
        console.error('Error en la funcion getProducts:', error);
        throw error;
      }
    }
    return this.products;
  }
  getCategories(): string[] {
    const categorySet = new Set<string>(
      this.products.map((product) => product.category)
    );
    return Array.from(categorySet);
  }

  addProduct(product: IProduct): void {
    this.products.push(product);
  }

  deleteProduct(id: string): void {
    this.products = this.products.filter((product) => product._id !== id);
  }

 

  filterProducts(filters: any): IProduct[] {
    return this.products.filter((product) => {
      const matchesName =
        !filters.nombre ||
        product.name.toLowerCase().includes(filters.nombre.toLowerCase());
      const matchesCategory = !filters.categoria || product.category.trim() === filters.categoria.trim();
      const matchesMinPrice =!filters.precioMin || product.price >= Number(filters.precioMin);
      const matchesMaxPrice =
        !filters.precioMax || product.price <= Number(filters.precioMax);
      const matchesActive =
        filters.activo === undefined ||
        product.active === (filters.activo === 'true' || filters.activo === true);
      return (
        matchesName &&
        matchesCategory &&
        matchesMinPrice &&
        matchesMaxPrice &&
        matchesActive
      );
    });
  }
}
