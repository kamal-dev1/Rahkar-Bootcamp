import { Injectable } from '@angular/core';

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

  login(username: string, password: string):boolean {
    let user = this.users.find(u => u.username === username && u.password === password)
    if (user) {
      return true;
    } else {
      return false;
    }
  }
}
