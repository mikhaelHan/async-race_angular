import { inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { INavigationState } from './navigation-store.model';

const initialState: INavigationState = {
  race: false,
  isGarage: true,
};

export const navigationStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),

  withMethods(store => {
    const router: Router = inject(Router);

    return {
      onGarage: (): void => {
        router.navigate(['garage']);
        patchState(store, () => ({ isGarage: true }));
      },

      onStatistics: (): void => {
        router.navigate(['statistics']);
        patchState(store, () => ({ race: false, isGarage: false }));
      },

      isOnNavigate: (): void => {
        router.events.subscribe(event => {
          if (event instanceof NavigationEnd) {
            const url: string = event.urlAfterRedirects;

            patchState(store, () => ({ isGarage: url === '/garage' }));
          }
        });
      },
    };
  })
);
