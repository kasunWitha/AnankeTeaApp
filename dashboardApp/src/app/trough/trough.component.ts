import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-trough',
  templateUrl: './trough.component.html',
  styleUrls: ['./trough.component.css']
})
export class TroughComponent implements OnInit, OnChanges {

  @Input() dataArr: any = [["0","0"], ["0", "0"]];

  humidity = this.dataArr[0];
  temp = this.dataArr[1];

  tempTitle = "Temperature";
  humidTitle = "Humidity"

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes:SimpleChanges){
    console.log("xxzzxzxz:",changes.dataArr.currentValue);
    this.humidity = changes.dataArr.currentValue[0];
    this.temp = changes.dataArr.currentValue[1];
     
    //this.addGraphVals()
}

}
