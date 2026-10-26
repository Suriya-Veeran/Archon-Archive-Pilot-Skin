import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SHARED_NAV_ITEMS } from '../../config/nav-items';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'archon-sidebar',
  imports: [RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sidebar.html',
})
export class Sidebar {
  protected readonly profile = inject(ProfileService);
  protected readonly shared = SHARED_NAV_ITEMS;
}
