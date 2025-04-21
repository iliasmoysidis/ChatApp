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
import { ApiService } from '../../services/api/api.service';
import { NewChatComponent } from '../new-chat/new-chat.component';

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
    NewChatComponent,
  ],
  templateUrl: './available-chats.component.html',
  styleUrl: './available-chats.component.css',
})
export class AvailableChatsComponent {
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
  filteredUsers$: Observable<User[]> = of([]);
  @ViewChild('autoInput') input!: ElementRef<HTMLInputElement>;

  constructor(
    private readonly chatService: ChatService,
    private readonly apiService: ApiService
  ) {}

  ngOnInit() {}

  onClick(user: User) {
    this.chatService.updateUser(user);
    this.selectedUser = user;
  }

  onChange() {
    const inputValue = this.input.nativeElement.value;
    if (inputValue.length !== 0) {
      this.apiService.filterUsers(inputValue).subscribe({
        next: (response) => {
          this.filteredUsers$ = of(response.users);
        },
        error: (err) => {
          console.error('Error fetching users:', err);
        },
      });
    } else {
      this.filteredUsers$ = of([]);
    }
  }

  onSelectionChange($event: any) {
    console.log($event);
  }
}
