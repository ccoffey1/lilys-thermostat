import { Component, OnInit } from '@angular/core';
import { IChartConfig } from './models/chartconfig';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  constructor() { }

  fluctuationsChart: IChartConfig;

  ngOnInit(): void {
    this.setupFluctuationsChart();

    setInterval(() => { this.addData() }, 1000);
  }

  second: number = 1;

  addData() {
    if (this.second > 20) {
      this.fluctuationsChart.barChartData[0].data.splice(0, 1);
      this.fluctuationsChart.barChartLabels.splice(0, 1);
    }

    this.fluctuationsChart.barChartLabels.push(this.second.toString());
    this.fluctuationsChart.barChartData[0].data.push(this.getRndInteger(73, 83));
    this.fluctuationsChart.barChartData[1].data.push(80 /* current temperature */);
    this.fluctuationsChart.barChartData[2].data.push(75 /* current temperature */);
    this.second++;
  }

  private setupFluctuationsChart() {
    this.fluctuationsChart = {
      barChartLabels: [],
      barChartType: 'line',
      barChartLegend: false,
      barChartData: [
        { data: [], fill: false },
        { data: [], pointRadius: 0, fill: '+1', borderColor: "green" },
        { data: [], pointRadius: 0, fill: false, borderColor: "green" }
      ],
      barChartOptions: {
        scaleShowVerticalLines: false,
        responsive: true,
        elements: {
          line: {
              tension: 0
            }
        },
        animation: {
          duration: 500
        }
      }
    }
  }

  private getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
}
