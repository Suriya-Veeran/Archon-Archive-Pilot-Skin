import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../services/auth.service';

/** <button *archonHasRole="['ADMIN']">…</button> */
@Directive({ selector: '[archonHasRole]' })
export class HasRoleDirective {
  readonly archonHasRole = input.required<string[]>();

  private readonly auth = inject(AuthService);
  private readonly tpl = inject(TemplateRef<unknown>);
  private readonly vcr = inject(ViewContainerRef);

  constructor() {
    effect(() => {
      this.auth.user(); // re-run when the user changes
      const allowed = this.auth.hasRole(...this.archonHasRole());
      this.vcr.clear();
      if (allowed) this.vcr.createEmbeddedView(this.tpl);
    });
  }
}
