import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthService } from '@auth/auth.service';
import { ArchonSharedImports } from '@shared';
import { Profile } from '../../models/profile.model';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'archon-header',
  imports: [ArchonSharedImports],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.html',
})
export class Header {
  protected readonly auth = inject(AuthService);
  protected readonly profile = inject(ProfileService);
  protected readonly profiles: { id: Profile; label: string }[] = [
    { id: 'live', label: 'Live' },
    { id: 'decom', label: 'Decommission' },
  ];
}
