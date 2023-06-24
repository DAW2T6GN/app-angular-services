import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  loging(email: string, password: string ): void{
    sessionStorage.setItem('isLogged', 'true');
  }

  logout(): void {
    sessionStorage.clear();
  }

}
