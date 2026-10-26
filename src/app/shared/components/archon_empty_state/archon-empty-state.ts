import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { HlmEmptyImports } from '@spartan-ng/helm/empty';

/** "Nothing here yet" block. Default slot = actions (buttons). */
@Component({
  selector: 'archon-empty-state',
  imports: [HlmEmptyImports],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './archon-empty-state.html',
})
export class ArchonEmptyState {
  readonly title = input.required<string>();
  readonly description = input<string>();
}
