import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  NbButtonModule,
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
    NbButtonModule,
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
    this.chatService.currentChat$.subscribe((chat) => {
      this.selectedChat = chat;
    });

    this.chatService.chats$.subscribe((chats) => {
      this.chats = chats;
    });
  }

  onClick(chat: Chat) {
    this.chatService.updateChat(chat);
    this.selectedChat = chat;
  }

  deleteChat(chat: Chat) {
    this.chatService.deleteChat(chat);
  }
}
