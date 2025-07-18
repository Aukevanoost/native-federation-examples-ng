import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { LazyInitFederationResult } from 'vanilla-native-federation';

export const bootstrap = (nf: LazyInitFederationResult) =>
  bootstrapApplication(AppComponent, appConfig(nf)).catch((err) =>
    console.error(err)
  );
