import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Marks a scaffolded block that still needs its real UI. Remove once the block is built. */
@Component({
  selector: 'archon-placeholder',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './archon-placeholder.html',
})
export class ArchonPlaceholder {
  readonly title = input.required<string>();
  readonly path = input<string>();
  readonly note = input<string>();
}
