import { Component, OnInit } from '@angular/core';
import { webSocket } from "rxjs/webSocket";

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

  constructor(){}

  dataArr: any = [];

  ngOnInit(): void {
    this.showData();
  }

  showData(){
    const wsUrl = 'wss://webfrontendassignment-isaraerospace.azurewebsites.net/api/SpectrumWS' ;
    const subject = webSocket(wsUrl);

    subject.subscribe(
      (msg: any) => {
        console.log('message received: ' + msg);
        const strData = JSON.stringify(msg);
        this.dataArr.push(strData);

        this.prepareData(msg);

        // const dataObj = {value: msg.Velocity , label: `${this.count}s`};
        // this.count += 0.5;
        // this.data.push(dataObj);
        
        // if(this.data.length > 30){
        //   for(let i = 1 ; i < 20 ; i++){
        //     this.data.shift();
        //   }
        // }

        // this.data = this.data.map( (item: any) => item);
      }, // Called whenever there is a message from the server.
      err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
      () => console.log('complete') // Called when connection is closed (for whatever reason).
    );
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

  handleChartLoad(event: any){

  }

}
