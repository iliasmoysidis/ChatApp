import { Component } from '@angular/core';
import { NbCardModule, NbChatModule } from '@nebular/theme';
import { ChatService } from '../../services/chat/chat.service';
import { User } from '../../interfaces/user.interface';
import { CommonModule } from '@angular/common';
import { Chat } from '../../interfaces/chat.interface';
import { ApiService } from '../../services/api/api.service';
import { filter, switchMap } from 'rxjs';

@Component({
  selector: 'app-dialog',
  imports: [NbChatModule, NbCardModule, CommonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
})
export class DialogComponent {
  messages: any[] = [];
  chat: Chat | null = null;

  constructor(
    private chatService: ChatService,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.chatService.currentChat$
      .pipe(
        filter((chat) => !!chat),
        switchMap((chat) => {
          this.chat = chat;
          return this.apiService.getMessages(chat.id);
        })
      )
      .subscribe((messages) => {
        this.messages = messages.map((m) => ({
          ...m,
          date: new Date(m.date),
        }));
      });
  }

  sendMessage(event: any) {
    const newMessage = {
      message: event.message,
    };
    if (this.chat != null && this.chat.id != null) {
      this.apiService.sendMessage(this.chat.id, event.message);
    }
  }
}
