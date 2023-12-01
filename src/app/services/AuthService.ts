import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

    constructor(
        private http: HttpClient
    ){ }

      Login(usuario: string, senha: string): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            const url = 'https://localhost:7164/api/Usuario/Login';
            const corpoRequisicao = {
                login: usuario,
                senha: senha
            };

            const headers = new HttpHeaders({
                'Content-Type': 'application/json'
            });
    
            this.http.post(url, corpoRequisicao, { headers }).subscribe(
                (resposta: any) => {
                    const token = resposta?.Token || resposta?.token; // Verifica se a resposta contém a propriedade Token ou token
                        localStorage.setItem("BTZTransportsTokenAuth", token);
                        console.log(localStorage);
                        resolve(true);
                },
                (erro) => {
                    console.error(erro.error);
                    resolve(false); // Resolvendo a Promise com false se houve um erro na autenticação
                }
            );
        });
    }


    Autenticar(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            const url = 'https://localhost:7164/api/Usuario/Auth';
            const token = localStorage.getItem('BTZTransportsTokenAuth');
            const headers = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            });
    
            this.http.post(url, null, { headers }).subscribe(
                (resposta) => {
                    console.log("Deu");
                    resolve(true); // Resolvendo a Promise com true se a autenticação foi bem-sucedida
                },
                (erro) => {
                    console.error(erro);
                    resolve(false); // Resolvendo a Promise com false se houve um erro na autenticação
                }
            );
        });
    }
    


}