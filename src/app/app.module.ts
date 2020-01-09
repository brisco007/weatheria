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
import { NgxIndexedDBModule } from "ngx-indexed-db";
import { MatSelectModule } from "@angular/material/select";
import { StartComponent } from "./pages/start/start.component";

import { MDBBootstrapModule } from "angular-bootstrap-md";
import { LoginComponent } from "./pages/start/login/login.component";
import { RegisterComponent } from "./pages/start/register/register.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

//database configuration
const dbConfig = {
  name: "weatheria_database",
  version: 1,
  objectStoresMeta: [
    {
      store: "user",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "username", keypath: "username", options: { unique: true } },
        { name: "password", keypath: "password", options: { unique: false } },
        { name: "name", keypath: "name", options: { unique: false } },
        { name: "bird_date", keypath: "bird_date", options: { unique: false } },
        { name: "profile", keypath: "profile", options: { unique: false } },
        { name: "addresses", keypath: "addresses", options: { unique: false } }
      ]
    },
    {
      store: "address",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "city", keypath: "city", options: { unique: true } },
        { name: "state", keypath: "state", options: { unique: false } },
        { name: "country", keypath: "country", options: { unique: false } },
        { name: "pos_X", keypath: "pos_X", options: { unique: false } },
        { name: "pos_Y", keypath: "pos_Y", options: { unique: false } }
      ]
    }
  ]
};

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
    StartComponent,
    LoginComponent,
    RegisterComponent
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
    MatDialogModule,
    MatSelectModule,
    NgxIndexedDBModule.forRoot(dbConfig),
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [WeatherApiCallService],
  bootstrap: [AppComponent]
})
export class AppModule {}
