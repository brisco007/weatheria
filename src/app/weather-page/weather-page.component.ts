import { MapPageComponent } from "./../map-page/map-page.component";
import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-weather-page",
  templateUrl: "./weather-page.component.html",
  styleUrls: ["./weather-page.component.css"]
})
export class WeatherPageComponent implements OnInit {
  @Input()
  ville: string = "ouvrir la carte";
  selected = "Yaoundé";

  @ViewChild("list", { static: false })
  private list;

  @ViewChild("actual", { static: false })
  private actual;
  constructor(private router: Router, public dialog: MatDialog) {}

  openMap() {
    // this.router.navigateByUrl("map");
    const dialogRef = this.dialog.open(MapPageComponent, {
      width: "800px"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      // this.ville = result;
    });
  }

  RefreshWeatherAll() {
    this.list.RefreshWeather();
    this.actual.RefreshWeather();
  }
  ngOnInit() {}
}
