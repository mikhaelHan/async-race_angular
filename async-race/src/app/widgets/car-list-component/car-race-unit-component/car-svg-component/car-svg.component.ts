import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-car-svg-component',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './car-svg.component.html',
  styleUrl: './car-svg.component.scss',
})
export class CarSvgComponent {
  public readonly color: InputSignal<string | undefined> = input<string>();
}
