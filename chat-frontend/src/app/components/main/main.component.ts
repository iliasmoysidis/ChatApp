import { Component } from '@angular/core';
import {
  NbButtonModule,
  NbLayoutModule,
  NbIconModule,
  NbThemeModule,
  NbChatModule,
  NbTabsetModule,
  NbCardModule,
} from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { ChatComponent } from '../chat/chat.component';
import { HeaderComponent } from '../header/header.component';
import { AuthService } from '../../services/auth.service';
import { TabsComponent } from '../tabs/tabs.component';

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
    NbTabsetModule,
    NbCardModule,
    TabsComponent,
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
