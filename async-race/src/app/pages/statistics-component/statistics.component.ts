import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-statistics-component',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss',
})
export default class StatisticsComponent {}
