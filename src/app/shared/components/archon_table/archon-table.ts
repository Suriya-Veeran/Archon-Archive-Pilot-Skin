import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChildren,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmTableImports } from '@spartan-ng/helm/table';
import { ARCHON_SHARED_CONFIG } from '../../config/archon-shared.config';
import { ArchonCellDef } from '../../directives/archon-cell.directive';
import { TableColumn } from '../../models/table-column.model';

/** Table with paging. Defaults from the shared config; inputs override; archonCell templates customise cells. */
@Component({
  selector: 'archon-table',
  imports: [HlmTableImports, HlmButtonImports, NgTemplateOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './archon-table.html',
})
export class ArchonTable<T extends object> {
  private readonly cfg = inject(ARCHON_SHARED_CONFIG).table;

  readonly columns = input.required<TableColumn<T>[]>();
  readonly rows = input.required<T[]>();
  readonly pageSize = input<number>();
  readonly emptyText = input<string>();
  readonly rowClick = output<T>();

  protected readonly cells = contentChildren(ArchonCellDef);
  protected readonly cellMap = computed(
    () => new Map(this.cells().map((c) => [c.key(), c.template])),
  );
  protected readonly size = computed(() => this.pageSize() ?? this.cfg.pageSize);
  protected readonly empty = computed(() => this.emptyText() ?? this.cfg.emptyText);
  protected readonly page = signal(0);
  protected readonly pageCount = computed(() =>
    Math.max(1, Math.ceil(this.rows().length / this.size())),
  );
  protected readonly pageRows = computed(() => {
    const start = Math.min(this.page(), this.pageCount() - 1) * this.size();
    return this.rows().slice(start, start + this.size());
  });

  protected cell(row: T, col: TableColumn<T>): string {
    const v = col.value ? col.value(row) : (row as Record<string, unknown>)[col.key];
    return v == null ? '—' : String(v);
  }
}
