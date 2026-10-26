import { Injectable, Provider, Type } from '@angular/core';
import { downloadFile, toCsv } from '@utils/file';
import { TableColumn } from '../models';

/**
 * How shared tables export rows. Default: CSV download in the browser.
 * Swap it for a module or a page: providers: [provideArchonExporter(ServerPdfExporter)]
 */
@Injectable({ providedIn: 'root', useFactory: () => new CsvExporter() })
export abstract class ArchonExporter {
  abstract export<T extends object>(
    fileName: string,
    columns: readonly TableColumn<T>[],
    rows: readonly T[],
  ): void;
}

@Injectable()
export class CsvExporter extends ArchonExporter {
  export<T extends object>(
    fileName: string,
    columns: readonly TableColumn<T>[],
    rows: readonly T[],
  ): void {
    const flat = rows.map((r) =>
      Object.fromEntries(
        columns.map((c) => [c.key, c.value ? c.value(r) : (r as Record<string, unknown>)[c.key]]),
      ),
    );
    downloadFile(`${fileName}.csv`, toCsv(columns, flat), 'text/csv;charset=utf-8');
  }
}

export function provideArchonExporter(exporter: Type<ArchonExporter>): Provider {
  return { provide: ArchonExporter, useClass: exporter };
}
