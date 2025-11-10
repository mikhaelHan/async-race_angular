import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CarListComponent } from '@app/app/widgets/car-list-component/car-list.component';
import { RacePanelComponent } from '@app/app/widgets/race-panel-component/race-panel.component';

@Component({
  selector: 'app-garage-component',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RacePanelComponent, CarListComponent],
  templateUrl: './garage.component.html',
  styleUrl: './garage.component.scss',
})
export default class GarageComponent {}
