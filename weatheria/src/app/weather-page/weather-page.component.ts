import { MapPageComponent } from "./../map-page/map-page.component";
import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

export interface Address {
  country: string;
  city: string;
  state: string;
  pox_X: string;
  pos_Y: string;
}

@Component({
  selector: "app-weather-page",
  templateUrl: "./weather-page.component.html",
  styleUrls: ["./weather-page.component.css"]
})
export class WeatherPageComponent implements OnInit {
  @Input()
  ville: string = "ouvrir la carte";
  selected = "Yaoundé";
  classWeather;

  address: {
    country: string;
    city: string;
    state: string;
    pox_X: string;
    pos_Y: string;
  };
  @ViewChild("list", { static: false })
  private list;

  @ViewChild("actual", { static: false })
  private actual;
  constructor(private router: Router, public dialog: MatDialog) {}

  onChangeVille(val) {
    this.selected = val.target.value;
    console.log("selected snippet", val.target.value);
    this.RefreshWeatherAll();
  }
  openMap() {
    // this.router.navigateByUrl("map");
    const dialogRef = this.dialog.open(MapPageComponent, {
      width: "1000px",
      height: "600px",
      data: this.address
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed", result);
      this.address = result;
    });
  }

  changeMediumWeatherColor(data) {
    if (data == "Clear") {
      console.log("data for weather ", data);
      this.classWeather = "sunny";
    } else if (
      data == "Clouds" ||
      data == "Drizzle" ||
      data == "Haze" ||
      data == "Mist"
    ) {
      console.log("data for weather ", data);
      this.classWeather = "clouds";
    } else if (data == "Rain") {
      console.log("data for weather ", data);
      this.classWeather = "rain";
    } else if (data == "Thunderstorm") {
      console.log("data for weather ", data);
      this.classWeather = "storm";
    } else if (data == "Snow") {
      console.log("data for weather ", data);
      this.classWeather = "snow";
    }
  }
  RefreshWeatherAll() {
    this.list.RefreshWeather();
    this.actual.RefreshWeather();
  }
  ngOnInit() {}
}
