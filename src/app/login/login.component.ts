import { Component } from '@angular/core';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  nombre: string = '';  

  constructor(private router: Router) {}  

  submit() {
    const nombreValido = /^[a-zA-Z0-9 ]*$/; 

    if (!this.nombre.trim()) {
      alert('Por favor ingresa un nombre');
      return;
    }

    if (!nombreValido.test(this.nombre)) {
      alert('El nombre no puede contener caracteres especiales');
      return;
    }

    this.router.navigate(['/personajes']); 
  }
}
