import { afterNextRender, Directive, ElementRef, inject } from '@angular/core';

/** <input archonAutofocus /> focuses the element once it is rendered. */
@Directive({ selector: '[archonAutofocus]' })
export class AutofocusDirective {
  constructor() {
    const el = inject<ElementRef<HTMLElement>>(ElementRef);
    afterNextRender(() => el.nativeElement.focus());
  }
}
