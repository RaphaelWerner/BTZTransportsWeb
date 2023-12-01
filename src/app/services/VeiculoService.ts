import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Veiculo } from '../models/VeiculoModel';

@Injectable({
  providedIn: 'root'
})

export class VeiculoService {

    constructor(
        private http: HttpClient
    ){ }

    GetVeiculos(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            const url = 'https://localhost:7164/api/Veiculo/';
            const token = localStorage.getItem('BTZTransportsTokenAuth');

            const headers = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            });
    
            const options = { headers: headers };
            
            try {
                const resposta  = this.http.get<any>(url, options).toPromise();
                resposta.then(veiculos => {
                    resolve(veiculos);
                })

                

            } catch (erro) {
                console.error(erro);
                console.log("erro service")
                throw erro; // Rejeita a Promise com o erro
            }
            
        });
    }

    CadastrarVeiculo(veiculo: Veiculo): Promise<Veiculo> {
        return new Promise<Veiculo>((resolve, reject) => {
            const url = 'https://localhost:7164/api/Veiculo';
            const token = localStorage.getItem('BTZTransportsTokenAuth');         

            const headers = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            });

            console.log()
            this.http.post(url, veiculo, { headers }).subscribe(
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