import { Routes } from "@angular/router";
import { NotFound } from "./not-found.component";
import { RootComponent } from "./root.component";

export const routes: Routes = [
  {
    path: "",
    component: RootComponent
  },
  {
    path: "home",
    loadChildren: () => import("./home/home.routes")
                        .then((m) => m.HomeRoutes)
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.routes")
                        .then((m) => m.AuthRoutes)
  },
  {
    path: "**",
    component: NotFound,
  }
];
