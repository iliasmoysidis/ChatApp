import { Component } from '@angular/core';
import {
  NbButtonModule,
  NbIconModule,
  NbCardModule,
  NbInputModule,
  NbThemeModule,
  NbLayoutModule,
} from '@nebular/theme';

@Component({
  selector: 'app-login',
  imports: [
    NbCardModule,
    NbInputModule,
    NbIconModule,
    NbButtonModule,
    NbThemeModule,
    NbLayoutModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {}
