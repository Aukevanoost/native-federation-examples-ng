import {
  initFederation,
  LazyInitFederationResult,
} from 'vanilla-native-federation';
import {
  useShimImportMap,
  consoleLogger,
  sessionStorageEntry,
} from 'vanilla-native-federation/options';

const manifest = {
  mfe1: 'http://localhost:4201/remoteEntry.json',
  mfe2: 'http://localhost:4202/remoteEntry.json',
};

initFederation(manifest, {
  ...useShimImportMap({ shimMode: true }),
  logger: consoleLogger,
  storage: sessionStorageEntry,
  hostRemoteEntry: './remoteEntry.json',
  logLevel: 'debug',
  profile: {
    latestSharedExternal: false,
    skipCachedRemotesIfURLMatches: false,
  },
})
  .then((nf: LazyInitFederationResult) => {
    console.log(nf.config);
    return import('./bootstrap').then((m: any) => m.bootstrap(nf));
  })
  .catch((err) => console.error(err));
