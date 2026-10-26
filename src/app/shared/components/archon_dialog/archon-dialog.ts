import { ChangeDetectionStrategy, Component, computed, input, model, output } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDialogImports } from '@spartan-ng/helm/dialog';
import { injectArchonConfig } from '../../config/archon-shared.config';

/**
 * Controlled dialog:
 *
 * <archon-dialog [(open)]="editOpen" title="Edit property" (confirm)="save()">
 *   …form…
 * </archon-dialog>
 *
 * Button texts and width default from the shared config. Set confirmText="" to hide the confirm button.
 */
@Component({
  selector: 'archon-dialog',
  imports: [HlmDialogImports, HlmButtonImports],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './archon-dialog.html',
})
export class ArchonDialog {
  private readonly cfg = injectArchonConfig().dialog;

  readonly open = model(false);
  readonly title = input.required<string>();
  readonly description = input<string>();
  readonly confirmText = input<string>();
  readonly cancelText = input<string>();
  readonly destructive = input(false);
  readonly confirmDisabled = input(false);
  readonly width = input<string>();
  readonly confirm = output<void>();

  protected readonly confirmLabel = computed(() => this.confirmText() ?? this.cfg.confirmText);
  protected readonly cancelLabel = computed(() => this.cancelText() ?? this.cfg.cancelText);
  protected readonly widthClass = computed(() => this.width() ?? this.cfg.width);
}
