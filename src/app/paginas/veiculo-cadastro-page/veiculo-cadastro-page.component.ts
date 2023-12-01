import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

import { AuthService } from '../../services/AuthService';
import { VeiculoService } from '../../services/VeiculoService';

import { Veiculo } from '../../models/VeiculoModel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-veiculo-cadastro-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './veiculo-cadastro-page.component.html',
  styleUrl: './veiculo-cadastro-page.component.css'
})
export class VeiculoCadastroPageComponent {

  constructor(private router: Router, private service: AuthService, private veiculoService: VeiculoService) {

    this.service.Autenticar().then((autenticado) => {
      if (autenticado) {      
        
      } else {
        this.router.navigate(['/login']);
      }
    }).catch((error) => {
        console.error('Ocorreu um erro:', error);
    });

  }
  
  veiculo: Veiculo = {
    id: null,
    nome: '',
    placa: '',
    tipoCombustivel: 0,
    fabricante: '',
    anoFabricacao: 0,
    capacidadeTanque: 0,
    observacoes: null
  };

  CadastrarVeiculo(form: any){

    console.log(form);
    this.veiculo.nome = form.value.nome;
    this.veiculo.placa = form.value.placa;
    this.veiculo.tipoCombustivel = parseInt(form.value.tipoCombustivel);
    this.veiculo.fabricante = form.value.fabricante;
    this.veiculo.anoFabricacao = form.value.anoFabricacao;
    this.veiculo.capacidadeTanque = form.value.capacidadeTanque;
    this.veiculo.observacoes = form.value.observacoes;
    console.log(this.veiculo);
    this.veiculoService.CadastrarVeiculo(this.veiculo).then(res =>{
      this.router.navigate(['/veiculos']);
    });
  }
}
