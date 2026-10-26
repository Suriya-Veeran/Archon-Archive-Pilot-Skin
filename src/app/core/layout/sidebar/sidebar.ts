import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  lucideActivity,
  lucideBoxes,
  lucideCalendar,
  lucideChartColumn,
  lucideCompass,
  lucideDatabase,
  lucideFileText,
  lucideFolderTree,
  lucideHistory,
  lucideHouse,
  lucideLayoutDashboard,
  lucideListChecks,
  lucideRoute,
  lucideSearch,
  lucideServer,
  lucideSettings,
  lucideTimer,
} from '@ng-icons/lucide';
import { SHARED_NAV_ITEMS } from '../../config/nav-items';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'archon-sidebar',
  imports: [RouterLink, RouterLinkActive, NgIcon, NgTemplateOutlet],
  providers: [
    provideIcons({
      lucideActivity,
      lucideBoxes,
      lucideCalendar,
      lucideChartColumn,
      lucideCompass,
      lucideDatabase,
      lucideFileText,
      lucideFolderTree,
      lucideHistory,
      lucideHouse,
      lucideLayoutDashboard,
      lucideListChecks,
      lucideRoute,
      lucideSearch,
      lucideServer,
      lucideSettings,
      lucideTimer,
    }),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  templateUrl: './sidebar.html',
})
export class Sidebar {
  readonly collapsed = input(false);
  protected readonly profile = inject(ProfileService);
  protected readonly sharedItems = SHARED_NAV_ITEMS;
}
