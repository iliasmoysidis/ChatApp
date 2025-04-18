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
import { ChatWindowComponent } from '../chat-window/chat-window.component';
import { HeaderComponent } from '../header/header.component';
import { AuthService } from '../../services/auth/auth.service';
import { AvailableChatsComponent } from '../available-chats/available-chats.component';

@Component({
  selector: 'app-main',
  imports: [
    NbLayoutModule,
    NbIconModule,
    NbButtonModule,
    NbThemeModule,
    CommonModule,
    NbChatModule,
    ChatWindowComponent,
    HeaderComponent,
    NbTabsetModule,
    NbCardModule,
    AvailableChatsComponent,
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
