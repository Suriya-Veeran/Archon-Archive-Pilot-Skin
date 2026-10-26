import { ChangeDetectionStrategy, Component, computed, inject, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '@auth/services/auth.service';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideLogOut, lucideMenu, lucideMoon, lucideSun } from '@ng-icons/lucide';
import { HlmAvatarImports } from '@spartan-ng/helm/avatar';
import { ArchonUiImports } from '@shared';
import { initials } from '@utils/string';
import { LoadingService } from '../../services/loading.service';
import { ProfileService } from '../../services/profile.service';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'archon-header',
  imports: [RouterLink, NgIcon, ArchonUiImports, HlmAvatarImports],
  providers: [provideIcons({ lucideMenu, lucideLogOut, lucideMoon, lucideSun })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.html',
})
export class Header {
  protected readonly auth = inject(AuthService);
  protected readonly loading = inject(LoadingService);
  protected readonly theme = inject(ThemeService);
  protected readonly profile = inject(ProfileService);
  readonly toggleSidebar = output<void>();

  protected readonly initials = computed(() => initials(this.auth.user()?.displayName));
}
