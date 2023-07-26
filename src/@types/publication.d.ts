export interface Publication {
  id: number | null;
  content: string | null;
  thumbnail: string | null;
  user_id: number | null;
  created_at: number | null;
  reply_to: number | null;
  post_creator: Creator | null;
  users_liked: Likes[] | null;
  replies: Reply[] | null;
}

export interface Creator {
  id: number | null;
  firstname: string | null;
  lastname: string | null;
  address: string | null;
  thumbnail: string | null;
}

export interface Likes {
  user: User[];
}

export interface User {
  id: number | null;
  firstname: string | null;
  lastname: string | null;
  description: string | null;
  address: string | null;
  city: string | null;
  longitude: string | null;
  latitude: string | null;
  email: string | null;
  password: string | null;
  thumbnail: string | null;
  slug: string | null;
}

export interface Reply {
  publication: Publication;
}
