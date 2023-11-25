import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";

export const ApplicationConfigs: ApplicationConfig = {
  providers: [provideRouter(routes)]
}
