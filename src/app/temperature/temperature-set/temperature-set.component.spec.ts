import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureSetComponent } from './temperature-set.component';

describe('TemperatureSetComponent', () => {
  let component: TemperatureSetComponent;
  let fixture: ComponentFixture<TemperatureSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperatureSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
