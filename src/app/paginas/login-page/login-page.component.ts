import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

import {FormControl, FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';

import { AuthService} from '../../services/AuthService'
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';



@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ 
    FormsModule,
    CommonModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule
    
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {


  constructor(private router: Router, private service: AuthService, private fb: NonNullableFormBuilder) {
    //localStorage.setItem("BTZTransportsTokenAuth", "");
  }

  ngOnInit(): void {
    this.service.Autenticar().then((login) => {
      if (login) {
        this.router.navigate(['app']);
      }else{
        this.validateForm = this.fb.group({
          usuario: ['', [Validators.required]],
          senha: ['', [Validators.required]],
        });

      }
    })



  }


  username = '';
  password = '';

  validateForm: FormGroup<{
    usuario: FormControl<string>;
    senha: FormControl<string>;
  }> = this.fb.group({
    usuario: ['', [Validators.required]],
    senha: ['', [Validators.required]],
  });

  submitForm(): void {

    console.log(this.validateForm.value)
    var usuario = String(this.validateForm.get('usuario')?.value);
    var senha = String(this.validateForm.get('senha')?.value);

    this.service.Login(usuario, senha ).then((login) => {
      if (login) {
        this.router.navigate(['app']);
      }
    })

  }

}
