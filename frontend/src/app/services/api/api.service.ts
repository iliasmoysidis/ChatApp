import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  filterUsers(value: string): Observable<any> {
    const params = new HttpParams().set('searchString', value);
    return this.http.get(`${environment.backend.url}/api/users/filter`, {
      params,
    });
  }

  createChat(participantIds: string[]): Observable<any> {
    return this.http.post(
      `${environment.backend.url}/api/chats/`,
      participantIds
    );
  }

  getUserChats(): Observable<any> {
    return this.http.get(`${environment.backend.url}/api/chats/`);
  }

  deleteChat(id: string) {
    return this.http.delete(`${environment.backend.url}/api/chats/${id}`);
  }
}
