import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  NbAutocompleteModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbListModule,
  NbUserModule,
} from '@nebular/theme';
import { ChatService } from '../../services/chat/chat.service';
import { User } from '../../interfaces/user.interface';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-available-chats',
  imports: [
    NbCardModule,
    NbListModule,
    NbUserModule,
    NbIconModule,
    CommonModule,
    NbInputModule,
    NbAutocompleteModule,
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
  newChat: boolean = false;
  filteredOptions$: Observable<string[]> = of([]);
  @ViewChild('autoInput') input!: ElementRef<HTMLInputElement>;

  constructor(private chatService: ChatService) {}

  onClick(user: User) {
    this.chatService.updateUser(user);
    this.selectedUser = user;
  }

  createNewChat() {
    this.newChat = true;
  }

  closeNewChat() {
    this.newChat = false;
  }

  onChange() {}

  onSelectionChange($event: any) {}
}
