import { Component, OnInit, ChangeDetectionStrategy, Input, ViewChild, ElementRef, ChangeDetectorRef, OnDestroy, AfterViewInit } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { ChartData } from './chart-data.model';

@Component({
  selector: 'app-expenses-chart',
  templateUrl: './expenses-chart.component.html',
  styleUrls: ['./expenses-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpensesChartComponent implements AfterViewInit {

  @Input()
  public size = 180;
  @Input()
  public lineWidth = 15;

  private _chartData: ChartData;

  public get chartData(): ChartData {
    return this._chartData;
  }

  @Input()
  public set chartData(v: ChartData) {
    this._chartData = v;
    if (this.ctxMain) {
      while (this.graph.nativeElement.firstChild) {
        this.graph.nativeElement.removeChild(this.graph.nativeElement.firstChild);
      }
      this.initChart();
    }
  }

  public ctxMain: CanvasRenderingContext2D;

  @ViewChild('graph', { static: false })
  public graph: ElementRef;

  @ViewChild('score', { static: false })
  public score: ElementRef;

  @ViewChild('scoreStatus', { static: false })
  public scoreStatus: ElementRef;

  constructor(private readonly changeDetector: ChangeDetectorRef) {

  }

  public ngAfterViewInit() {
    this.initChart();
  }

  public initChart() {

    if (!this.chartData)
      return;

    const canvas = document.createElement('canvas');
    this.scoreStatus.nativeElement.textContent = this.chartData.text;
    this.score.nativeElement.textContent = (this.chartData.percent * 100).toFixed(2) + '%';

    const ctx = canvas.getContext('2d');
    this.ctxMain = ctx;
    canvas.width = canvas.height = this.size;

    this.graph.nativeElement.appendChild(canvas);

    ctx.translate(this.size / 2, this.size / 2); // change center
    ctx.rotate((-1 / 2 + 0 / 180) * Math.PI); // rotate -90 deg

    this.drawCircle(ctx, '#efefef', this.lineWidth - 1, 1000 / 1000);

    this.drawCircle(ctx, 'rgb(79,198,122)', this.lineWidth, this.chartData.percent);

    this.changeDetector.detectChanges();

  }

  private drawCircle(ctx, color, lineWidth, percent) {
    percent = Math.min(Math.max(0, percent || 1), 1);
    ctx.beginPath();
    ctx.arc(0, 0, this.radius, 0, Math.PI * 2 * percent, false);
    ctx.strokeStyle = color;
    ctx.lineCap = 'round'; // butt, round or square
    ctx.lineWidth = lineWidth;
    ctx.stroke();
  }

  private get radius() { return (this.size - this.lineWidth) / 2; }


}
