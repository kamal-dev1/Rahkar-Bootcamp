import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  constructor(private router: Router) {}

  users: any[] = [
    {
      id: 1,
      name: "Alireza",
      University: "Zanjan",
      image:"assets/images/1.jpg"
    },
    {
      id: 2,
      name: "Kamal",
      University: "Tehran",
      image:"assets/images/1.jpg"
    },
    {
      id:3,
      name:"bijan",
      University: "Tehran",
      image:"assets/images/1.jpg"
    }
  ];

  onClick(id: string) {
    this.router.navigate(['home/user', id])
  }
}
