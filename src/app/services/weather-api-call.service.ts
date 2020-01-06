import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject, Observable } from "rxjs";

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

  constructor(public http: HttpClient) {}

  getCityWeatherByName(city: string): Subject<string> {
    const dataSub = new Subject<string>();
    this.city = city;
    this.http.get(this.actualWeatherUrl).subscribe(
      data => {
        console.log(data["weather"]);
        dataSub.next(data["weather"]);
      },
      err => {
        console.log(err);
      }
    );
    return dataSub;
  }

  getDailyForecast(city: string): Subject<Array<any>> {
    const dataSubject = new Subject<Array<any>>();
    this.city = city;
    this.http.get(this.daylyForecastUrl).subscribe((weather: any) => {
      dataSubject.next(weather.list);
    });
    return dataSubject;
  }

  getHourlyForecast(city: string): Subject<Array<any>> {
    const dataSubject = new Subject<Array<any>>();
    this.city = city;
    this.http.get(this.hourlyForecastUrl).subscribe((weather: any) => {
      dataSubject.next(weather.list);
    });
    return dataSubject;
  }
}
