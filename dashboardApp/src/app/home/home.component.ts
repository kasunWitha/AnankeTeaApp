import { Component, OnInit, Input , OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';
import {Message } from '../trough-data.service'
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {
  
  @Input() message: Message = {
    trough: null,
    position: null,
    data:null,
    alerts:null
  };

  sp1Msg:Message;
  sp2Msg:Message;


  @Output() troughClicked : EventEmitter<boolean> = new EventEmitter();

  constructor() { }
  
 

  ngOnInit() {
  }

  ngOnChanges(changes:SimpleChanges){
    try{
      if(this.message.position ==="start"){
        this.sp1Msg=changes.message.currentValue;
      }else if(this.message.position ==="middle"){
        this.sp2Msg=changes.message.currentValue;
      }
    }catch(err){

    }
    //this.addGraphVals()
}

  

  onTrough1Click(){
    this.troughClicked.emit(true);
  }

  onTrough2Click(){
    this.troughClicked.emit(false);
  }

}
