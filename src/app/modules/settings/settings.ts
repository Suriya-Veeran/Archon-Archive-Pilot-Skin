import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArchonSharedImports } from '@shared';

@Component({
  selector: 'archon-settings',
  imports: [ArchonSharedImports],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './settings.html',
})
export class Settings {}
