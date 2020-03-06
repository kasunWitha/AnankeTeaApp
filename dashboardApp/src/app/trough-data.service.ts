import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { map } from 'rxjs/operators';
import { WebsocketService } from "./websocket.service";

const CHAT_URL = "ws://138.197.92.157:2222";

export interface Message {
  I2C: string
}

@Injectable({
  providedIn: 'root'
})
export class TroughDataService {

  public messages: Subject<Message>;




  constructor(wsService: WebsocketService) {
    console.log("troughData service subscribed");
    this.messages = <Subject<Message>>wsService.connect(CHAT_URL).pipe(map(
      (response: MessageEvent): Message => {
        try{
          let data = response.data;
         // return data;
         // console.log("data", response.data);
          return  data
        }catch (err){
          console.log("error", err);
          return null;
        }
      }
    ));
  } 
}
