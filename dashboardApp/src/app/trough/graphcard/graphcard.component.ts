import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-graphcard',
  templateUrl: './graphcard.component.html',
  styleUrls: ['./graphcard.component.css']
})
export class GraphcardComponent implements OnInit, OnChanges{

  status: number;
  flag = false;
  isWarningOn= false;
  lastTimestamp = Date.now();

  @Input() flagg : boolean;
  
  @Input() topValue: Number;

  @Input() bottomValue: Number;

  @Input() title: string;

  @Input() alertStatus: Number = 0;

  @Input() alertText: string = "No alerts."

  view: any[] = [null, 400];

  single: any[];
  multi: any[] = [
    {
      'name': 'Top',
      'series': []
    },
    {
      'name': 'Bottom',
      'series': []
    }
  ];

  
  
  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = false;
  xAxisLabel = '';
  showYAxisLabel = false;
  yAxisLabel = 'Degrees Celcius';
  timeline = true;

  count = 0;

  maxVal = 0;
  minVal = 200;

  graphmin = 5;
  graphmax = 60;

 // interval;

  colorScheme = {
    domain: ['#FFFFFF', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };

  

  //pie
  showLabels = true;



  // data goes here


  constructor() { }

  ngOnInit() {
    this.status = 0;
  
  }

  addGraphVals(topVal, botVal){

    var graph1Val = topVal;
    var graph2Val = botVal;
    this.multi[0].series.push( {  'name': new Date(new Date().getTime() ),
                                    'value':graph1Val} );
    this.multi[1].series.push( {  'name': new Date(new Date().getTime() ),
                                    'value': graph2Val} );
     // console.log("multi", this.multi);
      this.multi = [...this.multi];
      this.trimGraph();

      this.changeMaxMin(Math.max(graph1Val, graph2Val));
      this.changeMaxMin(Math.min(graph1Val, graph2Val));
      //this.toggleWarning(graph1Val);
      //this.changeCardStatus(graph1Val);
  }

  ngOnChanges(changes:SimpleChanges){

      console.log("graphcard changes", this.topValue, this.bottomValue);
    
      this.addGraphVals(this.topValue, this.bottomValue);
  }

  changeMaxMin(newVal){
    if(newVal[0]>this.maxVal){
      this.maxVal = newVal;
      //this.graphmax = newVal+10
    }

    if(newVal<this.minVal){
      this.minVal = newVal;
     // this.graphmin = newVal - 5;
    }
  }

  trimGraph(){
    if(this.multi[0].series.length>40){
      this.multi[0].series.shift();
      this.multi[1].series.shift();
    }
  }

onClick(){
 
    
}


initData() {
  for(let i =0; i< 20; i++){
    
    let val = this.randValue();
    
    this.multi[0].series.push({
      'name': new Date(new Date().getTime() + (i * 60000)),
      'value': val,
      'max': val * 1.5,
      'min': val * 0.5
    });
  }
}

randValue() {
  return Math.random() * 2 +20;
}



toggleWarning(val){
  if(Number(val>30)){
    if(this.flag){
      console.log("time interval", (Date.now()-this.lastTimestamp)/60000);
      if(((Date.now()-this.lastTimestamp)/60000>1)){
          //code for alert
          if(!this.isWarningOn){
              console.log("show Warning");
              this.isWarningOn = true;
          }
          this.lastTimestamp = Date.now();
      }

    }else{
        this.flag = true;
        this.lastTimestamp = Date.now();

    }
  }else{
    
    if(this.isWarningOn){
      console.log("hide Warning");
      this.isWarningOn = false;
    }
    this.flag = false;
                        
  }
}

}

