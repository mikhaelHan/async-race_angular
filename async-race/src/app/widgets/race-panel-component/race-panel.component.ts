import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-race-panel-component',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButton],
  templateUrl: './race-panel.component.html',
  styleUrl: './race-panel.component.scss',
})
export class RacePanelComponent {}
