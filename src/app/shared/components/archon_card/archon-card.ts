import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { HlmCardImports } from '@spartan-ng/helm/card';

/** Card. Slots: default = body, [card-actions] = header right. */
@Component({
  selector: 'archon-card',
  imports: [HlmCardImports],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './archon-card.html',
})
export class ArchonCard {
  readonly title = input<string>();
  readonly description = input<string>();
}
