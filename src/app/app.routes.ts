import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { BodyComponent } from "./home/body/body.component";
import { HeaderComponent } from "./home/header/header.component";
import { UsersComponent } from "./users/users.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { NotFound } from "./not-found.component";
import { RootComponent } from "./root.component";

export const routes: Routes = [
  {
    path: "",
    component: RootComponent
  },
  {
    path: "home",
    component: HomeComponent,
    children: [
      {
        path: "body",
        component: BodyComponent
      },
      {
        path: "header",
        component: HeaderComponent,
      },
      {
        path: "users",
        component: UsersComponent,
      },
      {
        path: "user/:id",
        component: UserDetailComponent,
      },
    ]
  },
  {
    path: "**",
    component: NotFound,
  }
];
