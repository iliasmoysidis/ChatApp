import { Component } from '@angular/core';
import { NbCardModule, NbChatModule } from '@nebular/theme';
import { ChatService } from '../../services/chat/chat.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-chat-window',
  imports: [NbChatModule, NbCardModule],
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.css',
})
export class ChatWindowComponent {
  messages: any[] = [];
  user: User | null = null;

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.currentUser$.subscribe((user) => {
      if (user) {
        this.user = user;
      }
    });
  }

  sendMessage(event: any) {}
}
