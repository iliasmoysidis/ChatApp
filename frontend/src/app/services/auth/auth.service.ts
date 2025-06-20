import { effect, inject, Injectable, signal } from '@angular/core';
import {
  KEYCLOAK_EVENT_SIGNAL,
  KeycloakEventType,
  ReadyArgs,
  typeEventArgs,
} from 'keycloak-angular';
import Keycloak from 'keycloak-js';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _isAuthenticated = signal(false);
  public readonly isAuthenticated = this._isAuthenticated.asReadonly();
  private readonly _decodedToken = signal<any>(null);
  public readonly decodedToken = this._decodedToken.asReadonly();
  public decodedTokenValue: any = null;

  private decodeToken(token: string): any {
    try {
      const payload = token.split('.')[1];
      return JSON.parse(atob(payload));
    } catch {
      return null;
    }
  }

  constructor(private readonly socket: Socket, private keycloak: Keycloak) {
    const keycloakSignal = inject(KEYCLOAK_EVENT_SIGNAL);

    effect(() => {
      const keycloakEvent = keycloakSignal();

      if (keycloakEvent.type === KeycloakEventType.Ready) {
        const isAuth = typeEventArgs<ReadyArgs>(keycloakEvent.args);
        this._isAuthenticated.set(isAuth);

        if (isAuth) {
          const decoded = this.decodeToken(this.keycloak.token!);
          this._decodedToken.set(decoded);
          this.decodedTokenValue = decoded;
          this.socket.ioSocket.auth = { token: this.keycloak.token };
          this.socket.connect();
        } else {
          this._decodedToken.set(null);
          this.decodedTokenValue = null;
        }
      }

      if (keycloakEvent.type === KeycloakEventType.AuthLogout) {
        this._isAuthenticated.set(false);
        this._decodedToken.set(null);
        this.decodedTokenValue = null;
        this.socket.disconnect();
      }
    });
  }

  get accessToken(): string | null {
    return this.keycloak.token || null;
  }
}
