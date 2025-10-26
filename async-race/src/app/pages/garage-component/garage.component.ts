import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-garage-component',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './garage.component.html',
  styleUrl: './garage.component.scss',
})
export default class GarageComponent {}
