import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Chat } from '../../interfaces/chat.interface';
import { ApiService } from '../api/api.service';
import { User } from '../../interfaces/user.interface';
import { AuthService } from '../auth/auth.service';
import { SocketService } from '../socket/socket.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private chatSource = new BehaviorSubject<Chat | null>(null);
  currentChat$ = this.chatSource.asObservable();

  private chatsSource = new BehaviorSubject<Chat[]>([]);
  chats$ = this.chatsSource.asObservable();

  constructor(
    private readonly apiService: ApiService,
    private readonly authService: AuthService,
    private readonly socketService: SocketService
  ) {
    this.getUserChats();
  }

  private getUserChats() {
    this.apiService.getUserChats().subscribe({
      next: (response) => {
        this.chatsSource.next(response.chatrooms);
      },
      error: (err) => {
        console.error('Fetching user chats error:', err);
      },
    });
  }

  createChat(chatMembers: User[]) {
    if (chatMembers.length > 0) {
      const participantEmails = chatMembers.map((member) => member.email);
      participantEmails.push(this.authService.decodedToken().email);
      const uniqueEmails = [...new Set(participantEmails)];
      this.apiService.createChat(uniqueEmails).subscribe({
        next: (response) => {
          this.getUserChats();
          console.log('Chat created:', response);
        },
        error: (err) => {
          console.error('Create chat error:', err);
        },
      });
    }
  }

  public deleteChat(chat: Chat) {
    this.apiService.deleteChat(chat.id).subscribe({
      next: () => {
        console.log('Chat deleted successfully');
        this.getUserChats();
      },
      error: (err) => {
        console.error('Error deleting chat:', err);
      },
    });
  }

  updateChat(chat: Chat) {
    this.chatSource.next(chat);
    if (chat && chat.id) {
      this.socketService.joinChatroom(chat.id);
    }
  }

  get chat(): Chat | null {
    return this.chatSource.value;
  }

  get chats(): Chat[] {
    return this.chatsSource.value;
  }
}
