import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChild,
  contentChildren,
  input,
  signal,
  TemplateRef,
} from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideChevronDown, lucideChevronRight } from '@ng-icons/lucide';
import { HlmTableImports } from '@spartan-ng/helm/table';
import { injectArchonConfig } from '../../config/archon-shared.config';
import { ArchonCellDef } from '../../directives/archon-cell.directive';
import { TableColumn } from '../../models';

/**
 * Table whose rows expand to show a detail template:
 *
 * <archon-expandable-table [columns]="cols" [rows]="rows" rowKey="id">
 *   <ng-template #detail let-row>…</ng-template>
 *   <ng-template archonCell="status" let-row>…</ng-template>   (optional custom cells)
 * </archon-expandable-table>
 */
@Component({
  selector: 'archon-expandable-table',
  imports: [HlmTableImports, NgIcon, NgTemplateOutlet],
  providers: [provideIcons({ lucideChevronDown, lucideChevronRight })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './archon-expandable-table.html',
})
export class ArchonExpandableTable<T extends object> {
  private readonly cfg = injectArchonConfig().table;

  readonly columns = input.required<TableColumn<T>[]>();
  readonly rows = input.required<T[]>();
  readonly rowKey = input.required<keyof T & string>();
  /** Allow several rows open at once. */
  readonly multi = input(false);
  readonly emptyText = input<string>();

  protected readonly empty = computed(() => this.emptyText() ?? this.cfg.emptyText);
  protected readonly detail = contentChild<TemplateRef<{ $implicit: T }>>('detail');
  protected readonly cells = contentChildren(ArchonCellDef);
  protected readonly cellMap = computed(
    () => new Map(this.cells().map((c) => [c.key(), c.template])),
  );
  private readonly open = signal<Set<unknown>>(new Set());

  protected key(row: T): unknown {
    return row[this.rowKey()];
  }

  protected isOpen(row: T): boolean {
    return this.open().has(this.key(row));
  }

  protected toggle(row: T): void {
    const k = this.key(row);
    this.open.update((s) => {
      const next = new Set(this.multi() ? s : []);
      if (s.has(k)) next.delete(k);
      else next.add(k);
      return next;
    });
  }

  protected cell(row: T, col: TableColumn<T>): string {
    const v = col.value ? col.value(row) : (row as Record<string, unknown>)[col.key];
    return v == null ? '—' : String(v);
  }
}
