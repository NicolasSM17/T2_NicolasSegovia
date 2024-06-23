import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialModule } from '../angular-material/material/material.module';
import { AutenticacionService } from './autenticacion.service';

@Component({
  selector: 'app-autenticacion',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './autenticacion.component.html',
  styleUrl: './autenticacion.component.css'
})
export class AutenticacionComponent {

  constructor(private router: Router, private autenticacionService: AutenticacionService){}

  submit(usuario: string, password: string): void{
    if(this.autenticacionService.login(usuario, password)) {
      sessionStorage.setItem('usuario', usuario);
      this.router.navigateByUrl('/menu');
    } else {
      alert('Usuario o password incorrectos');
    }
  }
}
