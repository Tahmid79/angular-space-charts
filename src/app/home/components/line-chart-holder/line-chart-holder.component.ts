import { Component, OnInit } from '@angular/core';
import { webSocket } from "rxjs/webSocket";
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-line-chart-holder',
  templateUrl: './line-chart-holder.component.html',
  styleUrls: ['./line-chart-holder.component.scss']
})
export class LineChartHolderComponent implements OnInit {
  data: any = [];
  velocityData: any = [];
  altitudeData: any = [];
  temperatureData: any = [];

  labels: any = [];
  count = 0 ;

  connection: any = null;

  info = {
    status: 'No messages to show',
    ascending: false,
    actionNeeded: false
  }

  constructor(private homeService: HomeService){}

  ngOnInit(): void {
    this.showData();
  }

  showData(){
    this.resetData();
    const wsUrl = 'wss://webfrontendassignment-isaraerospace.azurewebsites.net/api/SpectrumWS' ;
    const subject = webSocket(wsUrl);

    this.connection = subject.subscribe(
      (msg: any) => {
        console.log('message received: ' + msg);
        this.prepareData(msg);
        this.prepareInfo(msg);

      }, // Called whenever there is a message from the server.
      err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
      () => console.log('complete') // Called when connection is closed (for whatever reason).
    );
  }

  disconnect(){
    if(this.connection){
      this.connection.unsubscribe();
    }
  }

  prepareData(msg: any){
    const props = ['Velocity', 'Altitude', 'Temperature'];
    const arrMap: any = {
      'Velocity' : this.velocityData,
      'Altitude': this.altitudeData,
      'Temperature': this.temperatureData
    }

    props.map( prop => {
      let array = arrMap[prop];
      
      const dataObj = { value: msg[prop], label: `${this.count}s` };
      array.push(dataObj);

      if (array.length > 30) {
        for (let i = 1; i < 20; i++) {
          array.shift();
        }
      }
      
      array = array.map( (item: any) => item);
      
      if(prop === 'Velocity'){
        this.velocityData = array;
      }
      if(prop === 'Altitude'){
        this.altitudeData = array;
      }
      if(prop === 'Temperature'){
        this.temperatureData = array;
      }

    });

    this.count += 0.5;
  }

  prepareInfo(msg: any){
    // const props = ['IsActionRequired', 'IsAscending', 'StatusMessage'] ;
    this.info.status = msg['StatusMessage'];
    this.info.actionNeeded = msg['IsActionRequired'];
    this.info.ascending = msg['IsAscending'];
  }

  handleChartLoad(event: any){

  }

  takeAction(){
    this.homeService.takeAction().subscribe( res => {});
  }

  resetData(){
    this.data = [];
    this.velocityData = [];
    this.altitudeData = [];
    this.temperatureData = [];

    this.labels = [];
    this.count = 0;

    this.disconnect();
    this.connection = null;

    this.info = {
      status: 'No messages to show',
      ascending: false,
      actionNeeded: false
    }
  }

}
