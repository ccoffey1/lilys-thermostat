import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyticsComponent } from './temperature/analytics/analytics.component';
import { TemperatureSetComponent } from './temperature/temperature-set/temperature-set.component';


const routes: Routes = [
  { path: 'analytics', component: AnalyticsComponent },
  { path: '', redirectTo: '/temperature-set', pathMatch: 'full' },
  { path: 'temperature-set', component: TemperatureSetComponent },
  { path: '**', component: TemperatureSetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
