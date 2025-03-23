import { Category } from './category';
import { User } from './user';

export interface Note {
  id: string;
  title: string;
  content: string;
  category: Category;
  // user: User;
  userId: string; //assosiates this with the user 
  // user: string; //this is another test
}