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

  constructor(private readonly chatService: ChatService) {}

  onClick(user: User) {
    this.chatService.updateUser(user);
    this.selectedUser = user;
  }
}
