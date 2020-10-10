import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { ITemperatureInformation } from '../shared/models/temperatureinformation';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

  // TODO: replace with API call
  temperatureFromApi: ITemperatureInformation;

  constructor() { 
    this.temperatureFromApi = {
      currentLow: 75,
      currentHigh: 83
    }
  }

  // TODO: replace with API call
  getSetTemperatures(): Observable<ITemperatureInformation> {
    return of(this.temperatureFromApi);
  }

  // TODO: replace with API call
  setTemperature(newTemperatures: ITemperatureInformation) {
    this.temperatureFromApi = newTemperatures;
  }
}
