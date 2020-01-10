import { WeatherApiCallService } from "./../services/weather-api-call.service";
import { Component, OnInit, Input } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: "app-weather-list",
  templateUrl: "./weather-list.component.html",
  styleUrls: ["./weather-list.component.scss"]
})
export class WeatherListComponent implements OnInit {
  listOfElements = [];
  subDaily: Subscription;
  subHourly: Subscription;

  /* the list elements is done with these objects
     {
       type (day or hour),
       temp,
       hum,
       weather,
       pluv
     }
  */
  type: string='HOUR';
  constructor(private weather: WeatherApiCallService) {}

  @Input() ville;
  RefreshWeather() {
    this.subHourly = this.weather
      .getDailyForecast(this.ville)
      .subscribe(data => {
        this.parseForecastHours(data);
      });
  }
  public listHours() {
    this.subDaily = this.weather
    .getDailyForecast(this.ville)
    .subscribe(data => {
      console.log(this.parseForecastHours(data));
    });
  }

  public listDays() {
    this.subDaily = this.weather
    .getDailyForecast(this.ville)
    .subscribe(data => {
      console.log(this.parseForecastDays(data));
    });
  }
  /* public onTypeChange(val: string) {
    this.type = val;
    if (this.type == "hourly") {

    } else {

    }
  } */

  ngOnInit() {
    this.subHourly = this.weather
      .getDailyForecast(this.ville)
      .subscribe(data => {
        this.parseForecastHours(data);
      });
  }

  ngOnDestroy(): void {
    this.subDaily.unsubscribe();
    this.subHourly.unsubscribe();
  }

  parseForecastHours(data: any[]) {
    let temp = "";
    let first = "";
    this.type = 'HOUR';
    this.listOfElements = [];
    let response: {
      type: string;
      temp: number;
      hum: number;
      weather: string;
      classDiv: any;
      //    pluviometrie: number;
    };
    //initialize temp
    response = {
      type: "",
      temp: 0,
      hum: 0,
      weather: "",
      classDiv: null
      //    pluviometrie: 0
    };
    response.temp = Math.floor(data[0].main.temp - 273.15);
    response.type = new Date(data[0].dt_txt).toLocaleTimeString();
    response.weather = data[0].weather[0].main;
    response.hum = data[0].main.humidity;
    response.classDiv = this.getTheRightClass(response.weather);
    //    response.pluviometrie = res.rain ? res.rain : 0;

    this.listOfElements.push(response);
    temp = response.type;
    first = response.type;
    data = data.slice(0, 5);
    for (let res of data) {
      response = {
        type: "",
        temp: 0,
        hum: 0,
        weather: "",
        classDiv: null
        //    pluviometrie: 0
      };
      response.temp = Math.floor(res.main.temp - 273.15);
      response.type = new Date(res.dt_txt).toLocaleTimeString();
      response.weather = res.weather[0].main;
      response.hum = res.main.humidity;
      response.classDiv = this.getTheRightClass(response.weather);
      //    response.pluviometrie = res.rain ? res.rain : 0;

      if (temp != response.type) {
        if (first == response.type) {
          break;
        }
        this.listOfElements.push(response);
        temp = response.type;
      }
    }
    /*data.forEach(res => {
    });*/
    return this.listOfElements;
  }

  parseForecastDays(data: any) {
    this.type = 'DAY';
    console.log("par jours", data)
    let temp = "";
    const jours = [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi"
    ];
    this.listOfElements = [];
    let response: {
      type: string;
      temp: number;
      min_temp:number;
      max_temp:number;
      hum: number;
      weather: string;
      classDiv: any;
      //    pluviometrie: number;
    };
    //initialize temp
    response = {
      type: "",
      temp: 0,
      hum: 0,
      weather: "",
      min_temp:0,
      max_temp:0,
      classDiv: null
      //    pluviometrie: 0
    };
    response.temp = Math.floor(data[0].main.temp - 273.15);
    response.type = jours[new Date(data[0].dt_txt).getDay()];
    response.weather = data[0].weather[0].main;
    response.hum = data[0].main.humidity;
    response.classDiv = this.getTheRightClass(response.weather);
    response.min_temp = Math.floor(data[0].main.temp_min - 273.15);
    response.max_temp = Math.floor(data[0].main.temp_max - 273.15);

    //    response.pluviometrie = res.rain ? res.rain : 0;
    temp = response.type;
    response.type = "Aujourd'hui";
    this.listOfElements.push(response);
   // data = data.slice(0, 5);
    for (let res of data) {
      response = {
        type: "",
        temp: 0,
        min_temp:0,
        max_temp:0,
        hum: 0,
        weather: "",
        classDiv: ""
        //    pluviometrie: 0
      };
      response.temp = Math.floor(res.main.temp - 273.15);
      response.type = jours[new Date(res.dt_txt).getDay()];
      response.weather = res.weather[0].main;
      response.hum = res.main.humidity;
      response.classDiv = this.getTheRightClass(response.weather);
      response.min_temp = Math.floor(data[0].main.temp_min - 273.15);
      response.max_temp = Math.floor(data[0].main.temp_max - 273.15);
      //    response.pluviometrie = res.rain ? res.rain : 0;

      if (temp != response.type) {
        this.listOfElements.push(response);
        temp = response.type;
      }
    }
    this.listOfElements = this.listOfElements.slice(0,5);
    return this.listOfElements;
  }

  getTheRightClass(data) {
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
