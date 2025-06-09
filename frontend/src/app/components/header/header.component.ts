import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NbButtonModule, NbIconModule } from '@nebular/theme';
import Keycloak from 'keycloak-js';
import { AuthService } from '../../services/auth/auth.service';
import { computed } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule, NbButtonModule, NbIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  public name = '';
  constructor(
    private readonly keycloak: Keycloak,
    private authService: AuthService
  ) {}

  get isAuthenticated() {
    return this.authService.isAuthenticated();
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

  userName = computed(() => {
    const token = this.authService.decodedToken();
    if (token) {
      return `${token.given_name ?? ''} ${token.family_name ?? ''}`.trim();
    }
    return '';
  });
}
