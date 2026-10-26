import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ArchonSharedImports, ArchonUiImports, Step } from '@shared';

@Component({
  selector: 'archon-decom-plan-page',
  imports: [ArchonSharedImports, ArchonUiImports],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './plan-page.html',
})
export class DecomPlanPage {
  protected readonly steps: Step[] = [
    { key: 'step-assessment', label: 'Assessment' },
    { key: 'step-review', label: 'Review' },
    { key: 'step-execution', label: 'Execution' },
    { key: 'step-custody', label: 'Custody' },
  ];
  protected readonly active = signal(0);
}
