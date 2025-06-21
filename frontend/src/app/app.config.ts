import { environment } from '../environments/environment';
import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideKeycloakAngular } from './keycloak.config';
import { provideHttpClient } from '@angular/common/http';
import {
  NbThemeModule,
  NbLayoutModule,
  NbIconModule,
  NbCardModule,
  NbChatModule,
  NbSidebarModule,
} from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const socketConfig: SocketIoConfig = {
  url: environment.socket.url,
  options: { autoConnect: false },
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideKeycloakAngular(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(
      SocketIoModule.forRoot(socketConfig),
      NbThemeModule.forRoot({ name: 'default' }),
      NbIconModule,
      NbEvaIconsModule,
      NbLayoutModule,
      BrowserAnimationsModule,
      NbCardModule,
      NbChatModule,
      NbSidebarModule
    ),
  ],
};
