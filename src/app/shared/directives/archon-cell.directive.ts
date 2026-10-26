import { Directive, inject, input, TemplateRef } from '@angular/core';

/**
 * Custom cell markup for shared tables:
 *   <ng-template archonCell="status" let-row> <archon-status-badge [status]="row.status" /> </ng-template>
 */
@Directive({ selector: 'ng-template[archonCell]' })
export class ArchonCellDef {
  readonly key = input.required<string>({ alias: 'archonCell' });
  readonly template = inject<TemplateRef<{ $implicit: unknown }>>(TemplateRef);
}
