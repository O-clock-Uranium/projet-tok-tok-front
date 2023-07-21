export interface Message {
  id: number;
  author: string;
  content: string;
}

export interface Flash {
  type: 'success' | 'error';
  children: React.ReactNode;
  duration?: number;
}
