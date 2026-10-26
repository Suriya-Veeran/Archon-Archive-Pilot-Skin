import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ArchonSharedImports } from '@shared';

@Component({
  selector: 'archon-decom-security',
  imports: [ArchonSharedImports],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './security.html',
})
export class DecomSecurity {}
