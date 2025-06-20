import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: any[] = [];
  title: string = 'Welcome to Chat App';

  constructor() {}
}
