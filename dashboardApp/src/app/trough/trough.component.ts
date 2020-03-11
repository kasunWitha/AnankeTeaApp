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

  topTemp = 0;
  topHum = 0;
  topBulbdiff = 0.0;

  flag = false;

  bottomTemp = 0;
  bottomHum = 0;
  bottomBulbdiff = 0.0;

  tempTitle = "Temperature";
  humidTitle = "Humidity";

  tempAlertStatus = 1;
  humAlertStatus = 0;
  tempAlertText = "No alerts bla bla";
  humAlertText = "No alerts";


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes:SimpleChanges){
    //console.log("xxzzxzxz:",changes.dataArr.currentValue);
    this.topTemp = changes.dataArr.currentValue.data.data.temperature.top;
    this.bottomTemp = changes.dataArr.currentValue.data.data.temperature.bottom;
    this.topHum = changes.dataArr.currentValue.data.data.humidity.top;
    this.bottomHum = changes.dataArr.currentValue.data.data.humidity.bottom;
    this.topBulbdiff = changes.dataArr.currentValue.data.data.bulbDiff.top;
    this.bottomBulbdiff = changes.dataArr.currentValue.data.data.bulbDiff.bottom; 

    this.handleAlerts(changes.dataArr.currentValue.alerts);

    this.flag = !this.flag
     
    //this.addGraphVals()
}

handleAlerts(alerts){
  if(alerts.temperature.top.alertType==2 || alerts.temperature.bottom.alertType == 2){
    this.tempAlertStatus = 2;
    this.tempAlertText = "Warning! Temperature has beem above 50 degrees for more than 1 minute."
  }else if(alerts.temperature.top.alertType==1 || alerts.temperature.bottom.alertType == 1){
    this.tempAlertStatus =  1;
    this.tempAlertText = "Alert! Temperature is above 50 degrees."
  }else{
    this.tempAlertStatus = 0;
    this.tempAlertText = "No alerts";
  }

  if(alerts.bulbDiff.top.alertType==2 || alerts.bulbDiff.bottom.alertType == 2){
    this.humAlertStatus = 2;
    this.humAlertText = "Warning! Bulb difference has been above 7 for more than 1 minute."
  }else if(alerts.bulbDiff.top.alertType==1 || alerts.bulbDiff.bottom.alertType == 1){
    this.humAlertStatus =  1;
    this.humAlertText = "Alert! Bulb difference above 7."
  }else{
    this.humAlertStatus = 0;
    this.humAlertText = "No alerts";
  }
  
}

}
