import { Routes } from "@angular/router";

export const appRoutes: Routes = [
  {
    path: "-",
    loadChildren: () =>
      import("./layouts/default-layout.module").then(
        (m) => m.DefaultLayoutModule
      )
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./layouts/admin-layout.module").then((m) => m.AdminLayoutModule)
  },
  {
    path: "",
    redirectTo: "-",
    pathMatch: "full"
  }
];
