import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { WeatherApiCallService } from "./services/weather-api-call.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { WeatherListComponent } from "./weather-list/weather-list.component";
import { WeatherElementComponent } from "./weather-element/weather-element.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { WeatherPageComponent } from "./weather-page/weather-page.component";
import { WeatherMainElementComponent } from "./weather-main-element/weather-main-element.component";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AngularOpenlayersModule } from "ngx-openlayers";
import { OsmViewComponent } from "./osm-view/osm-view.component";
import { MapPageComponent } from "./map-page/map-page.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    WeatherListComponent,
    WeatherElementComponent,
    UserProfileComponent,
    WeatherPageComponent,
    WeatherMainElementComponent,
    MapPageComponent,
    OsmViewComponent,
    MapPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    HttpClientModule,
    AngularOpenlayersModule,
    MatDialogModule
  ],
<<<<<<< HEAD
=======
  imports: [BrowserModule, AppRoutingModule, NoopAnimationsModule,
    NgxIndexedDBModule.forRoot(dbConfig)

  ],
>>>>>>> 69fae0c5765d3c49a499663a3ada744abb6d10bb
  providers: [WeatherApiCallService],
  bootstrap: [AppComponent]
})
export class AppModule {}
