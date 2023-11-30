import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth',
  template: `<router-outlet />`,
  imports: [RouterModule],
  standalone: true
})
export class AuthComponent {
  a: number[] = [1,2,3,4,5,6,7,8,9];

  ngOnInit(): void {
    // for (let i = 0; i < this.a.length; i++) {
    //   console.log(this.a[i]);
    // }
    // let b = this.a.filter((item) => {
    //   return item % 2 === 0;
    // });

    // forEach
    // map
    // filter
    // sort
    // reduce
    // includes
    // splice
  }
}
