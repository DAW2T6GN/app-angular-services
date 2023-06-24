import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService: AuthService,
    private router: Router){

  }


  onSubmit(userEmailInput: HTMLInputElement, userPasswordInput: HTMLInputElement){
    this.authService.loging(userEmailInput.value, userPasswordInput.value);
    this.router.navigate(['dashboard'])
  }

}
