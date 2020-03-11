import { Component, OnInit, Input } from '@angular/core';
import {Message } from '../trough-data.service'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() message: Message = {
    trough: null,
    position: null,
    data:null,
    alerts:null
  };

  loadHome: boolean;
  loadSettings: boolean;
  loadTrough:boolean;

  

  constructor() { }

  

  ngOnInit() {
    this.loadHome = true;
    this.loadSettings = false;
    this.loadTrough = false;
  }

  onSettingsClick(){
    this.loadHome =false;
    this.loadSettings = true;
    this. loadTrough = false;
  }

  onHomeClick(){
    this.loadHome =true;
    this.loadSettings = false;
    this.loadTrough = false;
  }

  onTrough1Click(){
    this.loadHome =false;
    this.loadSettings = false;
    this.loadTrough = true;
    
  }

  handleHomeEvent(event){
    console.log(event);
  }

}
