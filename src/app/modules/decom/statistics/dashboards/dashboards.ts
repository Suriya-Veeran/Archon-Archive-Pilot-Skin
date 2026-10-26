import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArchonSharedImports, ArchonUiImports } from '@shared';

@Component({
  selector: 'archon-decom-dashboards',
  imports: [ArchonSharedImports, ArchonUiImports],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboards.html',
})
export class DecomDashboards {}
