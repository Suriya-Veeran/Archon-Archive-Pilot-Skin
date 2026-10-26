import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ArchonUiImports } from '@shared';
import { AuthService } from '../services/auth.service';

/** SSO callback: /sso?token=… (adjust to your IdP's response, e.g. ?code= for OAuth). */
@Component({
  selector: 'archon-sso',
  imports: [RouterLink, ArchonUiImports],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sso.html',
})
export class Sso implements OnInit {
  private readonly auth = inject(AuthService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  protected readonly error = signal<string | null>(null);

  ngOnInit(): void {
    const token = this.route.snapshot.queryParamMap.get('token');
    if (!token) {
      this.error.set('No sign-in token was returned.');
      return;
    }
    this.auth.completeSso(token).subscribe({
      next: () => void this.router.navigateByUrl('/'),
      error: () => {
        this.auth.clearSession();
        this.error.set('Single sign-on failed. Please try again.');
      },
    });
  }
}
