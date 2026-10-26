import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArchonSharedImports } from '@shared';

@Component({
  selector: 'archon-decom-plan-page',
  imports: [ArchonSharedImports],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './plan-page.html',
})
export class DecomPlanPage {}
