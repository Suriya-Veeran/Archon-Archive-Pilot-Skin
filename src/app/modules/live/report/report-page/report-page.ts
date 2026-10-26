import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArchonSharedImports } from '@shared';

@Component({
  selector: 'archon-live-report-page',
  imports: [ArchonSharedImports],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './report-page.html',
})
export class LiveReportPage {}
