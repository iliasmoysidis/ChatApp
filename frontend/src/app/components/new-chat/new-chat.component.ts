import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  NbAutocompleteModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbListModule,
  NbUserModule,
} from '@nebular/theme';
import { Observable, of } from 'rxjs';
import { User } from '../../interfaces/user.interface';
import { ApiService } from '../../services/api/api.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-new-chat',
  imports: [
    CommonModule,
    NbCardModule,
    NbAutocompleteModule,
    NbIconModule,
    NbListModule,
    NbUserModule,
    NbInputModule,
    NbButtonModule,
  ],
  templateUrl: './new-chat.component.html',
  styleUrl: './new-chat.component.css',
})
export class NewChatComponent {
  selectedUser: User | null = null;
  filteredUsers$: Observable<User[]> = of([]);
  chatMembers: User[] = [];
  @ViewChild('autoInput') input!: ElementRef<HTMLInputElement>;

  constructor(
    private readonly apiService: ApiService,
    private readonly authService: AuthService
  ) {}

  onClick(user: User) {
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
    const exists = this.chatMembers.some((user) => user.id === $event.id);
    if (!exists) {
      this.chatMembers.push($event);
    }
    this.filteredUsers$ = of([]);
    this.input.nativeElement.value = '';
  }

  clearChatMembers() {
    this.chatMembers = [];
  }

  removeChatMember(i: any) {
    this.chatMembers.splice(i, 1);
  }

  createChat() {
    if (this.chatMembers.length > 0) {
      const participantEmails = this.chatMembers.map((member) => member.email);
      participantEmails.push(this.authService.decodedToken().email);
      const uniqueEmails = [...new Set(participantEmails)];
      this.apiService.createChat(uniqueEmails).subscribe({
        next: (response) => {
          console.log('Chat created:', response);
        },
        error: (err) => {
          console.error('Create chat error:', err);
        },
      });

      this.clearChatMembers();
    }
  }
}
