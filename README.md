# Archon-Archive-Pilot-Skin

Skin and structure only: the app shell, theme, shared layer, auth, REST endpoints and utils are in place. Each **routed page** has a `.ts` + `.html` file. Each **block inside a page** is an empty package (a folder with `.gitkeep`) ready for its component.

Angular 21 (standalone, zoneless, signals) · Tailwind CSS v4 · Spartan UI. No component CSS: styling is Tailwind classes only, and `src/styles.css` holds just Tailwind and the Spartan theme.

## Requirements

- Node **20.19+ / 22.12+ / 24+**. Node 16 does not work with Angular 21.
- npm 11. npm 10.9 fails on this tree with `Cannot read properties of null (reading 'edgesOut')`; use `npx npm@11 install`.

## Run

```bash
npm install          # or: npx npm@11 install
npm start            # http://localhost:4200  (dev = mock login, any username/password)
npm run build
npm test             # Vitest
```

## Structure

```
src/app/
├─ core/                 app-wide singletons, loaded once
│  ├─ config/            APP_CONFIG, storage keys, sidebar menu per profile
│  ├─ guards/            profile-home (/ -> last profile), unsaved-changes
│  ├─ interceptors/      loading, error (401 -> logout, 5xx -> toast)
│  ├─ layout/            header (Live / Decommission switch), sidebar, content (shell)
│  ├─ models/            Profile, NavItem, ApiResponse
│  ├─ services/          profile, storage, notification, loading, theme
│  └─ providers.ts       provideCore(): HttpClient + interceptors + Spartan
├─ modules/              the screens
│  ├─ live/              profile purpose LIVE   (live.routes.ts)
│  ├─ decom/             profile purpose DECOM  (decom.routes.ts)
│  ├─ settings/  tour/   shared by both profiles
├─ shared/               reusable UI, no business logic
│  ├─ components/        archon_* (table, expandable table, card, dialog, input, kpi tile,
│  │                     status badge, stepper, side panel, empty state, page header, placeholder)
│  ├─ config/            ARCHON_SHARED_CONFIG + provideArchonShared()
│  ├─ directives/        archonCell (custom table cells), archonAutofocus
│  ├─ pipes/             fileSize, archonNumber, archonDate, truncate
│  ├─ services/          ArchonExporter (CSV by default, swappable)
│  ├─ models/            TableColumn, Status, Step, Option
│  ├─ ui/                Spartan helm components (generated)
│  └─ shared.ts          ArchonSharedImports / ArchonUiImports
├─ authentications/      login/ logout/ sso/, AuthService, guards, interceptor, *archonHasRole
├─ rest-endpoints/       endpoints.ts (every URL) + ApiService + one service per area
└─ utils/                pure functions: format, compare, object (mergeDeep), string, file (csv/download)
```

Path aliases (tsconfig.json): `@core/*`, `@modules/*`, `@shared` / `@shared/*`, `@auth/*`, `@api/*`, `@utils` / `@utils/*`, `@env/*`.

Every component is a pair, `name.ts` + `name.html`, with no style file.

## Using the shared layer

One import gives a page all shared components, directives and pipes:

```ts
import { ArchonSharedImports, ArchonUiImports } from '@shared';

@Component({ imports: [ArchonSharedImports, ArchonUiImports], templateUrl: './x.html' })
```

Customise at whatever level you need. The closest setting wins:

| Level | How |
|---|---|
| Whole app | `provideArchonShared({ format: { locale: 'de-DE' } })` in `app.config.ts` |
| One module | `providers: [provideArchonShared({ table: { pageSize: 50 } })]` on its route (see `decom.routes.ts`) |
| One page | `providers: [provideArchonShared({ table: { dense: true } })]` on the component (see `system-properties.ts`) |
| One instance | inputs, e.g. `<archon-static-table [pageSize]="10" emptyText="No jobs">` |
| Cell markup | `<ng-template archonCell="status" let-row>…</ng-template>` inside a table |
| Behaviour | `providers: [provideArchonExporter(MyPdfExporter)]` replaces how tables export |

## Module screens

Every folder from the agreed `modules/` tree exists:
- **Pages** (in the menu or routed) are components. They show their blocks as `<archon-placeholder>` boxes that name each block's folder.
- **Blocks** (kpi-row, variant-row, step-review/scope, …) are empty packages. Create the component there with `ng g c modules/<path>`; it gets no style file and uses OnPush. Then swap it in for the placeholder.

## Adding Spartan components

```bash
npx ng g @spartan-ng/cli:ui <name>     # e.g. accordion, popover, calendar
```

Settings live in `components.json`. Imports look like `import { HlmButtonImports } from '@spartan-ng/helm/button'`.

## New components

`ng g c features/<feature>/<name>` creates a component with **no style file** and OnPush (set in `angular.json`).
