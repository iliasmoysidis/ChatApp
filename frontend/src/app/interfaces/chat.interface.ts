import { User } from './user.interface';

export interface Chat {
  id: string;
  chatName: string;
  users: User[];
}
