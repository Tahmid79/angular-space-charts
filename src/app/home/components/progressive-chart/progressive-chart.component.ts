import { Component, OnInit } from '@angular/core';
import { webSocket } from "rxjs/webSocket";

@Component({
  selector: 'app-progressive-chart',
  templateUrl: './progressive-chart.component.html',
  styleUrls: ['./progressive-chart.component.scss']
})
export class ProgressiveChartComponent implements OnInit {
  constructor(){}

  dataArr: any = [];

  ngOnInit(): void {
    this.showData();
  }

  showData(){
    const wsUrl = 'wss://webfrontendassignment-isaraerospace.azurewebsites.net/api/SpectrumWS' ;
    const subject = webSocket(wsUrl);

    subject.subscribe(
      msg => {
        console.log('message received: ' + msg);
        const strData = JSON.stringify(msg);
        this.dataArr.push(strData);
      }, // Called whenever there is a message from the server.
      err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
      () => console.log('complete') // Called when connection is closed (for whatever reason).
    );
  }

}
