import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Motorista } from '../../app/models/MotoristaModel';
import { getLocaleExtraDayPeriodRules } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class MotoristaService {

    constructor(
        private http: HttpClient
    ){ }


    GetMotoristas(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            const url = 'https://localhost:7164/api/Motorista/';
            const token = localStorage.getItem('BTZTransportsTokenAuth');

            const headers = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            });
    
            const options = { headers: headers };
            
            try {
                const resposta  = this.http.get<any>(url, options).toPromise();
                resposta.then(motoristas => {
                    resolve(motoristas);
                })

                

            } catch (erro) {
                console.error(erro);
                console.log("erro service")
                throw erro; // Rejeita a Promise com o erro
            }
            
        });
    }

    CadastrarMotorista(motorista: Motorista): Promise<Motorista> {
        return new Promise<Motorista>((resolve, reject) => {
            const url = 'https://localhost:7164/api/Motorista';
            const token = localStorage.getItem('BTZTransportsTokenAuth');         

            const headers = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            });
    
            this.http.post(url, motorista, { headers }).subscribe(
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