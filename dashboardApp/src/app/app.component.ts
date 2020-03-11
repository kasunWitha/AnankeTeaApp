import { Component } from '@angular/core';
import { WebsocketService } from "./websocket.service";
import { TroughDataService } from "./trough-data.service";
import {Message } from './trough-data.service'


//let outData =[];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WebsocketService, TroughDataService],
})
export class AppComponent {
  title = 'dashboardApp';
  public message : Message = {
    trough: null,
    position: null,
    data:null,
    alerts:null
  };;

  constructor(private troughDataService: TroughDataService){
    troughDataService.messages.subscribe(msg => {
      try{
      //  let data = JSON.stringify(msg);
      //  this.dataArr = [data.substring(37,43).replace("%", "").replace("%", "").split(" "), data.substring(67,76).replace("*C", "").replace("*C", "").replace("\\", "").replace("\"","").split(" ")];
       // let msgObj = 
        console.log("response", msg);
        this.message = msg;

        

      }catch(err){
        console.log(err);
      }
    });
  }
  
}
