import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ComponentModule } from "../components/component.module";

import { DefaultLayoutComponent } from "./default-layout/default-layout.component";
import { HomePageComponent } from "../pages/home-page/home-page.component";

export const defaultRoutes: Routes = [
  {
    path: "",
    component: DefaultLayoutComponent,
    children: [
      {
        path: "",
        component: HomePageComponent
      }
    ]
  }
];

@NgModule({
  declarations: [DefaultLayoutComponent, HomePageComponent],
  imports: [ComponentModule, RouterModule.forChild(defaultRoutes)],
  providers: []
})
export class DefaultLayoutModule {}
