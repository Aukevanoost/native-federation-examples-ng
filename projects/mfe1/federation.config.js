import {withNativeFederation, shareAll} from '@softarc/native-federation/config';

export default withNativeFederation({

  name: 'team/mfe1',

  exposes: {
    './Component': './projects/mfe1/src/bootstrap.ts',
  },
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto', build: 'package' }),
  },

  skip: [
    'rxjs/ajax', 
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ],

  features: {
    ignoreUnusedDeps: true
  }
});
