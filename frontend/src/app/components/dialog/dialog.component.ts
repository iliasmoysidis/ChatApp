import { Component } from '@angular/core';
import { NbCardModule, NbChatModule } from '@nebular/theme';
import { ChatService } from '../../services/chat/chat.service';
import { CommonModule } from '@angular/common';
import { Chat } from '../../interfaces/chat.interface';
import { ApiService } from '../../services/api/api.service';
import { filter, Subscription, switchMap } from 'rxjs';
import { SocketService } from '../../services/socket/socket.service';
import { MessageService } from '../../services/message/message.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-dialog',
  imports: [NbChatModule, NbCardModule, CommonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
})
export class DialogComponent {
  private subscriptions = new Subscription();
  messages: any[] = [];
  chat: Chat | null = null;
  email: string = '';

  constructor(
    private chatService: ChatService,
    private apiService: ApiService,
    private socketService: SocketService,
    public messageService: MessageService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.subscriptions.add(
      this.chatService.currentChat$
        .pipe(
          filter((chat) => !!chat),
          switchMap((chat) => {
            this.chat = chat;
            this.messageService.title = chat.name;
            return this.apiService.getMessages(chat.id);
          })
        )
        .subscribe((messages) => {
          this.messageService.messages = messages.map((m) => ({
            ...m,
            reply:
              this.authService.decodedTokenValue.email == m.user.email
                ? false
                : true,
            date: new Date(m.date),
          }));
        })
    );

    this.subscriptions.add(
      this.socketService.message$.subscribe((message) => {
        this.messageService.messages.push({
          ...message,
          reply:
            this.authService.decodedTokenValue.email == message.user.email
              ? false
              : true,
          date: new Date(message.date),
        });
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this.socketService.cleanup();
  }

  sendMessage(event: any) {
    if (this.chat != null && this.chat.id != null) {
      this.apiService.sendMessage(this.chat.id, event.message).subscribe();
    }
  }
}
