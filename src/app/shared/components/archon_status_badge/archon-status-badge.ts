import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideCircle,
  lucideCircleCheck,
  lucideInfo,
  lucideOctagonX,
  lucideTriangleAlert,
} from '@ng-icons/lucide';
import { HlmBadgeImports } from '@spartan-ng/helm/badge';
import { Status } from '../../models';

const META: Record<Status, { icon: string; label: string; tone: string }> = {
  good: {
    icon: 'lucideCircleCheck',
    label: 'Good',
    tone: 'text-emerald-600 dark:text-emerald-400',
  },
  warning: {
    icon: 'lucideTriangleAlert',
    label: 'Warning',
    tone: 'text-amber-600 dark:text-amber-400',
  },
  critical: { icon: 'lucideOctagonX', label: 'Critical', tone: 'text-red-600 dark:text-red-400' },
  info: { icon: 'lucideInfo', label: 'Info', tone: 'text-sky-600 dark:text-sky-400' },
  neutral: { icon: 'lucideCircle', label: 'None', tone: 'text-muted-foreground' },
};

/** Status chip: icon + text, so it never relies on colour alone. */
@Component({
  selector: 'archon-status-badge',
  imports: [HlmBadgeImports, NgIcon],
  providers: [
    provideIcons({
      lucideCircleCheck,
      lucideTriangleAlert,
      lucideOctagonX,
      lucideInfo,
      lucideCircle,
    }),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './archon-status-badge.html',
})
export class ArchonStatusBadge {
  readonly status = input.required<Status>();
  readonly label = input<string>();

  protected readonly meta = computed(() => META[this.status()]);
}
