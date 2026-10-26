import { HlmButtonImports } from '@spartan-ng/helm/button';
import { ArchonCard } from './components/archon_card/archon-card';
import { ArchonDialog } from './components/archon_dialog/archon-dialog';
import { ArchonInput } from './components/archon_input/archon-input';
import { ArchonPageHeader } from './components/archon_page_header/archon-page-header';
import { ArchonTable } from './components/archon_table/archon-table';
import { ArchonCellDef } from './directives/archon-cell.directive';

/** The shared module: one import gives a page every shared piece. imports: [ArchonSharedImports] */
export const ArchonSharedImports = [
  ArchonCard,
  ArchonDialog,
  ArchonInput,
  ArchonPageHeader,
  ArchonTable,
  ArchonCellDef,
  HlmButtonImports,
] as const;
