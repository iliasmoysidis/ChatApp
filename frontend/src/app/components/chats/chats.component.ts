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
import { Chat } from '../../interfaces/chat.interface';
import { MessageService } from '../../services/message/message.service';
import { Subscription } from 'rxjs';

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
  private subscriptions = new Subscription();
  selectedChat: Chat | null = null;
  chats: Chat[] = [];

  constructor(
    private readonly chatService: ChatService,
    private messageService: MessageService
  ) {
    this.subscriptions.add(
      this.chatService.currentChat$.subscribe((chat) => {
        this.selectedChat = chat;
      })
    );

    this.subscriptions.add(
      this.chatService.chats$.subscribe((chats) => {
        this.chats = chats;
      })
    );
  }

  onClick(chat: Chat) {
    this.chatService.updateChat(chat);
    this.selectedChat = chat;
  }

  deleteChat(chat: Chat) {
    this.chatService.deleteChat(chat);
    this.messageService.messages = [];
    this.messageService.title = 'Welcome to Chat App';
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}
