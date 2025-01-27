import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importar herramientas del formulario

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})


export class ProductFormComponent implements OnInit {
  productForm!: FormGroup; // Declaración del FormGroup

  constructor(private fb: FormBuilder) {} // Inyección del FormBuilder

  ngOnInit(): void {
    this.initializeForm(); // Inicializar el formulario al cargar
  }

  // Método para inicializar el formulario
  initializeForm() {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]], // Campo obligatorio
      description: ['', Validators.required], // Campo obligatorio
      price: [0, [Validators.required, Validators.min(0)]], // Valor mínimo
      category: ['', Validators.required], // Campo obligatorio
      active: [true], // Por defecto, marcado como activo
    });
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    if (this.productForm.valid) {
      console.log('Producto agregado:', this.productForm.value);
      // Aquí puedes enviar los datos al servicio o manejar la lógica
    } else {
      console.error('Formulario inválido');
    }
  }
}
