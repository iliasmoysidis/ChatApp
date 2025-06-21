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

  private getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.authService.accessToken}`,
    });
  }

  filterUsers(value: string): Observable<any> {
    const headers = this.getAuthHeaders();
    const params = new HttpParams().set('searchString', value);
    return this.http.get(`${environment.backend.url}/api/users/filter`, {
      headers,
      withCredentials: true,
      params,
    });
  }

  createChat(participantIds: string[]): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.post(
      `${environment.backend.url}/api/chats/`,
      participantIds,
      {
        headers,
        withCredentials: true,
      }
    );
  }

  getUserChats(): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.get(`${environment.backend.url}/api/chats/`, {
      headers,
      withCredentials: true,
    });
  }

  deleteChat(id: string) {
    const headers = this.getAuthHeaders();
    return this.http.delete(`${environment.backend.url}/api/chats/${id}`, {
      headers,
      withCredentials: true,
    });
  }

  sendMessage(id: string, message: string) {
    const headers = this.getAuthHeaders();
    return this.http.post(
      `${environment.backend.url}/api/messages/${id}`,
      { message },
      {
        headers,
        withCredentials: true,
      }
    );
  }

  getMessages(id: string): Observable<any[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<any[]>(
      `${environment.backend.url}/api/messages/${id}`,
      {
        headers,
        withCredentials: true,
      }
    );
  }
}
