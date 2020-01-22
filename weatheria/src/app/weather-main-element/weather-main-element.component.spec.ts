import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherMainElementComponent } from './weather-main-element.component';

describe('WeatherMainElementComponent', () => {
  let component: WeatherMainElementComponent;
  let fixture: ComponentFixture<WeatherMainElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherMainElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherMainElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
