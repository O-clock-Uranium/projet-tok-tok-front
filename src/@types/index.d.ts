export interface AdvertCreator {
  id: number;
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
  id: number;
  slug: string;
  title: string;
  content: string;
  price: number;
  user_id: number;
  tag_id: number;
  created_at: number;
  advert_creator: AdvertCreator;
  images: Image[];
}

// Pour le profil
export interface User {
  id: number;
  firstname: string;
  lastname: string;
  description: string | null;
  city: string;
  thumbnail: string;
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
  expéditeur: string;
  destinataire: string;
  content: string;
  room_id?: number;
}

export interface ContactUser {
  id: number;
  user_one_info: {
    id: number;
    firstname: string;
    lastname: string;
    thumbnail: string;
  };
}

export interface Flash {
  type: 'success' | 'error';
  children: React.ReactNode;
  duration?: number;
}
