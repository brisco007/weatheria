import { WeatherApiCallService } from "./../services/weather-api-call.service";
import { Component, OnInit, Input } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: "app-weather-main-element",
  templateUrl: "./weather-main-element.component.html",
  styleUrls: ["./weather-main-element.component.css"]
})
export class WeatherMainElementComponent implements OnInit {
  temp;
  hum;
  type;
  weather;
  subActual: Subscription;
  constructor(private weather1: WeatherApiCallService) {}

  ngOnInit() {
    this.subActual = this.weather1
      .getCityWeatherByName("London")
      .subscribe(data => {
        console.log(this.parseActualWeather(data));
      });
  }

  parseActualWeather(data: any) {
    this.temp = Math.floor(data.main.temp - 273.15);
    this.type = new Date(Date.now()).toLocaleString();
    this.weather = data.weather[0].main;
    this.hum = data.main.humidity;
    //  response.pluviometrie = data.rain ? data.rain : 0;
  }
}
