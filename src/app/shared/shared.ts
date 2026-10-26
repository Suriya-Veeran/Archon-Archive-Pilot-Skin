import { HlmBadgeImports } from '@spartan-ng/helm/badge';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';
import { HlmSeparatorImports } from '@spartan-ng/helm/separator';
import { HlmSkeletonImports } from '@spartan-ng/helm/skeleton';
import { HlmSpinnerImports } from '@spartan-ng/helm/spinner';
import { HlmTabsImports } from '@spartan-ng/helm/tabs';
import { HlmTooltipImports } from '@spartan-ng/helm/tooltip';
import { ArchonCard } from './components/archon_card/archon-card';
import { ArchonDialog } from './components/archon_dialog/archon-dialog';
import { ArchonEmptyState } from './components/archon_empty_state/archon-empty-state';
import { ArchonExpandableTable } from './components/archon_expandable_table/archon-expandable-table';
import { ArchonInput } from './components/archon_input/archon-input';
import { ArchonKpiTile } from './components/archon_kpi_tile/archon-kpi-tile';
import { ArchonPageHeader } from './components/archon_page_header/archon-page-header';
import { ArchonPlaceholder } from './components/archon_placeholder/archon-placeholder';
import { ArchonSidePanel } from './components/archon_side_panel/archon-side-panel';
import { ArchonStaticTable } from './components/archon_static_table/archon-static-table';
import { ArchonStatusBadge } from './components/archon_status_badge/archon-status-badge';
import { ArchonStepper } from './components/archon_stepper/archon-stepper';
import { ArchonCellDef } from './directives/archon-cell.directive';
import { AutofocusDirective } from './directives/autofocus.directive';
import { ArchonDatePipe } from './pipes/archon-date.pipe';
import { ArchonNumberPipe } from './pipes/archon-number.pipe';
import { FileSizePipe } from './pipes/file-size.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';

/**
 * The "shared module": one import gives a page every archon_* component, directive and pipe.
 *   @Component({ imports: [ArchonSharedImports, ArchonUiImports] })
 * Angular only bundles the pieces a template actually uses.
 */
export const ArchonSharedImports = [
  ArchonCard,
  ArchonDialog,
  ArchonEmptyState,
  ArchonExpandableTable,
  ArchonInput,
  ArchonKpiTile,
  ArchonPageHeader,
  ArchonPlaceholder,
  ArchonSidePanel,
  ArchonStaticTable,
  ArchonStatusBadge,
  ArchonStepper,
  ArchonCellDef,
  AutofocusDirective,
  ArchonDatePipe,
  ArchonNumberPipe,
  FileSizePipe,
  TruncatePipe,
] as const;

/** The Spartan (helm) primitives most pages need. Import others directly from '@spartan-ng/helm/<name>'. */
export const ArchonUiImports = [
  HlmBadgeImports,
  HlmButtonImports,
  HlmCardImports,
  HlmInputImports,
  HlmLabelImports,
  HlmSeparatorImports,
  HlmSkeletonImports,
  HlmSpinnerImports,
  HlmTabsImports,
  HlmTooltipImports,
] as const;
