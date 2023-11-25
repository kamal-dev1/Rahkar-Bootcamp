import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { ApplicationConfigs } from './app/app.config';


bootstrapApplication(AppComponent, ApplicationConfigs).catch((error) => {
  console.error(error)
});
