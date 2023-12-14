import { Routes } from "@angular/router";
import { NotFound } from "./not-found.component";
import { RootComponent } from "./root.component";
import { GetApiComponent } from "./get-api/get-api.component";
import { PostFormComponent } from "./get-api/post-form/post-form.component";
import { AuthGuard } from "./auth.guard";
import { TelegramComponent } from "./telegram/telegram.component";
import { GetServerDataComponent } from "./get-api/get-server-data/get-server-data.component";


export const routes: Routes = [
  {
    path: "",
    component: RootComponent
  },
  {
    path: "telegram",
    component: TelegramComponent
  },
  {
    path: "get/api",
    component: GetApiComponent,
  },
  {
    path: "get/api/server",
    component: GetServerDataComponent,
  },
  {
    path: "post/form",
    component: PostFormComponent,
  },
  {
    path: "home",
    loadChildren: () => import("./home/home.routes").then((m) => m.HomeRoutes)
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.routes").then((m) => m.AuthRoutes),
  },
  {
    path: "**",
    component: NotFound,
  }
];
