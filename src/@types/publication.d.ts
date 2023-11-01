export interface Publication {
  id: number;
  content: string | null;
  thumbnail: string | null;
  user_id: number | null;
  created_at: number | null;
  reply_to: number | null;
  post_creator: Creator | null;
  users_liked: Likes[] | null;
  replies: Reply[];
}

export interface Creator {
  id: number;
  firstname: string | null;
  lastname: string | null;
  address: string | null;
  thumbnail: string | null;
}

export interface Likes {
  id: number;
  firstname: string | null;
  lastname: string | null;
  description: string | null;
  address: string | null;
  city: string | null;
  thumbnail: string | null;
  slug: string | null;
}

export interface Reply {
  id: number;
  content: string | null;
  thumbnail: string | null;
  user_id: number | null;
  created_at: number | null;
  reply_to: number;
  post_creator: Creator | null;
}
