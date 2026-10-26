import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

/** Visiting /logout clears the session and returns to /login. */
@Component({
  selector: 'archon-logout',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './logout.html',
})
export class Logout implements OnInit {
  private readonly auth = inject(AuthService);

  ngOnInit(): void {
    this.auth.logout();
  }
}
