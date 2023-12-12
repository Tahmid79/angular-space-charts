import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-chart-holder',
  templateUrl: './chart-holder.component.html',
  styleUrls: ['./chart-holder.component.scss']
})
export class ChartHolderComponent implements OnInit {
  loading = true;

  chartDataArr: any = [];
  limits: any = [];

  barChartData: ChartData<'bar'> = {
    labels: ['Content'],
    datasets: [
      { data: [72.40030386024108], label: 'velocity' },
      { data: [-44586.45400334493], label: 'altitude' },
      { data: [-11.93613734364708], label: 'temperature' },
    ],
  };

  constructor(private homeService: HomeService){}
  
  ngOnInit(): void {
    this.getData();
  }

  createData(Velocity: number = 10, Altitude: number = 10, Temperature: number = 10){
    // chart 1
    const chart1 = Object.assign({}, this.barChartData);
    chart1.labels = ['Velocity'];
    const char1Arr = [Velocity];
    const chart1DataObj = [{ data: char1Arr }] ;
    chart1.datasets = chart1DataObj;

    // chart 2 
    const chart2 = Object.assign({}, this.barChartData);
    chart2.labels = ['Altitude'];
    const char1Arr2 = [Altitude];
    const chart1DataObj2 = [{ data: char1Arr2 }] ;
    chart2.datasets = chart1DataObj2;

    // chart 3
    const chart3 = Object.assign({}, this.barChartData);
    chart3.labels = ['Temperature'];
    const char1Arr3 = [Temperature];
    const chart1DataObj3 = [{ data: char1Arr3, backgroundColor: '#9BD0F5', }] ;
    chart3.datasets = chart1DataObj3;

    let chartArr = [];

    chartArr.push(chart1);
    chartArr.push(chart2);
    chartArr.push(chart3);

    this.chartDataArr = chartArr ;
  }

  getData(){
    this.loading = true;
    this.homeService.getChartData().subscribe( (response: any) => {
      const props = ['velocity', 'altitude', 'temperature'];

      // round the numbers
      props.map( prop => response[prop] = Math.round( response[prop] ) )

      this.limits = props.map( prop => response[prop] = response[prop] )

      const {velocity, altitude, temperature} = response ;
      this.createData(velocity, altitude, temperature);
      this.loading = false;
    });
  }

  setMinmax(Velocity: number = 10, Altitude: number = 10, Temperature: number = 10){
    let values = [Velocity, Altitude, Temperature];
  }



}
