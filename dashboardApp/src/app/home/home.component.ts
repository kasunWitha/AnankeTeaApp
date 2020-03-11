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


  @Output() troughClicked : EventEmitter<boolean> = new EventEmitter();

  constructor() { }
  
 

  ngOnInit() {
  }

  ngOnChanges(changes:SimpleChanges){
    console.log("xxzzxzxz:",changes.message.currentValue);
   
    //this.addGraphVals()
}

  

  onTrough1Click(){
    this.troughClicked.emit(true);
  }

}
