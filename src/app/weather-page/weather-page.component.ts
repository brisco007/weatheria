import { MapPageComponent } from "./../map-page/map-page.component";
import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-weather-page",
  templateUrl: "./weather-page.component.html",
  styleUrls: ["./weather-page.component.css"]
})
export class WeatherPageComponent implements OnInit {
  @Input()
  ville: string = "Yaoundé";
  constructor(private router: Router, public dialog: MatDialog) {}

  openMap() {
    // this.router.navigateByUrl("map");
    const dialogRef = this.dialog.open(MapPageComponent, {
      width: "800px",
      data: { ville: this.ville }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      // this.ville = result;
    });
  }
  ngOnInit() {}
}
