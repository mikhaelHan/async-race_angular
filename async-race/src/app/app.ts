import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, MatSlideToggleModule],
  template: `
  <mat-slide-toggle>Toggle me!</mat-slide-toggle>
  <router-outlet />`,
})
export class App {}
