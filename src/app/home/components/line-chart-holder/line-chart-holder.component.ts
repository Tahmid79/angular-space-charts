import { Component, OnInit } from '@angular/core';
import { webSocket } from "rxjs/webSocket";

@Component({
  selector: 'app-line-chart-holder',
  templateUrl: './line-chart-holder.component.html',
  styleUrls: ['./line-chart-holder.component.scss']
})
export class LineChartHolderComponent implements OnInit {
  data: any = [];
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

        const dataObj = {value: msg.Velocity , label: `${this.count}s`};
        this.count += 0.5;
        this.data.push(dataObj);
        
        if(this.data.length > 30){
          for(let i = 1 ; i < 20 ; i++){
            this.data.shift();
          }
        }

        this.data = this.data.map( (item: any) => item);
      }, // Called whenever there is a message from the server.
      err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
      () => console.log('complete') // Called when connection is closed (for whatever reason).
    );
  }
}
