export interface AdvertCreator {
  id: number | null;
  firstname: string;
  lastname: string;
  address: string;
  city: string;
  longitude: string;
  latitude: string;
  thumbnail: string;
  slug: string;
  adverts: Advert[];
}

export interface Image {
  id: number;
  advert_id: number;
  thumbnail: string;
}

export interface Advert {
  id: number | null;
  slug: string;
  title: string;
  content: string;
  price: number | null;
  user_id: number | null;
  tag_id: number | null;
  created_at: number | null;
  advert_creator: AdvertCreator;
  images: Image[];
  favorited_by: Favourite[];
}

//! PAS LE USER LOGGE MAIS CELUI EN BDD 
export interface User {
  id: number;
  firstname: string;
  lastname: string;
  description: string | null;
  city: string;
  thumbnail: string;
  banner: string;
  slug: string;
  created_at: string;
  liked: Publication[];
  posts: Publication[];
  adverts: Advert[];
}

export interface Post {
  id: number;
  slug: string;
  content: string;
  thumbnail: string;
  reply_to: number;
  user_id: number;
}

export interface Favourite {
  id: number;
  advert_id: number;
  user_id: number;
}

export interface Tag {
  id: number;
  name: string;
}

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
