import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-weather-card',
  templateUrl: './small-weather-card.component.html',
  styleUrls: ['./small-weather-card.component.scss']
})
export class SmallWeatherCardComponent implements OnInit {

  @Input() time;
  @Input() weather;
  @Input() precip;
  @Input() min_temp;
  @Input() temp;
  @Input() max_temp;
  @Input() type;
  @Input() type_weather;

  WEATHER_TYPE = {
    "clear": "Clear",
    "cloud": "Clouds",
    "sunny":"Sunny",
    "rain": "Rain",
    "thunder": "Thunderstorm",
    "windy": "Windy"
  }

  CARD_TYPE = {
    "day": 'DAY',
    'hour': 'HOUR'
  }

  constructor() { }

  ngOnInit() {

  }

}
