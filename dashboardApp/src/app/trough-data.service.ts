import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { map } from 'rxjs/operators';
import { WebsocketService } from "./websocket.service";

const CHAT_URL = "ws://138.197.92.157:3000";

export interface Message {
  trough: string,
  position: string,
  data: any,
  alerts: any
}

@Injectable({
  providedIn: 'root'
})
export class TroughDataService {

  public messages: Subject<Message>;





  constructor(private wsService: WebsocketService) {
    console.log("troughData service subscribed");
    this.messages = <Subject<Message>>wsService.connect(CHAT_URL).pipe(map(
      (response: MessageEvent): Message => {
        try{
          let data =JSON.parse( response.data);
         // return data;
         // console.log("data", response.data);
          return  {
            trough: data.trough,
            position: data.position,
            data: data.data,
            alerts: data.alerts
          }
        }catch (err){
          console.log("error", err);
          return null;
        }
      }
    ));
  } 
}
