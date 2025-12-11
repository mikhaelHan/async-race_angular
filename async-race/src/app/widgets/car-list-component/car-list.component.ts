import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { garageStore } from '@app/app/redux/garage-store/garage-store';
import { CarRaceUnitComponent } from './car-race-unit-component/car-race-unit.component';

@Component({
  selector: 'app-car-list-component',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CarRaceUnitComponent],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss',
})
export class CarListComponent implements OnInit {
  public garageStore = inject(garageStore);

  ngOnInit(): void {
    this.garageStore.loadCars();
  }
}
