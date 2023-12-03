import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/AuthService';
import { AbastecimentoService } from '../../services/AbastecimentoService';
import { Abastecimento, AbastecimentoResponse } from '../../models/AbastecimentoModel';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-abastecimento-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './abastecimento-page.component.html',
  styleUrl: './abastecimento-page.component.css'
})
export class AbastecimentoPageComponent {

  constructor(private router: Router, private service: AuthService, private abastecimentoService: AbastecimentoService) {

    this.service.Autenticar().then((autenticado) => {
      if (autenticado) {
       this.carregarAbastecimentos()
        

        
      }else{
        this.router.navigate(['/login']);
      }
    }).catch((error) => {
        console.error('Ocorreu um erro:', error);
    });

  }
  
  abastecimentos: AbastecimentoResponse[] = [];

  carregarAbastecimentos(){
    this.abastecimentoService.GetAbastecimentos().then((resposta) =>{
        console.log(resposta);
        this.abastecimentos = resposta;
    });
  }

  novoAbastecimento() {
    this.router.navigate(['/abastecimentos/cadastro']);
  }

}
