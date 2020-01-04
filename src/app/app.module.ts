import { WeatherApiCallService } from "./services/weather-api-call.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { WeatherListComponent } from "./weather-list/weather-list.component";
import { WeatherElementComponent } from "./weather-element/weather-element.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";

//database configuratio
const dbConfig = {
  name: 'Weatheria_database',
  version: 1,
  objectStoresMeta:  [
    {
      store: 'user',
      storeConfig: {keyPath: 'id', autoIncrement: true},
      storeSchema: [
        {username: 'username', keyPath: 'username', options: {unique: true}},
        {password: 'password', keyPath: 'password', options: {unique: false}},
        {name: 'name', keyPath: 'name', options: {unique: false}},
        {bird_date: 'bird_date', keyPath: 'bird_date', options: {unique: false}},
        {proile: "profile", keyPath: 'profile', options: {unique: false}}
      ]
    },
    {
      store: 'address',
      storeConfig: {keyPath: 'id', autoIncrement: true},
      storeSchema: [
        {city: 'city', keyPath: 'city', options: {unique: true}},
        {state: 'state', keyPath: 'state', options: {unique: false}},
        {country: 'country', keyPath: 'country', options: {unique: false}},
        {pos_X: 'pos_X', keyPath: 'pos_X', options: {unique: false}},
        {pos_Y: "pos_Y", keyPath: 'pos_Y', options: {unique: false}}
      ]
    }
  ]
};


@NgModule({
  declarations: [
    AppComponent,
    WeatherListComponent,
    WeatherElementComponent,
    UserProfileComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NoopAnimationsModule],
  providers: [WeatherApiCallService],
  bootstrap: [AppComponent]
})
export class AppModule {}
