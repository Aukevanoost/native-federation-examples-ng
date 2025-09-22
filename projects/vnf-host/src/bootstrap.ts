import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { NativeFederationResult } from 'vanilla-native-federation';

export const bootstrap = (nf: NativeFederationResult) =>
  bootstrapApplication(AppComponent, appConfig(nf)).catch((err) =>
    console.error(err)
  );
