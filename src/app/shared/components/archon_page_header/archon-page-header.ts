import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Page title row. [page-actions] slot sits on the right. */
@Component({
  selector: 'archon-page-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './archon-page-header.html',
})
export class ArchonPageHeader {
  readonly title = input.required<string>();
  readonly subtitle = input<string>();
}
