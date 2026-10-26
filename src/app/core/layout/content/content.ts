import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { STORAGE_KEYS } from '../../config/storage-keys';
import { StorageService } from '../../services/storage.service';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';

/** Signed-in shell: header + sidebar + routed page. */
@Component({
  selector: 'archon-content',
  imports: [RouterOutlet, Header, Sidebar],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './content.html',
})
export class Content {
  private readonly storage = inject(StorageService);
  protected readonly collapsed = signal(
    this.storage.get<boolean>(STORAGE_KEYS.sidebarCollapsed) ?? false,
  );

  protected toggle(): void {
    this.collapsed.update((c) => !c);
    this.storage.set(STORAGE_KEYS.sidebarCollapsed, this.collapsed());
  }
}
