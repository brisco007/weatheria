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
  type: string;
  constructor(private weather: WeatherApiCallService) {}

  @Input() ville;
  RefreshWeather() {
    this.subHourly = this.weather
      .getDailyForecast(this.ville)
      .subscribe(data => {
        this.parseForecastHours(data);
      });
  }
  public listHours() {}

  public listDays() {}
  public onTypeChange(val: string) {
    this.type = val;
    if (this.type == "hourly") {
      this.subDaily = this.weather
        .getDailyForecast(this.ville)
        .subscribe(data => {
          console.log(this.parseForecastHours(data));
        });
    } else {
      this.subDaily = this.weather
        .getDailyForecast(this.ville)
        .subscribe(data => {
          console.log(this.parseForecastDays(data));
        });
    }
  }

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
    response.type = jours[new Date(data[0].dt_txt).getDay()];
    response.weather = data[0].weather[0].main;
    response.hum = data[0].main.humidity;
    response.classDiv = this.getTheRightClass(response.weather);
    //    response.pluviometrie = res.rain ? res.rain : 0;
    temp = response.type;
    response.type = "Aujourd'hui";
    this.listOfElements.push(response);

    for (let res of data) {
      response = {
        type: "",
        temp: 0,
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
      //    response.pluviometrie = res.rain ? res.rain : 0;

      if (temp != response.type) {
        this.listOfElements.push(response);
        temp = response.type;
      }
    }
    return this.listOfElements;
  }

  getTheRightClass(data) {
    if (data == "Clear") {
      return { card: "card-sunny", class: "sunny" };
    } else if (data == "Clouds" || data == "Drizzle") {
      return { card: "card-clouds", class: "clouds" };
    } else if (data == "Rain") {
      return { card: "card-rain", class: "rain" };
    } else if (data == "Thunderstorm") {
      return { card: "card-storm", class: "storm" };
    } else if (data == "Snow") {
      return { card: "card-snow", class: "snow" };
    }
  }
}
