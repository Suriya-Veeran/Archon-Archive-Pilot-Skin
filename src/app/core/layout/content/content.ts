import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../header/header';
import { Sidebar } from '../sidebar/sidebar';

/** Signed-in shell: header + sidebar + routed page. */
@Component({
  selector: 'archon-content',
  imports: [RouterOutlet, Header, Sidebar],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './content.html',
})
export class Content {}
