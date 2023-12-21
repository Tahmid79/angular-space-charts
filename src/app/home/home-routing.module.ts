import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDefaultComponent } from './components/home-default/home-default.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { LineChartHolderComponent } from './components/line-chart-holder/line-chart-holder.component';

const routes: Routes = [
  { path: '', component: HomeDefaultComponent },
  { path: 'line', component: LineChartHolderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
