import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  DoctorExpensesBarComponent,
  ExpensesChartComponent,
  CardComponent,
  StatisticTileComponent
} from './components';


@NgModule({
  declarations: [
    CardComponent,
    ExpensesChartComponent,
    DoctorExpensesBarComponent,
    StatisticTileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    ExpensesChartComponent,
    DoctorExpensesBarComponent,
    StatisticTileComponent
  ]
})
export class PresentationModule { }
