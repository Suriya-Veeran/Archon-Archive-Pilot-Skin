import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArchonSharedImports } from '@shared';

@Component({
  selector: 'archon-live-job-detail',
  imports: [ArchonSharedImports],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './job-detail.html',
})
export class LiveJobDetail {}
