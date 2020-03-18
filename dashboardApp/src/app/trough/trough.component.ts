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
  
  tempRef : any[]=[
    {
      name: "",
      value: 50
    }
  ];

  humRef : any[]=[];

  bulbRef : any[]=[
    {
      name:"",
      value:2
    },
    {
      name:"",
      value:7
    }
  ];

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

  tempAlertStatusTop = 0;
  tempAlertStatusBottom = 0;
  humAlertStatusTop = 0;
  humAlertStatusBottom = 0;
  tempAlertTextTop = "Top:   No alerts";
  tempAlertTextBottom = "Bottom:   No alerts";
  humAlertTextTop = "Top:   No alerts";
  humAlertTextBottom = "Bottom: No alerts";

  tempAlertStatusTop2 = 0;
  tempAlertStatusBottom2 = 0;
  humAlertStatusTop2 = 0;
  humAlertStatusBottom2 = 0;
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
  

  this.tempAlertStatusTop = alerts.temperature.top.alertType;
  this.tempAlertTextTop = alerts.temperature.top.message;
  this,this.tempAlertStatusBottom = alerts.temperature.bottom.alertType;
  this.tempAlertTextBottom = alerts.temperature.bottom.message;

  this.humAlertStatusTop = alerts.bulbDiff.top.alertType;
  this.humAlertTextTop = alerts.bulbDiff.top.message;
  this.humAlertStatusBottom = alerts.bulbDiff.top.alertType;
  this.humAlertTextBottom = alerts.bulbDiff.bottom.message;
  
}


handleAlerts2(alerts){
  this.tempAlertStatusTop2 = alerts.temperature.top.alertType;
  this.tempAlertTextTop2 = alerts.temperature.top.message;
  this,this.tempAlertStatusBottom2 = alerts.temperature.bottom.alertType;
  this.tempAlertTextBottom2 = alerts.temperature.bottom.message;

  this.humAlertStatusTop2 = alerts.bulbDiff.top.alertType;
  this.humAlertTextTop2 = alerts.bulbDiff.top.message;
  this.humAlertStatusBottom2 = alerts.bulbDiff.top.alertType;
  this.humAlertTextBottom2 = alerts.bulbDiff.bottom.message;
  
}

}
