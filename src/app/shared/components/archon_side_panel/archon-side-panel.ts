import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { HlmSheetImports } from '@spartan-ng/helm/sheet';

/**
 * Controlled drawer (Spartan sheet):
 * <archon-side-panel [(open)]="detailOpen" title="MM03">…</archon-side-panel>
 * Slot [panel-footer] for buttons.
 */
@Component({
  selector: 'archon-side-panel',
  imports: [HlmSheetImports],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './archon-side-panel.html',
})
export class ArchonSidePanel {
  readonly open = model(false);
  readonly title = input.required<string>();
  readonly description = input<string>();
  readonly side = input<'right' | 'left' | 'top' | 'bottom'>('right');
  readonly width = input('sm:max-w-lg');
}
