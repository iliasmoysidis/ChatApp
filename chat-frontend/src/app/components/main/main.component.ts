import { Component, effect, inject, OnInit } from '@angular/core';
import Keycloak from 'keycloak-js';
import {
  NbButtonModule,
  NbLayoutModule,
  NbIconModule,
  NbThemeModule,
} from '@nebular/theme';
import { CommonModule } from '@angular/common';
import {
  KEYCLOAK_EVENT_SIGNAL,
  KeycloakEventType,
  ReadyArgs,
  typeEventArgs,
} from 'keycloak-angular';

@Component({
  selector: 'app-main',
  imports: [
    NbLayoutModule,
    NbIconModule,
    NbButtonModule,
    NbThemeModule,
    CommonModule,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  public isAuthenticated = false;

  constructor(private readonly keycloak: Keycloak) {
    const keycloakSignal = inject(KEYCLOAK_EVENT_SIGNAL);

    effect(() => {
      const keycloakEvent = keycloakSignal();

      if (keycloakEvent.type === KeycloakEventType.Ready) {
        this.isAuthenticated = typeEventArgs<ReadyArgs>(keycloakEvent.args);
      }

      if (keycloakEvent.type === KeycloakEventType.AuthLogout) {
        this.isAuthenticated = false;
      }
    });
  }

  logout() {
    this.keycloak.logout();
  }

  login() {
    this.keycloak.login();
  }

  register() {
    this.keycloak.register();
  }
}
