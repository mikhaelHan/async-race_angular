import { inject } from '@angular/core';
import { ICar } from '@app/app/shared/models/garage.model';
import { ApiService } from '@app/app/shared/services/api-service/api.service';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { IGarageState } from './garage-store.model';

const initialState: IGarageState = {
  cars: [],
};

export const garageStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),

  withMethods(store => {
    const apiService: ApiService = inject(ApiService);

    return {
      loadCars: (): void => {
        apiService.getCars().subscribe((data: ICar[]) => {
          patchState(store, () => ({
            cars: [...data],
          }));
        });
      },
    };
  })
);
