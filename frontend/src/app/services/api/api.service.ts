import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  filterUsers(value: string): Observable<any> {
    const params = new HttpParams().set('searchString', value);
    return this.http.get(`${environment.backend.url}/api/filterUsers`, {
      params,
    });
  }
}
