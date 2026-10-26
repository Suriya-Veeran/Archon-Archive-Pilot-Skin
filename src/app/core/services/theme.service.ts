import { DOCUMENT } from '@angular/common';
import { effect, inject, Injectable, signal } from '@angular/core';
import { STORAGE_KEYS } from '../config/storage-keys';
import { StorageService } from './storage.service';

/** Light/dark theme: toggles the `dark` class on <html> (Spartan + Tailwind dark variant). */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly doc = inject(DOCUMENT);
  private readonly storage = inject(StorageService);

  readonly dark = signal<boolean>(
    this.storage.get<boolean>(STORAGE_KEYS.dark) ??
      (typeof matchMedia !== 'undefined' && matchMedia('(prefers-color-scheme: dark)').matches),
  );

  constructor() {
    effect(() => {
      this.doc.documentElement.classList.toggle('dark', this.dark());
      this.storage.set(STORAGE_KEYS.dark, this.dark());
    });
  }

  toggle(): void {
    this.dark.update((d) => !d);
  }
}
