import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbListModule,
  NbUserModule,
} from '@nebular/theme';
import { ChatService } from '../../services/chat/chat.service';
import { ApiService } from '../../services/api/api.service';
import { Chat } from '../../interfaces/chat.interface';

@Component({
  selector: 'app-chats',
  imports: [
    CommonModule,
    NbCardModule,
    NbListModule,
    NbUserModule,
    NbIconModule,
    NbInputModule,
  ],
  templateUrl: './chats.component.html',
  styleUrl: './chats.component.css',
})
export class ChatsComponent {
  selectedChat: Chat | null = null;
  chats: Chat[] = [];

  constructor(
    private readonly apiService: ApiService,
    private readonly chatService: ChatService
  ) {
    this.apiService.getUserChats().subscribe({
      next: (response) => {
        this.chats = response.chats;
        console.log('User chats:', this.chats);
      },
      error: (err) => {
        console.error('Fetching user chats error:', err);
      },
    });
  }

  onClick(chat: Chat) {
    this.chatService.updateChat(chat);
    this.selectedChat = chat;
  }
}
