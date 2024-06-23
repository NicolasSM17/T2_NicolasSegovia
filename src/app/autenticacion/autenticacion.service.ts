import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  private readonly usuario = 'Segovia'; 
  private readonly password = '12345';

  constructor() { }

  login(usuario: string, password: string):boolean{
    
    return usuario === this.usuario && password === this.password;
  }

  logout():void{
    sessionStorage.clear()    
  }

  isLogged():boolean{
    return !!sessionStorage.getItem("isLogged");
  }
}
