import { Component, OnInit } from '@angular/core';
import { IChartConfig } from './models/chartconfig';
import { TemperatureService } from '../../services/temperature.service';
import { ITemperatureInformation } from '../../shared/models/temperatureinformation';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  constructor(private temperatureService: TemperatureService) { }

  currentChart: IChartConfig;
  setTemperatureInformation: ITemperatureInformation;

  ngOnInit(): void {
    this.setupCurrentChart();
    this.getSetTemperatures();

    // TODO: For visual purposes - remove once API is setup
    setInterval(() => { this.addData() }, 1000);
  }

  second: number = 1;

  addData() {
    if (this.second > 20) {
      this.currentChart.barChartData[0].data.splice(0, 1);
      this.currentChart.barChartLabels.splice(0, 1);
    }

    this.currentChart.barChartLabels.push(this.second.toString());
    this.currentChart.barChartData[0].data.push(this.getRndInteger(
      this.setTemperatureInformation.currentLow, 
      this.setTemperatureInformation.currentHigh));
    this.currentChart.barChartData[1].data.push(this.setTemperatureInformation.currentHigh /* current temperature */);
    this.currentChart.barChartData[2].data.push(this.setTemperatureInformation.currentLow /* current temperature */);
    this.second++;
  }

  private setupCurrentChart() {
    this.currentChart = {
      barChartLabels: [],
      barChartType: 'line',
      barChartLegend: true,
      maintainAspectRatio: false,
      barChartData: [
        { data: [], color: 'black', label: 'Temperature Reading' },
        { data: [], pointRadius: 0, fill: false, borderColor: 'red', label: 'Set Maximum' },
        { data: [], pointRadius: 0, fill: false, borderColor: 'green', label: 'Set Minimum' }
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

  private getSetTemperatures() {
    this.temperatureService.getSetTemperatures()
      .subscribe(result => this.setTemperatureInformation = result);
  }

  private getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
}
