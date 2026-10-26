import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Status } from '../../models';
import { ArchonStatusBadge } from '../archon_status_badge/archon-status-badge';

/** One headline number: label, value, optional sub-text and status. */
@Component({
  selector: 'archon-kpi-tile',
  imports: [ArchonStatusBadge],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './archon-kpi-tile.html',
})
export class ArchonKpiTile {
  readonly label = input.required<string>();
  readonly value = input.required<string | number>();
  readonly sub = input<string>();
  readonly status = input<Status>();
  readonly statusLabel = input<string>();
}
