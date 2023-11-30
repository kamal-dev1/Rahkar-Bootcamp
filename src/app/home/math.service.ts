import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MathService {

  counter: number = 0;

  getCounter(): number {
    return this.counter;
  }

  add() {
    this.counter++;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }
}
