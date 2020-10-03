import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DefaultLayout } from "./default-layout/default-layout.component";

export const defaultRoutes: Routes = [
  {
    path: "",
    component: DefaultLayout,
    children: []
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(defaultRoutes)],
  providers: []
})
export class DefaultLayoutModule {}
