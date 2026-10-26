import { ChangeDetectionStrategy, Component, forwardRef, input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmLabelImports } from '@spartan-ng/helm/label';

let nextId = 0;

/** Labelled input that works with formControlName / ngModel. */
@Component({
  selector: 'archon-input',
  imports: [HlmInputImports, HlmLabelImports],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ArchonInput), multi: true },
  ],
  templateUrl: './archon-input.html',
})
export class ArchonInput implements ControlValueAccessor {
  readonly label = input<string>();
  readonly type = input<'text' | 'password' | 'email' | 'number'>('text');
  readonly error = input<string | null>();

  protected readonly id = `archon-input-${nextId++}`;
  protected readonly value = signal('');
  protected readonly disabled = signal(false);
  private onChange: (v: string) => void = () => {};
  protected onTouched: () => void = () => {};

  writeValue(v: string | null): void {
    this.value.set(v ?? '');
  }
  registerOnChange(fn: (v: string) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState(d: boolean): void {
    this.disabled.set(d);
  }

  protected onInput(e: Event): void {
    const v = (e.target as HTMLInputElement).value;
    this.value.set(v);
    this.onChange(v);
  }
}
