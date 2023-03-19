import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailAndPassword } from 'src/app/models/email-and-password';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  emailAndPass:EmailAndPassword
  constructor(readonly router:Router){
    this.emailAndPass=new EmailAndPassword();
    
  }
  LoginUser(loginForm:NgForm){
    console.log(this.emailAndPass);


    if(this.emailAndPass.email=='r'){
      this.router.navigate(["home"])
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Login Successful',
        showConfirmButton: false,
        timer: 1500,
        background:'azure'
      })

    }
    
  }
}
