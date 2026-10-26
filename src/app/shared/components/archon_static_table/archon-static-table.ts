import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  contentChildren,
  effect,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideArrowDown,
  lucideArrowUp,
  lucideChevronsUpDown,
  lucideDownload,
} from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmTableImports } from '@spartan-ng/helm/table';
import { compareValues } from '@utils/compare';
import { injectArchonConfig } from '../../config/archon-shared.config';
import { ArchonCellDef } from '../../directives/archon-cell.directive';
import { SortState, TableColumn } from '../../models';
import { ArchonExporter } from '../../services/archon-exporter';

/**
 * Read-only table with client-side sort, paging and optional export.
 * Defaults (page size, empty text, density) come from the shared config; inputs override them.
 * Custom cells: <ng-template archonCell="key" let-row>…</ng-template>
 */
@Component({
  selector: 'archon-static-table',
  imports: [HlmTableImports, HlmButtonImports, NgIcon, NgTemplateOutlet],
  providers: [
    provideIcons({ lucideArrowDown, lucideArrowUp, lucideChevronsUpDown, lucideDownload }),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './archon-static-table.html',
})
export class ArchonStaticTable<T extends object> {
  private readonly cfg = injectArchonConfig().table;
  private readonly exporter = inject(ArchonExporter);

  readonly columns = input.required<TableColumn<T>[]>();
  readonly rows = input.required<T[]>();
  readonly pageSize = input<number>();
  readonly emptyText = input<string>();
  readonly dense = input<boolean>();
  /** Shows an Export button; file name without extension. */
  readonly exportName = input<string>();
  readonly rowClick = output<T>();

  protected readonly cells = contentChildren(ArchonCellDef);
  protected readonly cellMap = computed(
    () => new Map(this.cells().map((c) => [c.key(), c.template])),
  );

  protected readonly size = computed(() => this.pageSize() ?? this.cfg.pageSize);
  protected readonly empty = computed(() => this.emptyText() ?? this.cfg.emptyText);
  protected readonly cellPad = computed(() => ((this.dense() ?? this.cfg.dense) ? 'py-1.5' : ''));
  protected readonly striped = this.cfg.striped;

  protected readonly page = signal(0);
  protected readonly sort = signal<SortState | null>(null);

  constructor() {
    // back to the first page when the data changes (filtering)
    effect(() => {
      this.rows();
      this.page.set(0);
    });
  }

  protected readonly sorted = computed(() => {
    const s = this.sort();
    const rows = [...this.rows()];
    const col = s && this.columns().find((c) => c.key === s.key);
    if (!s || !col) return rows;
    const dir = s.direction === 'asc' ? 1 : -1;
    return rows.sort((a, b) => compareValues(this.raw(a, col), this.raw(b, col)) * dir);
  });

  protected readonly pageCount = computed(() =>
    Math.max(1, Math.ceil(this.rows().length / this.size())),
  );
  protected readonly pageRows = computed(() => {
    const start = Math.min(this.page(), this.pageCount() - 1) * this.size();
    return this.sorted().slice(start, start + this.size());
  });
  protected readonly rangeLabel = computed(() => {
    const start = this.page() * this.size();
    return `${start + 1}–${Math.min(start + this.size(), this.rows().length)} of ${this.rows().length}`;
  });

  protected toggleSort(key: string): void {
    const s = this.sort();
    this.sort.set(
      s?.key !== key
        ? { key, direction: 'asc' }
        : s.direction === 'asc'
          ? { key, direction: 'desc' }
          : null,
    );
    this.page.set(0);
  }

  protected sortIcon(key: string): string {
    const s = this.sort();
    if (s?.key !== key) return 'lucideChevronsUpDown';
    return s.direction === 'asc' ? 'lucideArrowUp' : 'lucideArrowDown';
  }

  protected alignClass(col: TableColumn<T>): string {
    return col.align === 'right'
      ? 'text-right tabular-nums'
      : col.align === 'center'
        ? 'text-center'
        : '';
  }

  protected cell(row: T, col: TableColumn<T>): string {
    const v = this.raw(row, col);
    return v == null ? '—' : String(v);
  }

  protected export(): void {
    this.exporter.export(this.exportName() ?? 'export', this.columns(), this.sorted());
  }

  private raw(row: T, col: TableColumn<T>): string | number | null | undefined {
    return col.value
      ? col.value(row)
      : ((row as Record<string, unknown>)[col.key] as string | number | undefined);
  }
}
