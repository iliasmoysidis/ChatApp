import { Component, effect, inject } from '@angular/core';
import Keycloak from 'keycloak-js';
import {
  NbButtonModule,
  NbLayoutModule,
  NbIconModule,
  NbThemeModule,
  NbChatModule,
} from '@nebular/theme';
import { CommonModule } from '@angular/common';
import {
  KEYCLOAK_EVENT_SIGNAL,
  KeycloakEventType,
  ReadyArgs,
  typeEventArgs,
} from 'keycloak-angular';
import { ChatComponent } from '../chat/chat.component';
import { HeaderComponent } from '../header/header.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-main',
  imports: [
    NbLayoutModule,
    NbIconModule,
    NbButtonModule,
    NbThemeModule,
    CommonModule,
    NbChatModule,
    ChatComponent,
    HeaderComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  constructor(private auth: AuthService) {}

  get isAuthenticated() {
    return this.auth.isAuthenticated();
  }
}
