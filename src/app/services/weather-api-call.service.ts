import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class WeatherApiCallService {
  apiKey = "41393bc5b41f72cdb6d1e809c4e23b48";
  city = "";
  numberOfDays = 5;
  actualWeatherUrl =
    "https://samples.openweathermap.org/data/2.5/weather?q=" +
    this.city +
    "&appid=" +
    this.apiKey;
  hourlyForecastUrl =
    "https://samples.openweathermap.org/data/2.5/forecast/hourly?q=" +
    this.city +
    "&appid=" +
    this.apiKey;
  daylyForecastUrl =
    "https://samples.openweathermap.org/data/2.5/forecast/daily?q=" +
    this.city +
    "&appid=" +
    this.apiKey;

  constructor() {}
}
