import { computed, inject, Injectable, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { NAV_ITEMS } from '../config/nav-items';
import { Profile } from '../models/profile.model';

/** Current profile purpose, taken from the URL (/live/… or /decom/…). */
@Injectable({ providedIn: 'root' })
export class ProfileService {
  private readonly router = inject(Router);

  readonly profile = signal<Profile>('live');
  readonly nav = computed(() => NAV_ITEMS[this.profile()]);

  constructor() {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e) => {
      const first = e.urlAfterRedirects.split(/[/?#]/)[1];
      if (first === 'live' || first === 'decom') this.profile.set(first);
    });
  }

  switchTo(profile: Profile): void {
    void this.router.navigateByUrl(`/${profile}`);
  }
}
