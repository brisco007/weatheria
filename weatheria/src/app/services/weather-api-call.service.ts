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
  baseUrlActual = "https://api.openweathermap.org/data/2.5/weather?q=";
  baseURl = "https://api.openweathermap.org/data/2.5/forecast?q=";

  constructor(public http: HttpClient) {}

  getCityWeatherByName(city: string): Subject<any> {
    const dataSubject = new Subject<Array<any>>();
    this.city = city;
    console.log(this.city);
    this.http
      .get(this.baseUrlActual + this.city + "&appid=" + this.apiKey)
      .subscribe((weather: any) => {
        dataSubject.next(weather);
      });
    return dataSubject;
  }

  getDailyForecast(city: string): Subject<Array<any>> {
    const dataSubject = new Subject<Array<any>>();
    this.city = city;
    console.log(this.city);
    this.http
      .get(this.baseURl + this.city + "&appid=" + this.apiKey)
      .subscribe((weather: any) => {
        dataSubject.next(weather.list);
      });
    return dataSubject;
  }

  getHourlyForecast(city: string): Subject<Array<any>> {
    const dataSubject = new Subject<Array<any>>();
    this.city = city;
    console.log(this.city);
    this.http
      .get(this.baseURl + this.city + "&appid=" + this.apiKey)
      .subscribe((weather: any) => {
        dataSubject.next(weather.list);
      });
    return dataSubject;
  }
}
