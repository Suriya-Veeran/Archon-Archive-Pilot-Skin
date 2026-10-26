import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArchonSharedImports, ArchonUiImports } from '@shared';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'archon-login',
  imports: [ReactiveFormsModule, ArchonSharedImports, ArchonUiImports],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.html',
})
export class Login {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  protected readonly form = inject(FormBuilder).nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  protected readonly submitting = signal(false);
  protected readonly error = signal<string | null>(null);

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitting.set(true);
    this.error.set(null);
    this.auth.login(this.form.getRawValue()).subscribe({
      next: () =>
        void this.router.navigateByUrl(this.route.snapshot.queryParamMap.get('returnUrl') ?? '/'),
      error: () => {
        this.error.set('Invalid username or password');
        this.submitting.set(false);
      },
    });
  }

  protected sso(): void {
    this.auth.startSso();
  }

  protected fieldError(name: 'username' | 'password'): string | null {
    const c = this.form.controls[name];
    return c.touched && c.invalid ? 'Required' : null;
  }
}
