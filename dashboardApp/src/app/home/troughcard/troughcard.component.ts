import { Component, OnInit , Input, OnChanges, SimpleChanges} from '@angular/core';
import {Message } from '../../trough-data.service'


@Component({
  selector: 'app-troughcard',
  templateUrl: './troughcard.component.html',
  styleUrls: ['./troughcard.component.css']
})
export class TroughcardComponent implements OnInit, OnChanges {

  @Input() title = "";

  topTemp = 0;
  topHum = 0;
  topBulbdiff = 0.0;

  bottomTemp = 0;
  bottomHum = 0;
  bottomBulbdiff = 0.0;

  alertStatus = 0;

  @Input() data: Message = {
    trough: null,
    position: null,
    data:null,
    alerts:null
  };

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes:SimpleChanges){
    this.topTemp = changes.data.currentValue.data.data.temperature.top;
    this.bottomTemp = changes.data.currentValue.data.data.temperature.bottom;
    this.topHum = changes.data.currentValue.data.data.humidity.top;
    this.bottomHum = changes.data.currentValue.data.data.humidity.bottom;
    this.topBulbdiff = changes.data.currentValue.data.data.bulbDiff.top;
    this.bottomBulbdiff = changes.data.currentValue.data.data.bulbDiff.bottom; 

    this.handleAlerts(changes.data.currentValue.alerts);
   
    //this.addGraphVals()
  }

  handleAlerts(alerts){
    if(alerts.temperature.top.alertType==2 || alerts.temperature.bottom.alertType == 2 || alerts.bulbDiff.top.alertType==2 || alerts.bulbDiff.bottom.alertType == 2){
      this.alertStatus = 2;
      
    }else if(alerts.temperature.top.alertType==1 || alerts.temperature.bottom.alertType == 1 || alerts.bulbDiff.top.alertType==1 || alerts.bulbDiff.bottom.alertType == 1){
      this.alertStatus =  1;
      this.playBuzz();
      //this.tempAlertText = "Alert! Temperature is above 50 degrees."
    }else{
      this.alertStatus = 0;
      //this.tempAlertText = "No alerts";
    }
  
    
    
  }


  playBell(){
    let audio = new Audio();
    audio.src = '../../../assets/sound/bell.mp3';
    audio.load();
    audio.play();
  }

  playBuzz(){
    let audio = new Audio();
    audio.src = '../../../assets/sound/buzz.mp3';
    audio.load();
    audio.play();
  }
}
