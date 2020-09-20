import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-temperature-set',
  templateUrl: './temperature-set.component.html',
  styleUrls: ['./temperature-set.component.css']
})
export class TemperatureSetComponent implements OnInit {

  sliderOptions: Options = {
    ceil: 90,
    floor: 75
  };

  newMinTemperature: number;
  newMaxTemperature: number;
  currentMaxTemperature: number;
  currentMinTemperature: number;

  ngOnInit(): void {
    // TODO: fetch temp - if fail revert to a default
    this.currentMaxTemperature = 85;
    this.currentMinTemperature = 75;
    this.newMaxTemperature = 85;  
    this.newMinTemperature = 75;
  }

  setTemperature() {
    this.currentMaxTemperature = this.newMaxTemperature;
    this.currentMinTemperature = this.newMinTemperature;

    console.log('Min Temp Set: ' + this.currentMaxTemperature);
    console.log('Max Temp Set: ' + this.currentMinTemperature);
  }

  reset() {
    this.newMinTemperature = this.currentMinTemperature;
    this.newMaxTemperature = this.currentMaxTemperature;
  }
}

