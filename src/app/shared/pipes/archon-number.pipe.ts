import { Pipe, PipeTransform } from '@angular/core';
import { formatCompact, formatNumber } from '@utils/format';
import { injectArchonConfig } from '../config/archon-shared.config';

/** {{ 1234567 | archonNumber }} -> "1,234,567";  {{ 1234567 | archonNumber: 'compact' }} -> "1.2M" (locale from shared config) */
@Pipe({ name: 'archonNumber' })
export class ArchonNumberPipe implements PipeTransform {
  private readonly locale = injectArchonConfig().format.locale;

  transform(
    value: number | null | undefined,
    mode: 'full' | 'compact' = 'full',
    digits = 0,
  ): string {
    return mode === 'compact'
      ? formatCompact(value, this.locale)
      : formatNumber(value, this.locale, digits);
  }
}
