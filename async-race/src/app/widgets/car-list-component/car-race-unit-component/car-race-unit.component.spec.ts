import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRaceUnitComponent } from './car-race-unit.component';

describe('CarRaceUnitComponent', () => {
  let component: CarRaceUnitComponent;
  let fixture: ComponentFixture<CarRaceUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarRaceUnitComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarRaceUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
