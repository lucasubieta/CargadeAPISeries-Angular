import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss'],
})
export class ProductFilterComponent {
  filterCriteria = '';

  @Output() filterChanged = new EventEmitter<string>();

  onFilterChange(): void {
    this.filterChanged.emit(this.filterCriteria);
  }
}
