import { computed, DestroyRef, inject, Injectable, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { NAV_ITEMS } from '../config/nav-items';
import { STORAGE_KEYS } from '../config/storage-keys';
import { Profile, PROFILES } from '../models';
import { StorageService } from './storage.service';

/**
 * Current profile purpose (LIVE / DECOM). Follows the URL (/live/…, /decom/…);
 * on shared pages (settings, tour) it keeps the last profile.
 */
@Injectable({ providedIn: 'root' })
export class ProfileService {
  private readonly router = inject(Router);
  private readonly storage = inject(StorageService);

  readonly profile = signal<Profile>(this.storage.get<Profile>(STORAGE_KEYS.profile) ?? 'live');
  readonly profiles = PROFILES;
  readonly nav = computed(() => NAV_ITEMS[this.profile()]);

  constructor() {
    const sub = this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => {
        const first = e.urlAfterRedirects.split(/[/?#]/)[1];
        if (first === 'live' || first === 'decom') this.set(first);
      });
    inject(DestroyRef).onDestroy(() => sub.unsubscribe());
  }

  switchTo(profile: Profile): void {
    this.set(profile);
    void this.router.navigateByUrl(PROFILES.find((p) => p.id === profile)!.home);
  }

  private set(profile: Profile): void {
    this.profile.set(profile);
    this.storage.set(STORAGE_KEYS.profile, profile);
  }
}
