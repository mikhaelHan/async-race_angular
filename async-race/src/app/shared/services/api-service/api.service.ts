import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ICar } from '@app/app/shared/models/garage.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http: HttpClient = inject(HttpClient);

  public getCars = (): Observable<ICar[]> => this.http.get<ICar[]>('/garage');
}
