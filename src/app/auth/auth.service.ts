import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: any[] = [
    {
      name: 'John',
      username: 'admin',
      password: '1234',
    },
    {
      name: 'John',
      username: 'admin1',
      password: '12344',
    }
  ];
  isLogin=new Subject();
  isLoggedIn: boolean = false;

  login(username: string, password: string):Observable<any> {

    let user = this.users.find(u => u.username === username && u.password === password)
    if (user) {
      this.isLogin.next(true)
    } else {

      this.isLogin.next(false)
    }
    return this.isLogin.asObservable();
  }
}
