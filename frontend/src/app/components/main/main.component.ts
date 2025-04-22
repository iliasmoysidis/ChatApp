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
import { DialogComponent } from '../dialog/dialog.component';
import { HeaderComponent } from '../header/header.component';
import { AuthService } from '../../services/auth/auth.service';
import { ChatsComponent } from '../chats/chats.component';
import { NewChatComponent } from '../new-chat/new-chat.component';

@Component({
  selector: 'app-main',
  imports: [
    NbLayoutModule,
    NbIconModule,
    NbButtonModule,
    NbThemeModule,
    CommonModule,
    NbChatModule,
    DialogComponent,
    HeaderComponent,
    NbTabsetModule,
    NbCardModule,
    ChatsComponent,
    NewChatComponent,
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
