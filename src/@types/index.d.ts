export interface AdvertCreator {
  id: number;
  firstname: string;
  lastname: string;
  address: string;
  city: string;
  longitude: number;
  latitude: number;
  thumbnail: string;
  slug: string;
}

export interface Advert {
  id: number;
  slug: string;
  title: string;
  content: string;
  price: number;
  user_id: number;
  tag_id: number;
  created_at: number;
  advert_creator: AdvertCreator;
  images: [];
}

export interface User {
  id: number;
  firstname: string;
  lastname: string;
  description: string;
  adress: string;
  localization: string;
  thumbnail: string;
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
