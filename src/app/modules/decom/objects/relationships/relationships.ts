import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArchonSharedImports, ArchonUiImports } from '@shared';

@Component({
  selector: 'archon-decom-relationships',
  imports: [ArchonSharedImports, ArchonUiImports],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './relationships.html',
})
export class DecomRelationships {}
