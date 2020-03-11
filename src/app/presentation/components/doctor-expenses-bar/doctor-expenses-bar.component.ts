import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { DoctorsExpenses } from 'src/app/core';

@Component({
  selector: 'app-doctor-expenses-bar',
  templateUrl: './doctor-expenses-bar.component.html',
  styleUrls: ['./doctor-expenses-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoctorExpensesBarComponent implements OnInit {

  @Input()
  doctorExpenses: DoctorsExpenses;

  constructor() { }

  ngOnInit() {
  }

  public getBarWidth(): string {
    const percent = this.getExpensesPercentage();
    return (percent < 100 ? percent.toFixed(0) : 100) + '%';
  }

  public getExpensesPercentage(): number {
    return (this.doctorExpenses.expenses / this.doctorExpenses.budget * 100);
  }
}
