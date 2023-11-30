import { Component } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { MathService } from "./math.service";
import { ArrayWrapperService } from "./array-wrapper.service";
import { HeaderComponent } from "./header/header.component";
import { BodyComponent } from "./body/body.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
  standalone: true,
  // providers:[MathService],
  imports: [HeaderComponent, BodyComponent]
})
export class HomeComponent {

  constructor(
    private mathService: MathService,
    private arrayWrapperService: ArrayWrapperService
  ) {
    // console.log(this.arrayWrapperService.loopAndLog([1, 2,3,4]));
    // console.log(this.arrayWrapperService.loopAndLogIndex([1, 2,3,4]));
    console.log(this.arrayWrapperService.thirdParameter([1,2,3,4]))
  }
}
