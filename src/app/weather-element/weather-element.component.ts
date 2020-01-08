import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-weather-element",
  templateUrl: "./weather-element.component.html",
  styleUrls: ["./weather-element.component.scss"]
})
export class WeatherElementComponent implements OnInit {
  @Input() temp;
  @Input() hum;
  @Input() type;
  @Input() weather;
  @Input() classDiv;
  @Input() classIn;
  constructor() {
    // this.getTheRigntClass(this.weather);
  }

  ngOnInit() {}
}
