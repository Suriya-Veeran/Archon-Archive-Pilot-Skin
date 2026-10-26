import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArchonSharedImports, ArchonUiImports } from '@shared';

@Component({
  selector: 'archon-live-overview',
  imports: [ArchonSharedImports, ArchonUiImports],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './overview.html',
})
export class LiveOverview {}
