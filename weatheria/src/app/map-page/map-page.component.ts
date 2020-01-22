import { DatabaseService } from "src/app/services/database.service";
import { Address } from "./../weather-page/weather-page.component";
import { Component, OnInit, Inject, ViewChild } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-map-page",
  templateUrl: "./map-page.component.html",
  styleUrls: ["./map-page.component.scss"]
})
export class MapPageComponent implements OnInit {
  @ViewChild("map", { static: false })
  private controlMap;
  constructor(
    public dialogRef: MatDialogRef<MapPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Address,
    public db: DatabaseService,
    private _snackBar: MatSnackBar
  ) {}
  onAddressChange(event) {
    console.log("onAddressChange", event);
  }
  onAdressSelected(event: Address) {
    this.data = event;
  }
  searchAddress() {
    if (this.data.city != "") {
      this.controlMap.searchGeo(this.data.city);
    }
  }
  submitAddress() {
    this.db.addAddress(this.data).then(res => {
      console.log(res);
      this.openSnack(` ${this.data.city} ajoutée avec succès`, "Fermer");
    });
  }

  openSnack(message, action) {
    this._snackBar.open(message, action, {
      duration: 7000
    });
  }
  resetAddress() {
    this.data = {
      country: "",
      state: "",
      city: "",
      pox_X: "",
      pos_Y: ""
    };
  }
  ngOnInit() {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
