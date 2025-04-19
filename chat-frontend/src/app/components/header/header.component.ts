import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NbButtonModule, NbIconModule } from '@nebular/theme';
import Keycloak from 'keycloak-js';
import { AuthService } from '../../services/auth/auth.service';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-header',
  imports: [CommonModule, NbButtonModule, NbIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(
    private readonly keycloak: Keycloak,
    private auth: AuthService,
    private socket: Socket
  ) {}

  get isAuthenticated() {
    return this.auth.isAuthenticated();
  }

  connectSocket(token: string) {
    this.socket.ioSocket.auth = { token: token };
    this.socket.ioSocket.connect();
  }

  disconnectSocket() {
    this.socket.disconnect();
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
