import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathService } from '../math.service';
import { Observable } from "rxjs";
import { filter, take } from "rxjs/operators";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [MathService],
})
export class HeaderComponent {
  counter = 0;
  subscription: any;
  stream$ = new Observable((subscriber) => {
    setInterval(() => {
      subscriber.next(this.counter);
      this.counter += 1;
    }, 1000);
  });

  ngOnInit(): void {
    // this.stream.subscribe({
    //   next: (data) => {
    //     console.log(data);
    //   },
    //   error: (err) => {
    //     console.log('Ey baba');
    //   },
    //   complete: () => {
    //     console.log('Tamom shod');
    //   },
    // });
  }

  ngOnDestroy(): void {
    console.log("Destroy")
    this.subscription.unsubscribe();
  }
  // @Input() lastName!: string;
  constructor(private mathService: MathService) {
  }

  onClick() {
    this.stream$.pipe(
      take(5),
    ).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log('Ey baba');
      },
      complete: () => {
        console.log('Tamom shod');
      },
    });
  }

  onAdd() {
    this.mathService.add();
  }
}
