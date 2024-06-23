import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { AutenticacionService } from '../autenticacion/autenticacion.service';
import { MaterialModule } from '../angular-material/material/material.module';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ MaterialModule, RouterOutlet],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private route: ActivatedRoute, private autenticacionService: AutenticacionService,
              private router: Router){}

  salir(): void{
    this.autenticacionService.logout();
    this.router.navigateByUrl("/autenticacion")
  }
}
