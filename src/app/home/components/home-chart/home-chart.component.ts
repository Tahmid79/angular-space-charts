import { Component, ViewChild, OnInit, OnDestroy, Input } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { HomeService } from '../../services/home.service';


@Component({
  selector: 'app-home-chart',
  templateUrl: './home-chart.component.html',
  styleUrls: ['./home-chart.component.scss']
})
export class HomeChartComponent implements OnInit, OnDestroy{

  @Input() yLimit = 100 ;
  
  constructor(private homeService: HomeService){}

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  ngOnDestroy(): void {
    
  }

  ngOnInit(): void {
    
  }

  public barChartOptions: ChartConfiguration['options'] = {
    // We use these empty structures as placeholders for dynamic theming.
    responsive: true,
    scales: {
      x: {},
      y: {
        // min: -1.2 * (this.yLimit),
        // max: 1.2 * (this.yLimit)
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [DataLabelsPlugin];

  @Input() public barChartData: ChartData<'bar'> = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    ],
  };

  barChartData2: ChartData<'bar'> = {
    labels: ['Content'],
    datasets: [
      { data: [72.40030386024108], label: 'velocity' },
      { data: [-44586.45400334493], label: 'altitude' },
      { data: [-11.93613734364708], label: 'temperature' },
    ],
  };

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40,
    ];

    this.chart?.update();
  }

}
