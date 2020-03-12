import { Component, OnInit, Input ,OnChanges, SimpleChanges, ViewChild, ElementRef} from '@angular/core';
import {Message } from '../trough-data.service'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit,OnChanges {

  //@ViewChild('audioOption', {static: false}) audioPlayerRef: ElementRef;


  @Input() message: Message = {
    trough: null,
    position: null,
    data:null,
    alerts:null
  };

  loadHome: boolean;
  loadSettings: boolean;
  loadTrough:boolean;
  loadTrough2:boolean;

  brand = "Home"

  

  constructor() { }

  

  ngOnInit() {
    this.loadHome = true;
    this.loadSettings = false;
    this.loadTrough = false;
    this.loadTrough2 = false;
  }

  ngOnChanges(changes:SimpleChanges){
    this.handleAlerts(changes.message.currentValue.alerts)
  }

  handleAlerts(alerts){
    if(alerts.temperature.top.alertType==2 || alerts.temperature.bottom.alertType == 2 || alerts.bulbDiff.top.alertType==2 || alerts.bulbDiff.bottom.alertType == 2){
      this.playBuzz();
      
    }else if(alerts.temperature.top.alertType==1 || alerts.temperature.bottom.alertType == 1 || alerts.bulbDiff.top.alertType==1 || alerts.bulbDiff.bottom.alertType == 1){
      this.playBell();
     // this.playBuzz();
      //this.tempAlertText = "Alert! Temperature is above 50 degrees."
    }
  }

  playBell(){
    try{
    let audio = new Audio();
    audio.src = 'assets/sound/bell.mp3';
    audio.load();
    audio.play();
      //this.audioPlayerRef.nativeElement.play();
    }catch(err){
      console.log(err);
    }
  }

  playBuzz(){
    try{
    let audio = new Audio();
    audio.src = 'assets/sound/buzz.mp3';
    audio.load();
    audio.play();
    }catch(err){
      console.log(err);
    }
  }

  onSettingsClick(){
    this.loadHome =false;
    this.loadSettings = true;
    this. loadTrough = false;
    this.loadTrough2 = false;
  }

  onHomeClick(){
    this.loadHome =true;
    this.loadSettings = false;
    this.loadTrough = false;
    this.loadTrough2 = false;
    this.brand ="Home"
  }

  onTrough1Click(){
    this.loadHome =false;
    this.loadSettings = false;
    this.loadTrough = true;
    this.loadTrough2 = false;
    this.brand="Trough 1"
    
  }

  onTrough2Click(){
    this.loadHome =false;
    this.loadSettings = false;
    this.loadTrough = false;
    this.loadTrough2 = true;
    this.brand="Trough 2"
    
  }

  handleHomeEvent(event){
    console.log(event);
  }

  troughClickHandler(res: boolean){
    if(res)
    this.onTrough1Click();
    else this.onTrough2Click();
  }

}
