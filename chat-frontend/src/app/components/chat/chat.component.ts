import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NbChatModule } from '@nebular/theme';

@Component({
  selector: 'app-chat',
  imports: [NbChatModule, CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
})
export class ChatComponent {
  messages: any[] = [];

  sendMessage(event: any) {}
}
