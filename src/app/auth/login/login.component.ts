import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isLogin: boolean = false;
constructor(private authService: AuthService){

}

login(){
  this.isLogin = this.authService.login("admin", "1234")
  console.log(this.isLogin)
}
}
