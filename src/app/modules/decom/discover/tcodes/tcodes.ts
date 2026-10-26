import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArchonSharedImports, ArchonUiImports } from '@shared';

@Component({
  selector: 'archon-decom-tcodes',
  imports: [ArchonSharedImports, ArchonUiImports],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './tcodes.html',
})
export class DecomTcodes {}
