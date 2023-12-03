import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

import { AuthService} from '../../services/AuthService'
import { MotoristaService} from '../../services/MotoristaService'

import {Motorista} from '../../models/MotoristaModel'
import {FormsModule} from '@angular/forms';

import { EnumCategoriaCNHPipe } from '../../pipes/enumCNHPipe';
import { formatCPF } from '../../pipes/CPFFormatPipe';

@Component({
  selector: 'app-motorista-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    EnumCategoriaCNHPipe,
    formatCPF,
  ],
  templateUrl: './motorista-page.component.html',
  styleUrl: './motorista-page.component.css',
})

export class MotoristaPageComponent {

  constructor(private router: Router, private service: AuthService, private motoristaService: MotoristaService) {

    this.service.Autenticar().then((autenticado) => {
      if (autenticado) {
       this.carregarMotoristas()
        

        
      }else{
        this.router.navigate(['/login']);
      }
    }).catch((error) => {
        console.error('Ocorreu um erro:', error);
    });

  }
  
  motoristas: Motorista[] = [];

  carregarMotoristas(){
    this.motoristaService.GetMotoristas().then((resposta) =>{
        console.log(resposta);
        this.motoristas = resposta;
    });
  }

  novoMotorista() {
    this.router.navigate(['/motoristas/cadastro']);
  }

  editarMotorista(motorista: Motorista) {
      // Lógica para editar o motorista
  }

  excluirMotorista(motorista: Motorista) {
      // Lógica para excluir o motorista
  }

}
