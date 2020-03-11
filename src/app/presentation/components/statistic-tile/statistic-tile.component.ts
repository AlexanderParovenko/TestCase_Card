import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { StatisticTileData } from './statistic-tile-data.model';

@Component({
  selector: 'app-statistic-tile',
  templateUrl: './statistic-tile.component.html',
  styleUrls: ['./statistic-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatisticTileComponent implements OnInit {

  private _tileData: StatisticTileData;

  public get tileData(): StatisticTileData {
    return this._tileData;
  }

  @Input()
  public set tileData(v: StatisticTileData) {
    this._tileData = v;
  }

  constructor() { }

  ngOnInit() {
  }

}
