import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  NbCardModule,
  NbIconModule,
  NbListModule,
  NbUserModule,
} from '@nebular/theme';
import { ChatService } from '../../services/chat/chat.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-available-chats',
  imports: [
    NbCardModule,
    NbListModule,
    NbUserModule,
    NbIconModule,
    CommonModule,
  ],
  templateUrl: './available-chats.component.html',
  styleUrl: './available-chats.component.css',
})
export class AvailableChatsComponent {
  selectedUser: User | null = null;
  users: User[] = [
    { name: 'Carla Espinosa', title: 'Nurse' },
    { name: 'Bob Kelso', title: 'Doctor of Medicine' },
    { name: 'Janitor', title: 'Janitor' },
    { name: 'Perry Cox', title: 'Doctor of Medicine' },
    { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
  ];

  constructor(private chatService: ChatService) {}

  onClick(user: User) {
    this.chatService.updateUser(user);
    this.selectedUser = user;
  }
}
