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
import { User } from '../../interfaces/user.interface';
import { ApiService } from '../../services/api/api.service';

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
  selectedUser: User | null = null;
  users: User[] = [
    {
      id: '1',
      name: 'Carla Espinosa',
      username: 'dorothy123',
      email: 'asdf@gmail.com',
    },
    { id: '1', name: 'Bob Kelso', username: 'lex5', email: 'asdf@gmail.com' },
    {
      id: '1',
      name: 'Janitor',
      username: 'xx_cool_kid_xx',
      email: 'asdf@gmail.com',
    },
    { id: '1', name: 'Perry Cox', username: '1337', email: 'asdf@gmail.com' },
    {
      id: '1',
      name: 'Ben Sullivan',
      username: 'lil_moy',
      email: 'asdf@gmail.com',
    },
  ];

  constructor(
    private readonly apiService: ApiService,
    private readonly chatService: ChatService
  ) {
    this.apiService.getUserChats().subscribe({
      next: (response) => {
        console.log('Chat created:', response);
      },
      error: (err) => {
        console.error('Create chat error:', err);
      },
    });
  }

  onClick(user: User) {
    this.chatService.updateUser(user);
    this.selectedUser = user;
  }
}
