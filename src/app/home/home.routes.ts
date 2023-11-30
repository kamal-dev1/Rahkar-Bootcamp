import { Routes } from "@angular/router";
import { UserDetailComponent } from "../user-detail/user-detail.component";
import { UsersComponent } from "../users/users.component";
import { BodyComponent } from "./body/body.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home.component";

export const HomeRoutes: Routes = [
  {
    path: "",
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
]
