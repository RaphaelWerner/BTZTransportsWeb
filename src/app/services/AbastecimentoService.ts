import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Abastecimento } from '../models/AbastecimentoModel';

@Injectable({
  providedIn: 'root'
})

export class AbastecimentoService {

    constructor(
        private http: HttpClient
    ){ }

    
    GetAbastecimentos(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            const url = 'https://localhost:7164/api/Abastecimento/';
            const token = localStorage.getItem('BTZTransportsTokenAuth');

            const headers = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            });
    
            const options = { headers: headers };
            
            try {
                const resposta  = this.http.get<any>(url, options).toPromise();
                resposta.then(abastecimentos => {
                    resolve(abastecimentos);
                })

                

            } catch (erro) {
                console.error(erro);
                console.log("erro service")
                throw erro; // Rejeita a Promise com o erro
            }
            
        });
    }

    CadastrarAbastecimento(abastecimento: Abastecimento): Promise<Abastecimento> {
        return new Promise<Abastecimento>((resolve, reject) => {
            const url = 'https://localhost:7164/api/Abastecimento';
            const token = localStorage.getItem('BTZTransportsTokenAuth');         

            const headers = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            });
    
            this.http.post(url, abastecimento, { headers }).subscribe(
                (resposta: any) => {
                        resolve(resposta);
                },
                (erro) => {
                    console.error(erro.error);
                }
            );
        });
    }
}