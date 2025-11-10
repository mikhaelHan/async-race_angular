import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-car-list-component',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss',
})
export class CarListComponent {}
