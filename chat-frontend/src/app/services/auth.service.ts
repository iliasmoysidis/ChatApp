import { effect, inject, Injectable, signal } from '@angular/core';
import {
  KEYCLOAK_EVENT_SIGNAL,
  KeycloakEventType,
  ReadyArgs,
  typeEventArgs,
} from 'keycloak-angular';
import Keycloak from 'keycloak-js';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _isAuthenticated = signal(false);
  public readonly isAuthenticated = this._isAuthenticated.asReadonly();

  constructor(private readonly keycloak: Keycloak) {
    const keycloakSignal = inject(KEYCLOAK_EVENT_SIGNAL);

    effect(() => {
      const keycloakEvent = keycloakSignal();

      if (keycloakEvent.type === KeycloakEventType.Ready) {
        const isAuth = typeEventArgs<ReadyArgs>(keycloakEvent.args);
        this._isAuthenticated.set(isAuth);
      }

      if (keycloakEvent.type === KeycloakEventType.AuthLogout) {
        this._isAuthenticated.set(false);
      }
    });
  }
}
