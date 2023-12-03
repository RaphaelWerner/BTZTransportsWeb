import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

import { AuthService} from '../../services/AuthService'

@Component({
  selector: 'app-inicial-page',
  standalone: true,
  imports: [],
  templateUrl: './inicial-page.component.html',
  styleUrl: './inicial-page.component.css'
})
export class InicialPageComponent {
  constructor(private router: Router, private service: AuthService) {

    this.service.Autenticar().then((autenticado) => {
      if (!autenticado) {
        console.log("Deslogado")
        this.router.navigate(['/login']);
      }
    }).catch((error) => {
        console.error('Ocorreu um erro:', error);
    });


    

  }



  navegarMotoristas(){
    console.log("opa")
    this.router.navigate(['/motoristas']);
  }
  navegarVeiculos(){
    this.router.navigate(['/veiculos']);
  }
  navegarAbastecimentos(){
    this.router.navigate(['/abastecimentos']);
  }


} 
