import { WeatherPageComponent } from "./weather-page/weather-page.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { MapPageComponent } from "./map-page/map-page.component";
import { RegisterComponent } from "./pages/start/register/register.component";
import { StartComponent } from "./pages/start/start.component";

const routes: Routes = [
  {
    path: "",
    component: StartComponent
  },
  {
    path: "weather",
    component: WeatherPageComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  { path: "map", component: MapPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
