import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumWeatherCardComponent } from './medium-weather-card.component';

describe('MediumWeatherCardComponent', () => {
  let component: MediumWeatherCardComponent;
  let fixture: ComponentFixture<MediumWeatherCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumWeatherCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumWeatherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
