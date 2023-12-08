import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TelegramService {

  constructor(private http:HttpClient) { }


  // sendMessage(chat_id:number,text:string){
  //   return this.http.get( `https://api.telegram.org/bot6347123369:AAERAJjd6bssvsGZAdlpmJT6QnY7SgQsGKs/sendMessage?chat_id=${chat_id}&text=${text}`)
  // }
  sendMessage(chat_id:number,text:string){
    var data={
      chat_id:chat_id,
      text:text
    }
    return this.http.post( `https://api.telegram.org/bot6347123369:AAERAJjd6bssvsGZAdlpmJT6QnY7SgQsGKs/sendMessage`,data)
  }
}
