import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AbastecimentoService {

    constructor(
        private http: HttpClient
    ){ }

    
    GetAbastecimentos(){
        var candidatos = this.http.get<Object>("https://estrategiaeleitoral.azurewebsites.net/api/votos/candidatos").toPromise();
        return candidatos;
    }

    RegisterAbastecimento() {
        const url = 'URL_DA_API'; // Substitua pela sua URL de destino
        const corpoRequisicao = {
          chave1: 'valor1',
          chave2: 'valor2'
          // Adicione outras chaves e valores conforme necessário
        };
    
        const token = localStorage.getItem('nome_do_seu_token'); // Recupera o token do localStorage

        const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` // Adiciona o token Bearer ao cabeçalho
        // Adicione outros headers, se necessário
        });

        this.http.post(url, corpoRequisicao, { headers }).subscribe(
        (resposta) => {
            console.log('Resposta:', resposta);
            // Faça algo com a resposta aqui
        },
        (erro) => {
            console.error('Erro:', erro);
            // Lide com o erro aqui
        }
        );
    }
}