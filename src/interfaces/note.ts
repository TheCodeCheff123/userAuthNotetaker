import { Category } from './category';

export interface Note {
  id: string;
  title: string;
  content: string;
  category: Category;
}