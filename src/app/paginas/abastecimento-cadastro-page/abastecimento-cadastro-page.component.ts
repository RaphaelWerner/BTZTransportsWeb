import { Component, OnInit } from '@angular/core';
import { MotoristaService } from '../../services/MotoristaService';
import { VeiculoService } from '../../services/VeiculoService';
import { Abastecimento } from '../../models/AbastecimentoModel';
import { Veiculo } from '../../models/VeiculoModel';
import { Motorista } from '../../models/MotoristaModel';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AbastecimentoService } from '../../services/AbastecimentoService';
import { Router } from '@angular/router';
import { AuthService } from '../../services/AuthService';

@Component({
  selector: 'app-abastecimento-cadastro-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './abastecimento-cadastro-page.component.html',
  styleUrl: './abastecimento-cadastro-page.component.css'
})
export class AbastecimentoCadastroPageComponent implements OnInit {

  abastecimento: Abastecimento = {
    id: 0,
    veiculoId: 0,
    motoristaId: 0,
    data: null,
    tipoCombustivel: 0,
    quantidadeAbastecida: 0,
    valorTotal: 0,
    
  };

  veiculos: Veiculo[] = []; // Array de veículos
  motoristas: Motorista[] = []; // Array de motoristas

  constructor(private router: Router, private authService: AuthService, private motoristaService: MotoristaService, private veiculoService: VeiculoService, private abastecimentoService: AbastecimentoService) { }

  ngOnInit(): void {

    this.authService.Autenticar().then((autenticado) => {
      if (autenticado) {
        this.carregarVeiculos();
        this.carregarMotoristas();
      }else{
        this.router.navigate(['/login']);
      }
    }).catch((error) => {
        console.error('Ocorreu um erro:', error);
    });


  }

  carregarVeiculos() {
    this.veiculoService.GetVeiculos().then((veiculos) => {
      this.veiculos = veiculos;
    });
  }

  carregarMotoristas() {
    this.motoristaService.GetMotoristas().then((motoristas) => {
      this.motoristas = motoristas;
    });
  }

  salvar(form: any){

    this.abastecimento.veiculoId = parseInt(form.value.veiculoId);
    this.abastecimento.motoristaId = parseInt(form.value.motoristaId);
    this.abastecimento.tipoCombustivel = parseInt(form.value.tipoCombustivel);
    this.abastecimento.data = form.value.data;
    this.abastecimento.quantidadeAbastecida = form.value.quantidadeAbastecida;

    this.abastecimentoService.CadastrarAbastecimento(this.abastecimento).then(res =>{
      this.router.navigate(['/veiculos']);
    });
  }
}
