export interface Publication {
  id: number;
  content: string;
  thumbnail: string;
  user_id: number;
  created_at: number;
  reply_to: number;
  post_creator: Creator;
  users_liked: Likes[];
  replies: Reply[];
}

export interface Creator {
  id: number;
  firstname: string;
  lastname: string;
  address: string;
  thumbnail: string;
  slug: string;
}

export interface Likes {
  id: number;
  firstname: string;
  lastname: string;
  description: string;
  address: string;
  city: string;
  thumbnail: string;
  slug: string;
}

export interface Reply {
  id: number;
  content: string;
  thumbnail: string;
  user_id: number;
  created_at: number;
  reply_to: number;
  post_creator: Creator;
}

// mini interface id pour créer un com
export interface CommentarySubset {
  id: number;
}
