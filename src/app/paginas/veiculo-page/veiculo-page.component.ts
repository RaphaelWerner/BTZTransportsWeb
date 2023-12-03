import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { AuthService} from '../../services/AuthService'

import { Veiculo } from '../../models/VeiculoModel';
import { VeiculoService } from '../../services/VeiculoService';
import { FormsModule } from '@angular/forms';

import { EnumCombustivelPipe } from '../../pipes/enumCombustivelPipe';

@Component({
  selector: 'app-veiculo-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    EnumCombustivelPipe,
  ],
  templateUrl: './veiculo-page.component.html',
  styleUrl: './veiculo-page.component.css'
})

export class VeiculoPageComponent {

  constructor(private router: Router, private service: AuthService, private veiculoService: VeiculoService) {

    this.service.Autenticar().then((autenticado) => {
      if (autenticado) {
       this.carregarVeiculos()
        

        
      }else{
        this.router.navigate(['/login']);
      }
    }).catch((error) => {
        console.error('Ocorreu um erro:', error);
    });

  }

  veiculos: Veiculo[] = [];


  carregarVeiculos(){
    this.veiculoService.GetVeiculos().then((resposta) =>{
      console.log(resposta);
      this.veiculos = resposta;
  });
  }

  novoVeiculo() {
    this.router.navigate(['/veiculos/cadastro']);
  }

  editarVeiculo(veiculo: Veiculo) {
      // Lógica para editar o Veiculo
  }

  excluirVeiculo(veiculo: Veiculo) {
      // Lógica para excluir o Veiculo
  }
}
