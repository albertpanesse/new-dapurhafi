import { Routes } from "@angular/router";

export const appRoutes: Routes = [
  {
    path: "default",
    loadChildren: () =>
      import("./layouts/default-layout.module").then(
        (m) => m.DefaultLayoutModule
      ),
    data: { parent: "login" }
  },
  {
    path: "admin",
    loadChildren: () =>
      import("./layouts/admin-layout.module").then((m) => m.AdminLayoutModule)
  },
  {
    path: "",
    redirectTo: "default",
    pathMatch: "full"
  }
];
