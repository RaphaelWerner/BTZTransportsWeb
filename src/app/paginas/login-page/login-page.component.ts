import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

import {FormsModule} from '@angular/forms';

import { AuthService} from '../../services/AuthService'

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ CommonModule, FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {


  constructor(private router: Router, private service: AuthService) {
    //localStorage.setItem("BTZTransportsTokenAuth", "");
  }

  username: string = '';
  password: string = '';
  errorMessage: string = '';


  Login() {

    this.service.Login(this.username,this.password).then((login) => {
      if (login) {
        console.log('teste ta pssando aqui')
        this.router.navigate(['/home']);
      }
    }).catch((error) => {
        console.log(error.error)
        this.errorMessage = error;
    });

  }

}
