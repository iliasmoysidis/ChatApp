import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../interfaces/user.interface';
import { Chat } from '../../interfaces/chat.interface';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private chatSource = new BehaviorSubject<Chat | null>(null);
  currentChat$ = this.chatSource.asObservable();

  updateChat(chat: Chat) {
    this.chatSource.next(chat);
  }
}
