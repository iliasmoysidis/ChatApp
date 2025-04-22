import { Component } from '@angular/core';
import { NbCardModule, NbChatModule } from '@nebular/theme';
import { ChatService } from '../../services/chat/chat.service';
import { User } from '../../interfaces/user.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog',
  imports: [NbChatModule, NbCardModule, CommonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
})
export class DialogComponent {
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
