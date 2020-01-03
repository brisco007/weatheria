import { WeatherApiCallService } from "./services/weather-api-call.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { WeatherListComponent } from "./weather-list/weather-list.component";
import { WeatherElementComponent } from "./weather-element/weather-element.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";

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
