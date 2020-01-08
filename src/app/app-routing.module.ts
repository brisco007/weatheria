import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { MapPageComponent } from "./map-page/map-page.component";

const routes: Routes = [
  // { path: "", component: AppComponent },
  { path: "map", component: MapPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
