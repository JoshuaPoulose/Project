import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string | undefined;
  password: string = '';

  login(): void {
    // Implement login functionality
    // Use this.email and this.password to authenticate the user
  }
}

