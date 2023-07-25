export interface Publication {
  id: number;
  content: string;
  thumbnail: string;
  user_id: number;
  created_at: number;
  reply_to: Publication[];
  post_creator: Creator[];
  users_liked: Likes[];
  replies: Replies[]; //! rappel un une interface qui rappelle publication[] ??
}

export interface Creator {
  id: number;
  firstname: string;
  lastname: string;
  address: string;
  thumbnail: string;
}

export interface Likes {
  user: User[];
}

export interface User {
  firstname: string;
  lastname: string;
  description: string | null;
  address: string;
  city: string;
  longitude: string;
  latitude: string;
  email: string;
  password: string;
  thumbnail: string | null;
  slug: string;
}

export interface Replies {
  publication: Publication[];
}
