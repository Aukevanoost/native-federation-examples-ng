import { createApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { createCustomElement } from '@angular/elements';

export async function bootstrap(loadRemoteModule: any): Promise<void> {
  await createApplication(appConfig).then(({ injector }) => {
    customElements.define(
      'app-mfe4',
      createCustomElement(AppComponent, { injector }),
    );
  });
}
