import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
    this.addItems()
    // this.removeAt(0)
    console.log(this.items);

    // this.sendMessage("سلام")
  }
  errorMessage:string|null = null;
  form:FormGroup=this.formBuilder.group({
    text:["",Validators.required],
    items:this.formBuilder.array([])
  })


  get items():FormArray{
    return this.form.get('items') as FormArray;
  }

  addItems(){
    this.items.push(this.formBuilder.group({
      name:[""],
      // mobile:['']
    }))
  }

  removeAt(index:number){
    this.items.removeAt(index)
  }
  colNumber:number=4
  convertlistToTelegramFormat(list:any[]){
    var arrayOfTelegramFormat:any=  []
     var rowNumber=Math.ceil(list.length/this.colNumber)
     for(let i=0;i<rowNumber;i++){
      let arrayRow=[];

      for(let j=0;j<this.colNumber;j++){
        let keyIndex=(i*2)+j
        if(typeof list[keyIndex] !== 'undefined'){
          arrayRow.push({text:list[keyIndex].name,callback_data:""})
        }

      }
      arrayOfTelegramFormat.push(arrayRow)
     }

    //  [
    //   [{},{}],
    //   [{},{},{}]
    //  ]
    // [{text:"wer",callback_data:""},{text:"ert",callback_data:""},{text:"ert",callback_data:""}],
    // [{text:"ert",callback_data:""}]


    // list.forEach((element,i) => {
    //   arrayOfTelegramFormat.push(
    //     [
    //       {text:element.name,callback_data:element.name}
    //     ]
    //   )

    // });
    return arrayOfTelegramFormat

  }

  submite(){
    this.errorMessage=null
    if (this.form.valid) {



        this.telegramService.sendMessage(
          this.caht_id[0],
          this.form.get('text')?.value,
          this.convertlistToTelegramFormat(this.items.value)
          ).subscribe(data=>{

        })

      }
      else{
       this.errorMessage="text is empty"

      }
  }
  // [
  //   [{"text":"asdasd",calback_data:"sdfsdf"},{"text":"asdasd",calback_data:"sdfsdf"}]
  // ]
  // [
  //   {
  //     "name": "دکمه 1"
  //   },
  //   {
  //     "name": "دکمه 2"
  //   },
  //   {
  //     "name": "دکمه 3"
  //   }
  // ]
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
