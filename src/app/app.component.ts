import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormControl, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(
      private formBuilder:FormBuilder,
     ){
    console.log("this is constructor");
  }
  form!:FormGroup
  ngOnInit(): void {
    console.log("this is ng on Init");
    this.form= this.formBuilder.group({
      username: ['alireza'],
      password:[''],
    });
    // form = new FormGroup({
    //   username: new FormControl(''),
    //   password: new FormControl(),
    //   age: new FormControl(),
    // });
  }
  ngOnChanges(): void {
   console.log("this is ng on Change");
  }
  ngAfterViewInit(): void {
    console.log("this is ngAfterViewInit");
  }
  obj = {
    name: "Alireza"
  }
  // form = new FormGroup({
  //   username: new FormControl(),
  //   password: new FormControl(),
  //   age: new FormControl(),
  // });
  // username = new FormControl("Alireza");
  password = new FormControl();
  users!:any[]
  onClick() {
    this.form.value
    this.users.push(this.form.value)
    console.log(this.form.valid);

    console.log(this.form.value);
    // this.password.setValue(12345)
    // console.log(this.username.value);
    // console.log(this.username.invalid);
  }

  // isShowingNavbar: boolean = true;
  // lastname: string = '';

  // ngOnInit(): void {
  //   setTimeout(() => {
  //     this.isShowingNavbar = false;
  //   }, 5000);
  // }

  // onHandeLastName(lastname: string) {
  //   this.lastname = lastname;
  // }
}
