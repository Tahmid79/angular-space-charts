import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeDefaultComponent } from './components/home-default/home-default.component';
import { HomeChartComponent } from './components/home-chart/home-chart.component';

import { NgChartsModule } from 'ng2-charts';
import { ChartHolderComponent } from './components/chart-holder/chart-holder.component';


@NgModule({
  declarations: [
    HomeDefaultComponent,
    HomeChartComponent,
    ChartHolderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgChartsModule
  ]
})
export class HomeModule { }
