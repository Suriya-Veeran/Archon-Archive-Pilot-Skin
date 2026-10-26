import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArchonSharedImports, ArchonUiImports } from '@shared';

@Component({
  selector: 'archon-live-repositories',
  imports: [ArchonSharedImports, ArchonUiImports],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './repositories.html',
})
export class LiveRepositories {}
