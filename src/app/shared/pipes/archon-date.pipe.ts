import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@utils/format';
import { injectArchonConfig } from '../config/archon-shared.config';

/** {{ row.createdAt | archonDate }} using the shared config's locale and date format */
@Pipe({ name: 'archonDate' })
export class ArchonDatePipe implements PipeTransform {
  private readonly format = injectArchonConfig().format;

  transform(
    value: string | number | Date | null | undefined,
    options?: Intl.DateTimeFormatOptions,
  ): string {
    return formatDate(value, this.format.locale, options ?? this.format.date);
  }
}
