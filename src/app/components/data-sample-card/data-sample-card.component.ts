import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { DataSamplesRepository, DataSample } from '../../core';
import { ChartData, StatisticTileData } from '../../presentation/components';

@Component({
  selector: 'app-data-sample-card',
  templateUrl: './data-sample-card.component.html',
  styleUrls: ['./data-sample-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataSampleCardComponent implements OnInit {

  dataSample: DataSample;

  chartData: ChartData;

  tilesData: StatisticTileData[] = [];

  doctorsExpenses: StatisticTileData[] = [];

  constructor(
    private readonly dataSamplesRepository: DataSamplesRepository,
    private readonly changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.loadData();
  }

  private loadData(): void {
    this.dataSamplesRepository.GetDataSample().pipe(
      finalize(
        () => {
          this.changeDetector.markForCheck();
        }
      )).subscribe(
        (data) => {
          this.dataSample = data;

          this.chartData = {
            percent: data.expenses / data.budget,
            text: `$${data.expenses} of $${data.budget}`
          };

          this.tilesData = [
            {
              score: data.collections,
              name: 'Collections',
              percentage: data.collectionsPercentage  * 100,
              isNegative: data.collectionsPercentage < 0
            },
            {
              score: data.newPatients,
              name: 'New Patients',
              percentage: data.newPatientsPercentage  * 100,
              isNegative: data.newPatientsPercentage < 0
            },
            {
              score: data.missedAppointsment,
              name: 'Missed Appointsment',
              percentage: data.missedAppointsmentPercentage  * 100,
              isNegative: data.missedAppointsmentPercentage < 0
            },
          ];
        });
  }

}
