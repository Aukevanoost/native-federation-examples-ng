import {
  initFederation,
  LazyInitFederationResult,
} from 'vanilla-native-federation';
import {
  useShimImportMap,
  consoleLogger,
} from 'vanilla-native-federation/options';

const manifest = {
  mfe1: 'http://localhost:4201/remoteEntry.json',
  mfe2: 'http://localhost:4202/remoteEntry.json',
};

initFederation(manifest, {
  ...useShimImportMap({ shimMode: true }),
  logger: consoleLogger,
  hostRemoteEntry: './remoteEntry.json',
  logLevel: 'debug',
})
  .then((r: LazyInitFederationResult) => {
    console.log(r.config);
    return import('./bootstrap').then((m: any) =>
      m.bootstrap(r.loadRemoteModule, r.initRemoteEntry)
    );
  })
  .catch((err) => console.error(err));
