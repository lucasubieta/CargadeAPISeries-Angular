import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';
import { IProduct } from '../../interface/iproduct';
import { ProductServiceService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
})


export class ProductFormComponent {
  addProductForm!: FormGroup;
  submitted = false;

  arrProducts: IProduct[] = [];
  categories: string[] = [];

  productService = inject(ProductServiceService);
  router = inject(Router);

  constructor() {
    this.addProductForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(150),
      ]),
      price: new FormControl('', [Validators.required, Validators.min(0.01)]),
      category: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      image: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
        ),
      ]),
      active: new FormControl('true', Validators.required),
    });
  }

  async ngOnInit(): Promise<void> {
    try {
      this.arrProducts = await this.productService.getProducts();
      this.categories = this.productService.getCategories();
      console.log('Categorías disponibles:', this.categories);
    } catch (error) {
      console.error('Error al cargar productos o categorías:', error);
    }
  }

  checkControl(
    FormControlName: string,
    validator: string
  ): boolean | undefined {
    return (
      this.addProductForm.get(FormControlName)?.hasError(validator) &&
      this.addProductForm.get(FormControlName)?.touched
    );
  }

  resetForm() {
    this.submitted = false;
    this.addProductForm.reset();
  }

  onSubmit() {
    if (this.addProductForm.valid) {
      const formProduct = {
        ...this.addProductForm.value,
        _id: uuidv4(),
      };
      this.productService.addProduct(formProduct);
      console.log('Producto guardado:', formProduct);
      this.resetForm();
      this.router.navigate(['/product-list']);
    } else {
      console.error('Formulario inválido');
    }
  }
}
