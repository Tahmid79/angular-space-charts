import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDefaultComponent } from './components/home-default/home-default.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { LineChartHolderComponent } from './components/line-chart-holder/line-chart-holder.component';
import { ChartHolderComponent } from './components/chart-holder/chart-holder.component';

const routes: Routes = [
  {
    path: '', component: HomeDefaultComponent, children: [
      {
        path: '', component: ChartHolderComponent, pathMatch: 'full'
      },
      {
        path: 'line', component: LineChartHolderComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
