import { Component } from '@angular/core';
import { NbCardModule, NbChatModule } from '@nebular/theme';
import { ChatService } from '../../services/chat/chat.service';
import { User } from '../../interfaces/user.interface';
import { CommonModule } from '@angular/common';
import { Chat } from '../../interfaces/chat.interface';

@Component({
  selector: 'app-dialog',
  imports: [NbChatModule, NbCardModule, CommonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
})
export class DialogComponent {
  messages: any[] = [];
  chat: Chat | null = null;

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.currentChat$.subscribe((chat) => {
      if (chat) {
        this.chat = chat;
      }
    });
  }

  sendMessage(event: any) {}
}
