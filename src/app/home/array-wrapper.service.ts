import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ArrayWrapperService {

  loopAndLog(data: any[]): void {
    data.forEach((item) => {
      console.log(item);
    });
  }

  loopAndLogIndex(data: any[]): void {
    data.forEach((item, index) => {
      console.log("data :", item);
      console.log("index :", index);
    });
  }

  thirdParameter(data: any[]): void {
    data.forEach((item, index, array) => {
      console.log(array);
    });
  }
}
