import { Routes } from '@angular/router';
import {LoginPageComponent } from '../app/paginas/login-page/login-page.component'
import {InicialPageComponent } from '../app/paginas/inicial-page/inicial-page.component'

import { MotoristaPageComponent  } from '../app/paginas/motorista-page/motorista-page.component'
import { MotoristaCadastroPageComponent  } from '../app/paginas/motorista-cadastro-page/motorista-cadastro-page.component'
import { VeiculoPageComponent } from './paginas/veiculo-page/veiculo-page.component';
import { VeiculoCadastroPageComponent } from './paginas/veiculo-cadastro-page/veiculo-cadastro-page.component';
import { AbastecimentoPageComponent } from './paginas/abastecimento-page/abastecimento-page.component';
import { AbastecimentoCadastroPageComponent } from './paginas/abastecimento-cadastro-page/abastecimento-cadastro-page.component';

export const routes: Routes = [
    { path: '', component: LoginPageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'home', component: InicialPageComponent },
    { path: 'motoristas', component: MotoristaPageComponent },
    { path: 'motoristas/cadastro', component: MotoristaCadastroPageComponent },
    { path: 'veiculos', component: VeiculoPageComponent },
    { path: 'veiculos/cadastro', component: VeiculoCadastroPageComponent },
    { path: 'abastecimentos', component: AbastecimentoPageComponent },
    { path: 'abastecimentos/cadastro', component: AbastecimentoCadastroPageComponent }
    
];
