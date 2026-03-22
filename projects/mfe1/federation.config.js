import {withNativeFederation, shareAll} from '@angular-architects/native-federation-v4/config';

export default withNativeFederation({

  name: 'team/mfe1',
  chunks: false,
  exposes: {
    './Component': './projects/mfe1/src/bootstrap.ts',
  },
  shared: {
    ...shareAll(
      { singleton: true, strictVersion: true, requiredVersion: 'auto', build: 'package' },
      {
        overrides: {
          '@angular/core': { singleton: true, strictVersion: true, requiredVersion: 'auto', build: 'package', chunks: true, includeSecondaries: {keepAll: true}},
          '@angular/common': { singleton: true, strictVersion: true, requiredVersion: 'auto',build: 'package', chunks: true, includeSecondaries: {keepAll: true}},

        }
      }
    ),
  },

  skip: [
    'rxjs/ajax', 
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ],

  features: { 
    denseChunking: true
  }
});
