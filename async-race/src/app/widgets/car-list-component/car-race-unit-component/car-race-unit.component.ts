import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CarSvgComponent } from './car-svg-component/car-svg.component';

@Component({
  selector: 'app-car-race-unit-component',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CarSvgComponent, MatButtonModule, MatIconModule],
  templateUrl: './car-race-unit.component.html',
  styleUrl: './car-race-unit.component.scss',
})
export class CarRaceUnitComponent {
  public readonly color: InputSignal<string | undefined> = input<string>();
  public readonly title: InputSignal<string | undefined> = input<string>();
}
