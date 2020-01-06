import { WeatherApiCallService } from "./../services/weather-api-call.service";
import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: "app-weather-list",
  templateUrl: "./weather-list.component.html",
  styleUrls: ["./weather-list.component.css"]
})
export class WeatherListComponent implements OnInit {
  listOfElements = [];
  subDaily: Subscription;
  subHourly: Subscription;
  /* the list elements is done with these objects
     {
       type (day or hour),
       temps,
       hum,
       weather,
       pluv
     }
  */
  type: string;
  constructor(private weather: WeatherApiCallService) {}

  public onTypeChange(val: string) {
    this.type = val;
    console.log(this.type);
    this.subDaily = this.weather.getDailyForecast("London").subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.subDaily.unsubscribe();
    this.subHourly.unsubscribe();
  }
}
