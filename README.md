# tweaking nf starter (native-federation v3)

A reference workspace demonstrating [Native Federation](https://www.npmjs.com/package/@angular-architects/native-federation) v3 with Angular, orchestrated through [`@softarc/native-federation-orchestrator`](https://www.npmjs.com/package/@softarc/native-federation-orchestrator). It showcases several common micro-frontend integration patterns inside a single host shell — eagerly loaded web components, lazy-loaded routes, and cross-version (Angular 21 ↔ Angular 20) interop.

## What this demonstrates

- **Orchestrated host bootstrap** — the host loads its remote manifest and shared imports through the orchestrator before bootstrapping Angular, so remotes can use the host's shared singleton dependencies.
- **Web Component remotes** (`mfe1`, `mfe2`) — exposed via `@angular/elements` and embedded directly in the host template using custom element tags.
- **Lazy-loaded route remote** (`mfe3`) — registered through Angular's router with `loadComponent`, fetched on demand via `initRemoteEntry` + `loadRemoteModule`.
- **Cross-version remote** (`mfe4`) — a separate Angular 20 workspace integrated into the Angular 21 host through a loading-shell component, proving that remotes built against a different major Angular version can coexist.
- **Zoneless change detection** in the host (`provideZonelessChangeDetection`).

## Workspace layout

```
.
├── projects/
│   ├── host/   — Angular 21 shell (port 4200, orchestrator-driven)
│   ├── mfe1/   — Angular 21 remote, exposed as <app-mfe1> (port 4201)
│   ├── mfe2/   — Angular 21 remote, exposed as <app-mfe2> (port 4202)
│   └── mfe3/   — Angular 21 remote, lazy-loaded route       (port 4203)
└── ng20/
    └── projects/
        └── mfe4/ — Angular 20 remote, cross-version test    (port 4204)
```

Each remote ships a `federation.config.js` declaring its `name`, the modules it `exposes`, and the shared dependency strategy (`shareAll` with singleton + strict-version pinning).

## Integration patterns

| Remote | How the host loads it                                                                  | Where it appears                            |
| ------ | -------------------------------------------------------------------------------------- | ------------------------------------------- |
| `mfe1` | Listed in the orchestrator manifest; `loadRemoteModule` called in `AppComponent`       | `<app-mfe1>` custom element in the template |
| `mfe2` | Same as `mfe1`                                                                         | `<app-mfe2>` custom element in the template |
| `mfe3` | `initRemoteEntry` + `loadRemoteModule` invoked from a router `loadComponent`           | `/mfe3` route                               |
| `mfe4` | A `LoadingShellComponent` triggers `initRemoteEntry` + bootstraps the remote on demand | `/mfe4` route                               |

The orchestrator is configured in [projects/host/src/main.ts](projects/host/src/main.ts) with `useShimImportMap` (es-module-shims), `consoleLogger`, and `sessionStorageEntry` for caching the resolved import map across navigations.

## Running locally

Install and start the Angular 21 workspace (host + mfe1–3):

```bash
npm ci
npm run start          # serves the host on http://localhost:4200
```

To exercise all four remotes in parallel from the same workspace:

```bash
npm run start:all      # concurrently serves host, mfe1, mfe2, mfe3
```

For the cross-version test, start the Angular 20 workspace in a second terminal:

```bash
cd ng20
npm ci
npm run start          # serves mfe4 on http://localhost:4204
```

Then open [http://localhost:4200/](http://localhost:4200/). `mfe1` and `mfe2` mount automatically; use the **Show MFE3** / **Show MFE4** buttons to navigate to the lazy routes.

## Versions

- Angular **21.1** — host, `mfe1`, `mfe2`, `mfe3` ([package.json](package.json))
- Angular **20.3** — `mfe4` ([ng20/package.json](ng20/package.json))
- `@angular-architects/native-federation` 21.2 / 20.3
- `@softarc/native-federation-orchestrator` 4.0.0

This project was originally generated with Angular CLI 19.2.11 and has been incrementally upgraded.
