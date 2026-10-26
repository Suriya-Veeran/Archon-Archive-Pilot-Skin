import { ChangeDetectionStrategy, Component, computed, input, model, output } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideCheck } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { injectArchonConfig } from '../../config/archon-shared.config';
import { Step } from '../../models';

/**
 * Step header + Back/Next footer. The page renders the active step itself:
 *
 * <archon-stepper [steps]="steps" [(active)]="active" (finish)="submit()">
 *   @switch (active()) { @case (0) { <step-one /> } @case (1) { <step-two /> } }
 * </archon-stepper>
 */
@Component({
  selector: 'archon-stepper',
  imports: [HlmButtonImports, NgIcon],
  providers: [provideIcons({ lucideCheck })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './archon-stepper.html',
})
export class ArchonStepper {
  protected readonly text = injectArchonConfig().stepper;

  readonly steps = input.required<Step[]>();
  readonly active = model(0);
  /** Let users jump to any step from the header. */
  readonly freeNavigation = input(true);
  readonly nextDisabled = input(false);
  readonly finish = output<void>();

  protected readonly isLast = computed(() => this.active() >= this.steps().length - 1);

  protected go(i: number): void {
    if (this.freeNavigation() || i < this.active()) this.active.set(i);
  }

  protected next(): void {
    if (this.isLast()) this.finish.emit();
    else this.active.update((i) => i + 1);
  }
}
