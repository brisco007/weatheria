import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherApiCallService } from 'src/app/services/weather-api-call.service';

@Component({
  selector: 'app-medium-weather-card',
  templateUrl: './medium-weather-card.component.html',
  styleUrls: ['./medium-weather-card.component.scss']
})
export class MediumWeatherCardComponent implements OnInit {
  temp;
  hum;
  type;
  weather;
  wind;
  subActual: Subscription;
  classWeather;
  @Input() ville;
  @Output() weatherEmitter = new EventEmitter<string>();

  constructor(private weather1: WeatherApiCallService) {}

  ngOnInit() {
    this.subActual = this.weather1
      .getCityWeatherByName(this.ville)
      .subscribe(data => {
        console.log(this.parseActualWeather(data));
        this.weatherEmitter.emit(this.weather);
      });
  }
  RefreshWeather() {
    this.subActual = this.weather1
      .getCityWeatherByName(this.ville)
      .subscribe(data => {
        this.parseActualWeather(data);
        this.weatherEmitter.emit(this.weather);

      });
  }
  parseActualWeather(data: any) {
    console.log("par actual", data)
    this.temp = Math.floor(data.main.temp - 273.15);
    this.type = new Date(Date.now()).toLocaleString();
    this.weather = data.weather[0].main;
    this.hum = data.main.humidity;
    this.wind = data.wind.speed;
    this.classWeather = this.getTheRightClass(this.weather);
    console.log("here is the weather","aaaaaaa",this.classWeather)

    //  response.pluviometrie = data.rain ? data.rain : 0;
  }


  getTheRightClass(data) {
    console.log(data)
    if (data == "Clear") {
      console.log("data for weather ",data)
      return "sunny"
    } else if (data == "Clouds" || data == "Drizzle" || data == "Haze" || data == "Mist") {
      console.log("data for weather ",data)
      return "clouds"
    } else if (data == "Rain") {
      console.log("data for weather ",data)
      return "rain"
    } else if (data == "Thunderstorm") {
      console.log("data for weather ",data)
      return "storm"
    } else if (data == "Snow") {
      console.log("data for weather ",data)
      return "snow"
    }
  }

}
