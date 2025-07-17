import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { InitRemoteEntry, LoadRemoteModule } from 'vanilla-native-federation';

export const bootstrap = (
  loader: LoadRemoteModule<unknown>,
  init: InitRemoteEntry
) =>
  bootstrapApplication(AppComponent, appConfig(loader, init)).catch((err) =>
    console.error(err)
  );
