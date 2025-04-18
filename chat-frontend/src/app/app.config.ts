import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { includeBearerTokenInterceptor } from 'keycloak-angular';
import { routes } from './app.routes';
import { provideKeycloakAngular } from './keycloak.config';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
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

export const appConfig: ApplicationConfig = {
  providers: [
    provideKeycloakAngular(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([includeBearerTokenInterceptor])),
    importProvidersFrom(
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
