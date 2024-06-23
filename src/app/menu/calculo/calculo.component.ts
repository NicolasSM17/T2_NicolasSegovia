import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-calculo',
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './calculo.component.html',
  styleUrl: './calculo.component.css'
})
export class CalculoComponent {
  salario: number = 0;
  tiempo: number = 0;
  utilidad: number = 0;

  calcularUtilidad() {
    if (this.tiempo < 1) {
      this.utilidad = this.salario * 0.05;
    } else if (this.tiempo < 2) {
      this.utilidad = this.salario * 0.07;
    } else if (this.tiempo < 5) {
      this.utilidad = this.salario * 0.10;
    } else if (this.tiempo < 10) {
      this.utilidad = this.salario * 0.15;
    } else {
      this.utilidad = this.salario * 0.20;
    }
  }
}
