import { CanDeactivateFn } from '@angular/router';

/** A page with a form/stepper implements this to block accidental navigation. */
export interface HasUnsavedChanges {
  hasUnsavedChanges(): boolean;
}

/** Usage: { path: 'plan', canDeactivate: [unsavedChangesGuard], … } */
export const unsavedChangesGuard: CanDeactivateFn<HasUnsavedChanges> = (component) =>
  !component?.hasUnsavedChanges?.() || confirm('You have unsaved changes. Leave this page?');
