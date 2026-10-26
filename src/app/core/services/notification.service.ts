import { Injectable } from '@angular/core';
import { toast } from '@spartan-ng/brain/sonner';

/** App-wide toasts (rendered by <hlm-toaster> in app.html). */
@Injectable({ providedIn: 'root' })
export class NotificationService {
  success(message: string, description?: string): void {
    toast.success(message, { description });
  }

  error(message: string, description?: string): void {
    toast.error(message, { description });
  }

  info(message: string, description?: string): void {
    toast.info(message, { description });
  }
}
