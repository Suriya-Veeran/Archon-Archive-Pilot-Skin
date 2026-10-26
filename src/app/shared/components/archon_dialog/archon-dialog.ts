import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  model,
  output,
} from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmDialogImports } from '@spartan-ng/helm/dialog';
import { ARCHON_SHARED_CONFIG } from '../../config/archon-shared.config';

/** Controlled dialog: <archon-dialog [(open)]="open" title="Edit" (confirm)="save()">…</archon-dialog> */
@Component({
  selector: 'archon-dialog',
  imports: [HlmDialogImports, HlmButtonImports],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './archon-dialog.html',
})
export class ArchonDialog {
  private readonly cfg = inject(ARCHON_SHARED_CONFIG).dialog;

  readonly open = model(false);
  readonly title = input.required<string>();
  readonly confirmText = input<string>();
  readonly cancelText = input<string>();
  readonly confirm = output<void>();

  protected readonly confirmLabel = computed(() => this.confirmText() ?? this.cfg.confirmText);
  protected readonly cancelLabel = computed(() => this.cancelText() ?? this.cfg.cancelText);
}
