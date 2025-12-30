const { withNativeFederation, share } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'mfe1',

  exposes: {
    './Component': './projects/mfe1/src/bootstrap.ts',
  },

  shared: {
    ...share({"@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }})
    // ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    (pkg) => pkg.startsWith('vanilla-native-federation'),
    // Add further packages you don't need at runtime
  ],

  features: {
    ignoreUnusedDeps: true
  }
});
