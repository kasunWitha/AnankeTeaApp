import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import {Message } from '../trough-data.service'

@Component({
  selector: 'app-trough',
  templateUrl: './trough.component.html',
  styleUrls: ['./trough.component.css']
})
export class TroughComponent implements OnInit, OnChanges {

  @Input() dataArr:  Message = {
    trough: null,
    position: null,
    data:null,
    alerts:null
  };

  topTemp = null;
  topHum = null;
  topBulbdiff = null;
  

  flag1 = false;
  flag2 = false;

  bottomTemp = null;
  bottomHum = null;
  bottomBulbdiff = null;

  topTemp2 = null;
  topHum2 = null;
  topBulbdiff2 = null;

  bottomTemp2 = null;
  bottomHum2 = null;
  bottomBulbdiff2 = null;
  

  tempTitle = "Temperature";
  humidTitle = "Humidity";

  tempAlertStatus = 0;
  humAlertStatus = 0;
  tempAlertTextTop = "Top:   No alerts";
  tempAlertTextBottom = "Bottom:   No alerts";
  humAlertTextTop = "Top:   No alerts";
  humAlertTextBottom = "Bottom: No alerts";

  tempAlertStatus2 = 0;
  humAlertStatus2 = 0;
  tempAlertTextTop2 = "Top:   No alerts";
  tempAlertTextBottom2 = "Bottom:   No alerts";
  humAlertTextTop2 = "Top:   No alerts";
  humAlertTextBottom2 = "Bottom: No alerts";


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes:SimpleChanges){
    
    try{
    //console.log("xxzzxzxz:",changes.dataArr.currentValue);
    if(changes.dataArr.currentValue.position === "start"){
    this.topTemp = changes.dataArr.currentValue.data.data.temperature.top;
    this.bottomTemp = changes.dataArr.currentValue.data.data.temperature.bottom;
    this.topHum = changes.dataArr.currentValue.data.data.humidity.top;
    this.bottomHum = changes.dataArr.currentValue.data.data.humidity.bottom;
    this.topBulbdiff = changes.dataArr.currentValue.data.data.bulbDiff.top;
    this.bottomBulbdiff = changes.dataArr.currentValue.data.data.bulbDiff.bottom; 

    this.handleAlerts(changes.dataArr.currentValue.alerts);
    this.flag1 = !this.flag1

    }else if(changes.dataArr.currentValue.position === "middle"){
      this.topTemp2 = changes.dataArr.currentValue.data.data.temperature.top;
      this.bottomTemp2 = changes.dataArr.currentValue.data.data.temperature.bottom;
      this.topHum2 = changes.dataArr.currentValue.data.data.humidity.top;
      this.bottomHum2 = changes.dataArr.currentValue.data.data.humidity.bottom;
      this.topBulbdiff2 = changes.dataArr.currentValue.data.data.bulbDiff.top;
      this.bottomBulbdiff2 = changes.dataArr.currentValue.data.data.bulbDiff.bottom; 
      this.handleAlerts2(changes.dataArr.currentValue.alerts);
      this.flag2 = !this.flag2
    }

    

    }catch(err){
      console.log(err);
    }
     
    //this.addGraphVals()
}

handleAlerts(alerts){
  if(alerts.temperature.top.alertType==2 || alerts.temperature.bottom.alertType == 2){
    this.tempAlertStatus = 2;
  }else if(alerts.temperature.top.alertType==1 || alerts.temperature.bottom.alertType == 1){
    this.tempAlertStatus =  1;
  }else{
    this.tempAlertStatus = 0;
  
  }

  if(alerts.bulbDiff.top.alertType==2 || alerts.bulbDiff.bottom.alertType == 2){
    this.humAlertStatus = 2;
  }else if(alerts.bulbDiff.top.alertType==1 || alerts.bulbDiff.bottom.alertType == 1){
    this.humAlertStatus =  1;
  }else{
    this.humAlertStatus = 0;
  }

  this.tempAlertTextTop = alerts.temperature.top.message;
  this.tempAlertTextBottom = alerts.temperature.bottom.message;

  this.humAlertTextTop = alerts.bulbDiff.top.message;
  this.humAlertTextBottom = alerts.bulbDiff.bottom.message;
  
}


handleAlerts2(alerts){
  if(alerts.temperature.top.alertType==2 || alerts.temperature.bottom.alertType == 2){
    this.tempAlertStatus2 = 2;
  }else if(alerts.temperature.top.alertType==1 || alerts.temperature.bottom.alertType == 1){
    this.tempAlertStatus2 =  1;
  }else{
    this.tempAlertStatus2 = 0;
  }

  if(alerts.bulbDiff.top.alertType==2 || alerts.bulbDiff.bottom.alertType == 2){
    this.humAlertStatus2 = 2;
  }else if(alerts.bulbDiff.top.alertType==1 || alerts.bulbDiff.bottom.alertType == 1){
    this.humAlertStatus2 =  1;
  }else{
    this.humAlertStatus2 = 0;
  
  }

  this.tempAlertTextTop2 = alerts.temperature.top.message;
  this.tempAlertTextBottom2 = alerts.temperature.bottom.message;

  this.humAlertTextTop2 = alerts.bulbDiff.top.message;
  this.humAlertTextBottom2 = alerts.bulbDiff.bottom.message;
  
  
}

}
