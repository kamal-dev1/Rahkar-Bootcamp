import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {TelegramService} from "./telegram-service.service"
@Component({
  selector: 'app-telegram',
  standalone: true,
  imports: [CommonModule, HttpClientModule,ReactiveFormsModule],
  templateUrl: './telegram.component.html',
  styleUrl: './telegram.component.scss',
})
export class TelegramComponent {
  constructor(private telegramService: TelegramService,
    private formBuilder: FormBuilder
    ) {}
  caht_id: number[] = [420955418, 75820215];
  ngOnInit(): void {
    // this.sendMessage("سلام")
  }
  errorMessage:string|null = null;
  form:FormGroup=this.formBuilder.group({
    text:["",Validators.required]
  })
  submite(){
    this.errorMessage=null
    if (this.form.valid) {
        this.telegramService.sendMessage(
          this.caht_id[0],this.form.get('text')?.value
          ).subscribe(data=>{

        })

      }
      else{
       this.errorMessage="text is empty"

      }
  }
  // name="1"
  // text=`hgdfj${this.name}hgdgh`
  // sendMessage(text: string) {
  //   this.caht_id.forEach((element) => {
  //     this.http
  //       .get(

  //       )
  //       .subscribe((data) => {});
  //   });
  // }
}
