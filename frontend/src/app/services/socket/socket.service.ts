import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private currentRoom: string | null = null;
  private messageSubject = new Subject<any>();
  message$ = this.messageSubject.asObservable();

  constructor(private socket: Socket) {}

  ngOnDestroy(): void {
    this.cleanup();
  }

  joinChatroom(id: string): void {
    if (this.currentRoom) {
      this.leaveChatroom(this.currentRoom);
    }
    this.socket.emit('joinChatroom', id);
    this.currentRoom = id;

    this.socket.removeListener('newMessage');
    this.socket.on('newMessage', (message) => {
      this.messageSubject.next(message);
    });
  }

  leaveChatroom(id: string): void {
    this.socket.emit('leaveChatroom', id);

    if (this.currentRoom === id) {
      this.currentRoom = null;
      this.socket.removeListener('newMessage');
    }
  }

  cleanup() {
    if (this.currentRoom) {
      this.leaveChatroom(this.currentRoom);
    }
    this.socket.removeAllListeners();
  }
}
