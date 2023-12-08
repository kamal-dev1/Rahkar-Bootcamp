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
  // console.log("sad")
  //  this.authService.login("admin", "1234").subscribe(data => {
  //    console.log("sad",data)
  //  })
  this.authService.isLoggedIn = true;
  console.log(this.authService.isLoggedIn);
}
}
