import { initFederation } from '@angular-architects/native-federation';

initFederation()
  .catch((err) => console.error(err))
  .then(() => import('./bootstrap').then((m) => m.bootstrap()))
  .catch((err) => console.error(err));
