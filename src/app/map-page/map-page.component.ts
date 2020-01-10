import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

interface DialogData {
  ville: string;
}
@Component({
  selector: "app-map-page",
  templateUrl: "./map-page.component.html",
  styleUrls: ["./map-page.component.scss"]
})
export class MapPageComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<MapPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
  onAddressChange(event) {
    console.log("onAddressChange", event);
  }
  ngOnInit() {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
