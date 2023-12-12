import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-chart-holder',
  templateUrl: './chart-holder.component.html',
  styleUrls: ['./chart-holder.component.scss']
})
export class ChartHolderComponent implements OnInit {
  chartDataArr: any = [];
  barChartData: ChartData<'bar'> = {
    labels: ['Content'],
    datasets: [
      { data: [72.40030386024108], label: 'velocity' },
      { data: [-44586.45400334493], label: 'altitude' },
      { data: [-11.93613734364708], label: 'temperature' },
    ],
  };

  constructor(){}
  
  ngOnInit(): void {
    this.createData();
  }

  createData(){
    // chart 1
    const chart1 = Object.assign({}, this.barChartData);
    chart1.labels = ['Velocity'];
    const char1Arr = this.barChartData.datasets[0].data.map(item => item);
    const chart1DataObj = [{ data: char1Arr, label: 'velocity' }] ;
    chart1.datasets = chart1DataObj;

    // chart 2 
    const chart2 = Object.assign({}, this.barChartData);
    chart2.labels = ['Altitude'];
    const char1Arr2 = this.barChartData.datasets[1].data.map(item => item);
    const chart1DataObj2 = [{ data: char1Arr2, label: 'Altitude' }] ;
    chart2.datasets = chart1DataObj2;

    // chart 3
    const chart3 = Object.assign({}, this.barChartData);
    chart3.labels = ['Temperature'];
    const char1Arr3 = this.barChartData.datasets[2].data.map(item => item);
    const chart1DataObj3 = [{ data: char1Arr3, label: 'Temperature' }] ;
    chart3.datasets = chart1DataObj3;

    this.chartDataArr.push(chart1);
    this.chartDataArr.push(chart2);
    this.chartDataArr.push(chart3);
  }

}
