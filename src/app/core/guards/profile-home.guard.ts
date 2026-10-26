import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { PROFILES } from '../models';
import { ProfileService } from '../services/profile.service';

/** "/" -> the home page of the last used profile. */
export const profileHomeGuard: CanActivateFn = () => {
  const profile = inject(ProfileService).profile();
  return inject(Router).createUrlTree([PROFILES.find((p) => p.id === profile)!.home]);
};
