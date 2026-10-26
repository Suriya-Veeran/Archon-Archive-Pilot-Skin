# Archon-Archive-Pilot-Skin

Skeleton for Archon Archive Pilot: Angular 21 · Tailwind CSS v4 · Spartan UI. No component CSS; Tailwind classes only.

## Run

Needs Node 20.19+ / 22.12+.

```bash
npx npm@11 install
npm start        # http://localhost:4200 — dev login accepts any username/password
npm run build
```

## Structure

```
src/app/
├─ core/              app shell and app-wide setup
│  ├─ layout/         header (Live / Decommission switch), sidebar, content
│  ├─ config/         app-config, nav-items (menu per profile)
│  ├─ services/       profile.service (current profile from the URL)
│  ├─ interceptors/   error.interceptor
│  ├─ models/         Profile, NavItem
│  └─ providers.ts    provideCore()
├─ modules/           screens
│  ├─ live/           profile purpose LIVE  — live.routes.ts
│  ├─ decom/          profile purpose DECOM — decom.routes.ts
│  └─ settings/  tour/   shared by both modes
├─ shared/            reusable UI
│  ├─ components/     archon_card, archon_table, archon_dialog, archon_input, archon_page_header
│  ├─ config/         ARCHON_SHARED_CONFIG + provideArchonShared()
│  ├─ directives/     archonCell (custom table cells)
│  ├─ models/         TableColumn
│  ├─ ui/             Spartan components (button, card, table, dialog, input, label)
│  └─ shared.ts       ArchonSharedImports
├─ authentications/   login/, auth.service, auth.guard, auth.interceptor, auth.models
├─ rest-endpoints/    endpoints.ts (all URLs), api.service, live-api.service, decom-api.service
└─ utils/             format, object (mergeDeep)
```

Import aliases: `@core/*`, `@modules/*`, `@shared`, `@auth/*`, `@api/*`, `@utils`, `@env/*`.

## modules/

- **Pages** (routed / in the menu) have `name.ts` + `name.html`. Each page lists the blocks it still needs in an HTML comment.
- **Blocks** (kpi-row, variant-row, step-review/scope, export/csv, …) are empty packages, folders with `.gitkeep`. To build one:
  ```bash
  npx ng g c modules/live/dashboard/kpi-row
  ```
- `live/livelog` keeps its route but is not in the menu (functional spec §9).

## shared: injected and customisable

```ts
// any page: one import for all shared pieces
@Component({ imports: [ArchonSharedImports] })
```

| Level | How |
|---|---|
| Whole app | `provideArchonShared({ table: { pageSize: 50 } })` in `app.config.ts` |
| One module | same, in `providers` of its route |
| One page | same, in `providers` of the component |
| One use | inputs, e.g. `<archon-table [pageSize]="10">` |
| Table cell | `<ng-template archonCell="status" let-row>…</ng-template>` |

## More Spartan components

```bash
npx ng g @spartan-ng/cli:ui tabs     # added under src/app/shared/ui
```
