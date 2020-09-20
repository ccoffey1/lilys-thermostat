import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng5SliderModule } from 'ng5-slider';
import { TemperatureSetComponent } from './temperature/temperature-set/temperature-set.component';
import { AnalyticsComponent } from './temperature/analytics/analytics.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureSetComponent,
    AnalyticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng5SliderModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
