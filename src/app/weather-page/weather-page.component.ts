import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-weather-page",
  templateUrl: "./weather-page.component.html",
  styleUrls: ["./weather-page.component.css"]
})
export class WeatherPageComponent implements OnInit {
  @Input()
  ville: string = "Yaoundé";
  constructor() {}

  ngOnInit() {}
}
