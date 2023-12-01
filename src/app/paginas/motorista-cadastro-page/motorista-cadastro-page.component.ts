import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

import { AuthService} from '../../services/AuthService'
import { MotoristaService} from '../../services/MotoristaService'

import {Motorista} from '../../models/MotoristaModel'
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-motorista-cadastro-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './motorista-cadastro-page.component.html',
  styleUrl: './motorista-cadastro-page.component.css'
})
export class MotoristaCadastroPageComponent {

  constructor(private router: Router, private service: AuthService, private motoristaService: MotoristaService) {

    this.service.Autenticar().then((autenticado) => {
      if (autenticado) {      
        
      }else{
        this.router.navigate(['/login']);
      }
    }).catch((error) => {
        console.error('Ocorreu um erro:', error);
    });

  }
  
  motorista: Motorista = {
    id: null,
    nome: '',
    cpf: '',
    numeroCNH: '',
    categoriaCNH: 0,
    dataNascimento: null,
    status: false
  };

  CadastrarMotorista(form: any){

    console.log(form);
    this.motorista.nome = form.value.nome;
    this.motorista.cpf = form.value.cpf;
    this.motorista.numeroCNH = form.value.numeroCNH;
    this.motorista.categoriaCNH = parseInt(form.value.categoriaCNH);
    this.motorista.dataNascimento = form.value.dataNascimento;
    this.motorista.status = this.stringToBool(form.value.status);

    this.motoristaService.CadastrarMotorista(this.motorista).then(res =>{
      this.router.navigate(['/motoristas']);
    });
  }

    stringToBool(value: any): boolean {
      const lowercaseValue = value.toLowerCase().trim();
      if (lowercaseValue === 'true') {
          return true;7
      } 
      else {
          return false;
      }
    }
}
