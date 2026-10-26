import { Directive, inject, input, TemplateRef } from '@angular/core';

/** Custom cell markup: <ng-template archonCell="status" let-row>…</ng-template> inside <archon-table>. */
@Directive({ selector: 'ng-template[archonCell]' })
export class ArchonCellDef {
  readonly key = input.required<string>({ alias: 'archonCell' });
  readonly template = inject<TemplateRef<{ $implicit: unknown }>>(TemplateRef);
}
