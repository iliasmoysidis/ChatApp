import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NbButtonModule, NbIconModule } from '@nebular/theme';
import Keycloak from 'keycloak-js';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, NbButtonModule, NbIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private readonly keycloak: Keycloak, private auth: AuthService) {}

  get isAuthenticated() {
    return this.auth.isAuthenticated();
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
