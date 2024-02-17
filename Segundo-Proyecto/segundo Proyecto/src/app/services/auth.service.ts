import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {}

  loginUser(credential: any){
    return new Promise((accept, reject) => {
      const storedUser = localStorage.getItem('user');
      const { email = '', password = '' } = storedUser ? JSON.parse(storedUser) : {};
      if(
        credential.email == email 
        && credential.password == password
        ){
        accept('Login correcto');
      }else{
        reject('Login incorrecto');
      }
    });
  }

  logoutUser() {
    return new Promise((accept, reject) => {
      accept('Logout correcto');
    });
  }

  registerUser(registerData: any) {
    localStorage.setItem('user', JSON.stringify(registerData));
    console.log(registerData);
    this.router.navigate(['/login']);
  }

}


