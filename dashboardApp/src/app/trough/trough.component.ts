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
  flag3 = false;
  flag4 = false;

  bottomTemp = null;
  bottomHum = null;
  bottomBulbdiff = null;

  topTemp2 = null;
  topHum2 = null;
  topBulbdiff2 = null;

  topTemp3 = null;
  topHum3 = null;
  topBulbdiff3 = null;

  topTemp4 = null;
  topHum4 = null;
  topBulbdiff4 = null;

  bottomTemp2 = null;
  bottomHum2 = null;
  bottomBulbdiff2 = null;

  bottomTemp3 = null;
  bottomHum3 = null;
  bottomBulbdiff3 = null;
  
  bottomTemp4 = null;
  bottomHum4 = null;
  bottomBulbdiff4 = null;

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

  tempAlertStatusTop3 = 0;
  tempAlertStatusBottom3 = 0;
  humAlertStatusTop3 = 0;
  humAlertStatusBottom3 = 0;
  tempAlertTextTop3 = "Top:   No alerts";
  tempAlertTextBottom3 = "Bottom:   No alerts";
  humAlertTextTop3 = "Top:   No alerts";
  humAlertTextBottom3 = "Bottom: No alerts";

  tempAlertStatusTop4 = 0;
  tempAlertStatusBottom4 = 0;
  humAlertStatusTop4 = 0;
  humAlertStatusBottom4 = 0;
  tempAlertTextTop4 = "Top:   No alerts";
  tempAlertTextBottom4 = "Bottom:   No alerts";
  humAlertTextTop4 = "Top:   No alerts";
  humAlertTextBottom4 = "Bottom: No alerts";


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes:SimpleChanges){
    
    try{
    //console.log("xxzzxzxz:",changes.dataArr.currentValue);
    if(changes.dataArr.currentValue.trough === "trough1"){
    this.topTemp = changes.dataArr.currentValue.data.data.temperature.top;
    this.bottomTemp = changes.dataArr.currentValue.data.data.temperature.bottom;
    this.topHum = changes.dataArr.currentValue.data.data.humidity.top;
    this.bottomHum = changes.dataArr.currentValue.data.data.humidity.bottom;
    this.topBulbdiff = changes.dataArr.currentValue.data.data.bulbDiff.top;
    this.bottomBulbdiff = changes.dataArr.currentValue.data.data.bulbDiff.bottom; 
    this.handleAlerts(changes.dataArr.currentValue.alerts);
    this.flag1 = !this.flag1

    }else if(changes.dataArr.currentValue.trough === "trough2"){
      this.topTemp2 = changes.dataArr.currentValue.data.data.temperature.top;
      this.bottomTemp2 = changes.dataArr.currentValue.data.data.temperature.bottom;
      this.topHum2 = changes.dataArr.currentValue.data.data.humidity.top;
      this.bottomHum2 = changes.dataArr.currentValue.data.data.humidity.bottom;
      this.topBulbdiff2 = changes.dataArr.currentValue.data.data.bulbDiff.top;
      this.bottomBulbdiff2 = changes.dataArr.currentValue.data.data.bulbDiff.bottom; 
      this.handleAlerts2(changes.dataArr.currentValue.alerts);
      this.flag2 = !this.flag2
    }
    else if(changes.dataArr.currentValue.trough === "trough3"){
      this.topTemp3 = changes.dataArr.currentValue.data.data.temperature.top;
      this.bottomTemp3 = changes.dataArr.currentValue.data.data.temperature.bottom;
      this.topHum3 = changes.dataArr.currentValue.data.data.humidity.top;
      this.bottomHum3 = changes.dataArr.currentValue.data.data.humidity.bottom;
      this.topBulbdiff3 = changes.dataArr.currentValue.data.data.bulbDiff.top;
      this.bottomBulbdiff3 = changes.dataArr.currentValue.data.data.bulbDiff.bottom; 
      this.handleAlerts3(changes.dataArr.currentValue.alerts);
      this.flag3 = !this.flag3

    }else if(changes.dataArr.currentValue.trough === "trough4"){
      this.topTemp4 = changes.dataArr.currentValue.data.data.temperature.top;
      this.bottomTemp4 = changes.dataArr.currentValue.data.data.temperature.bottom;
      this.topHum4 = changes.dataArr.currentValue.data.data.humidity.top;
      this.bottomHum4 = changes.dataArr.currentValue.data.data.humidity.bottom;
      this.topBulbdiff4 = changes.dataArr.currentValue.data.data.bulbDiff.top;
      this.bottomBulbdiff4 = changes.dataArr.currentValue.data.data.bulbDiff.bottom; 
      this.handleAlerts4(changes.dataArr.currentValue.alerts);
      this.flag4 = !this.flag4
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

handleAlerts3(alerts){
  this.tempAlertStatusTop3 = alerts.temperature.top.alertType;
  this.tempAlertTextTop3 = alerts.temperature.top.message;
  this,this.tempAlertStatusBottom3 = alerts.temperature.bottom.alertType;
  this.tempAlertTextBottom3 = alerts.temperature.bottom.message;

  this.humAlertStatusTop3 = alerts.bulbDiff.top.alertType;
  this.humAlertTextTop3 = alerts.bulbDiff.top.message;
  this.humAlertStatusBottom3 = alerts.bulbDiff.top.alertType;
  this.humAlertTextBottom3 = alerts.bulbDiff.bottom.message;
  
}

handleAlerts4(alerts){
  this.tempAlertStatusTop4 = alerts.temperature.top.alertType;
  this.tempAlertTextTop4 = alerts.temperature.top.message;
  this,this.tempAlertStatusBottom4 = alerts.temperature.bottom.alertType;
  this.tempAlertTextBottom4 = alerts.temperature.bottom.message;

  this.humAlertStatusTop4 = alerts.bulbDiff.top.alertType;
  this.humAlertTextTop4 = alerts.bulbDiff.top.message;
  this.humAlertStatusBottom4 = alerts.bulbDiff.top.alertType;
  this.humAlertTextBottom4 = alerts.bulbDiff.bottom.message;
  
}

}
