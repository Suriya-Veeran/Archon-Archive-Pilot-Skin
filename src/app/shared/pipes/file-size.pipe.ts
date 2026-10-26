import { Pipe, PipeTransform } from '@angular/core';
import { formatBytes } from '@utils/format';

/** {{ 1536 | fileSize }} -> "1.5 KB" */
@Pipe({ name: 'fileSize' })
export class FileSizePipe implements PipeTransform {
  transform(bytes: number | null | undefined, digits = 1): string {
    return formatBytes(bytes, digits);
  }
}
