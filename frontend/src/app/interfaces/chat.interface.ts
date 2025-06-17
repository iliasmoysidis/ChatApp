import { User } from './user.interface';

export interface Chat {
  id: string;
  name: string;
  users: User[];
}
