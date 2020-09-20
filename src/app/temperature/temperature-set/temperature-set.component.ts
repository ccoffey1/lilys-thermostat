import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { TemperatureService } from 'src/app/services/temperature.service';
import { ITemperatureInformation } from 'src/app/shared/models/temperatureinformation';

@Component({
  selector: 'app-temperature-set',
  templateUrl: './temperature-set.component.html',
  styleUrls: ['./temperature-set.component.css']
})
export class TemperatureSetComponent implements OnInit {

  sliderOptions: Options = {
    ceil: 90,
    floor: 70
  };
  newMax: number;
  newMin: number;
  currentTemperatures: ITemperatureInformation;

  constructor(private temperatureService: TemperatureService) { }

  ngOnInit(): void {
    this.getCurrentTemperatures();
  }

  setTemperature() {
    this.temperatureService.setTemperature({
      currentHigh: this.newMax,
      currentLow: this.newMin
    })
    this.getCurrentTemperatures();
  }

  reset() {
    this.newMax = this.currentTemperatures.currentHigh;
    this.newMin = this.currentTemperatures.currentLow;
  }

  private getCurrentTemperatures() {
    this.temperatureService.getSetTemperatures()
      .subscribe(result => { 
        this.currentTemperatures = result;
        this.newMax = result.currentHigh;
        this.newMin = result.currentLow;
      });
  }
}

