import {withNativeFederation, shareAll} from '@nf-beta/angular/config';

export default withNativeFederation({

  name: 'mfe3',

  exposes: {
    './Component': './projects/mfe3/src/app/app.component.ts',
    './Bootstrap': './projects/mfe3/src/bootstrap.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ]

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0
  
});
