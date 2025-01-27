import { Component, EventEmitter, Input, Output } from '@angular/core';
//import { IProduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../interface/iproduct';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product: IProduct = {
    _id: '',
    name: '',
    description: '',
    price: 0,
    category: '',
    image: '',
    active: false
  };

  @Output() deleteProduct = new EventEmitter<IProduct>();

  onDelete(): void {
    this.deleteProduct.emit(this.product);
  }

}
