import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './loginService';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  username;
  password;
  showMessage = false;
  showError = false;

  login() {
    if (this.password && this.username) {
      console.log(this.router);
      let loginObject = {
        username: this.username,
        password: this.password
      }
      this.loginService.login(loginObject).subscribe((data) => {
        this.router.navigate(['/dashboard'])
      }, (err) => {
        this.showError = true;
        console.log('error', err);
      })
    } else {
      this.showMessage = true;
    }
  }
}
