import { Component, OnChanges, OnInit, SimpleChanges, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import Annotation from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit, OnChanges {

  @Input() data = [];
  @Input() labels = [];
  @Output() animationCompleteEvent = new EventEmitter();
  @Input() chartType = 'Series A' ;

  private newLabel? = 'New label';

  constructor() {
    Chart.register(Annotation);
  }

  ngOnInit(): void {
    // setInterval( ()=> {

    //   const getRandom = function randomIntFromInterval(min: number, max: number) { // min and max included 
    //     return Math.floor(Math.random() * (max - min + 1) + min)
    //   }
    //   const rndInt = getRandom(1, 100)
    //   this.lineChartData.datasets[0].data.push(rndInt);
    //   this.lineChartData.labels?.push("Label " + rndInt);
    //   this.chart?.update();
    // }, 500);
  }

  count = 0 ;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes && changes['data'] && changes['data'].currentValue){
      const {value, label} = changes['data'].currentValue ;

      this.labels = changes['data'].currentValue.map( (item: any) => item.label);
      this.data = changes['data'].currentValue.map( (item: any) => item.value);
      
      this.lineChartData.datasets[0].data = this.data;
      this.lineChartData.labels = this.labels;
      
      if(this.chartType !== this.lineChartData.datasets[0].label){
        this.lineChartData.datasets[0].label = this.chartType;
      }

      this.chart?.update();
    }
  }

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: this.chartType,
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
      // {
      //   data: [28, 48, 40, 19, 86, 27, 90],
      //   label: 'Series B',
      //   backgroundColor: 'rgba(77,83,96,0.2)',
      //   borderColor: 'rgba(77,83,96,1)',
      //   pointBackgroundColor: 'rgba(77,83,96,1)',
      //   pointBorderColor: '#fff',
      //   pointHoverBackgroundColor: '#fff',
      //   pointHoverBorderColor: 'rgba(77,83,96,1)',
      //   fill: 'origin',
      // },
      // {
      //   data: [180, 480, 770, 90, 1000, 270, 400],
      //   label: 'Series C',
      //   yAxisID: 'y1',
      //   backgroundColor: 'rgba(255,0,0,0.3)',
      //   borderColor: 'red',
      //   pointBackgroundColor: 'rgba(148,159,177,1)',
      //   pointBorderColor: '#fff',
      //   pointHoverBackgroundColor: '#fff',
      //   pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      //   fill: 'origin',
      // },
    ],
    labels: [],
    // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    aspectRatio: 1,
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      // xAxis: {
      //   ticks: {
      //       maxTicksLimit: 10
      //   }
      // },
      y: {
        position: 'left',
      },
      // y1: {
      //   position: 'right',
      //   grid: {
      //     color: 'rgba(255,0,0,0.3)',
      //   },
      //   ticks: {
      //     color: 'red',
      //   },
      // },
    },

    plugins: {
      legend: { display: true },
      annotation: {
        annotations: [
          // {
          //   type: 'line',
          //   scaleID: 'x',
          //   value: 'March',
          //   borderColor: 'orange',
          //   borderWidth: 2,
          //   label: {
          //     display: true,
          //     position: 'center',
          //     color: 'orange',
          //     // content: 'LineAnno',
          //     font: {
          //       weight: 'bold',
          //     },
          //   },
          // },
        ],
      },
    },
  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  private static generateNumber(i: number): number {
    return Math.floor(Math.random() * (i < 2 ? 100 : 1000) + 1);
  }

  public randomize(): void {
    for (let i = 0; i < this.lineChartData.datasets.length; i++) {
      for (let j = 0; j < this.lineChartData.datasets[i].data.length; j++) {
        this.lineChartData.datasets[i].data[j] =
          LineChartComponent.generateNumber(i);
      }
    }
    this.chart?.update();
  }

  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    // console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    // console.log(event, active);
  }

  public hideOne(): void {
    const isHidden = this.chart?.isDatasetHidden(1);
    this.chart?.hideDataset(1, !isHidden);
  }

  public pushOne(): void {
    this.lineChartData.datasets.forEach((x, i) => {
      const num = LineChartComponent.generateNumber(i);
      x.data.push(num);
    });
    this.lineChartData?.labels?.push(
      `Label ${this.lineChartData.labels.length}`
    );

    this.chart?.update();
  }

  public changeColor(): void {
    this.lineChartData.datasets[2].borderColor = 'green';
    this.lineChartData.datasets[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;

    this.chart?.update();
  }

  public changeLabel(): void {
    const tmp = this.newLabel;
    this.newLabel = this.lineChartData.datasets[2].label;
    this.lineChartData.datasets[2].label = tmp;

    this.chart?.update();
  }
}
