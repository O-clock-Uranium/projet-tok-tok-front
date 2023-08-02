import {
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';
import { Advert } from '../../@types';

import axiosInstance from '../../utils/axios';

interface AdvertsState {
  advert: Advert;
  list: Advert[];
  favourites: Advert[];
  userAdverts: Advert[];
  favourite: boolean;
  isLoading: boolean;
  error: string;
}

export const initialState: AdvertsState = {
  advert: {
    id: null,
    slug: '',
    title: '',
    content: '',
    price: null,
    user_id: null,
    tag_id: null,
    created_at: null,
    advert_creator: {
      id: null,
      firstname: '',
      lastname: '',
      address: '',
      city: '',
      longitude: '',
      latitude: '',
      thumbnail: '',
      slug: '',
      adverts: [],
    },
    images: [],
    favorited_by: [],
  },
  list: [],
  favourites: [],
  userAdverts: [],
  favourite: false,
  isLoading: false,
  error: '',
};

export const setLoading = createAction<boolean>('adverts/setLoading');

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAdverts',
  async () => {
    try {
      const { data } = await axiosInstance.get<Advert[]>('/adverts');
      return data as Advert[];
    } catch (error: any) {
      throw new Error(error.message.data.error);
    }
  }
);

export const fetchUserAdverts = createAsyncThunk(
  'adverts/fetchUserAdverts',
  async (id: number | undefined) => {
    try {
      const { data } = await axiosInstance.get<Advert[]>(
        `/profile/${id}/adverts`
      );
      return data as Advert[];
    } catch (error: any) {
      throw new Error(error.message.data.error);
    }
  }
);

export const addAdvert = createAsyncThunk(
  'adverts/addAdvert',
  async (formData: FormData) => {
    try {
      const { data } = await axiosInstance.post('/adverts', formData);
      return data as Advert[];
    } catch (error: any) {
      throw new Error(error.message.data.error);
    }
  }
);

export const delAdvert = createAsyncThunk(
  'adverts/delAdvert',
  async (id: number) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { data } = await axiosInstance.delete(`/adverts/${id}`);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error.response.data.error);
    }
  }
);

export const editAdvert = createAsyncThunk(
  'adverts/editAdvert',
  async ({ id, formData }: { id: number; formData: FormData }) => {
    try {
      // const objData = Object.fromEntries(formData);
      console.log(id);
      const { data } = await axiosInstance.patch(`/adverts/${id}`, formData);
      return data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error.response.data.error);
    }
  }
);

export const addFavourite = createAsyncThunk(
  'adverts/addFavourite',
  async (id: number) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { data } = await axiosInstance.post(`/favourites/${id}`);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error.response.data.error);
    }
  }
);

export const delFavourite = createAsyncThunk(
  'adverts/delFavourite',
  async (id: number) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { data } = await axiosInstance.delete(`/favourites/${id}`);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error.response.data.error);
    }
  }
);

export const fetchFavourites = createAsyncThunk(
  'adverts/fetchFavourites',
  async () => {
    const { data } = await axiosInstance.get('/favourites');
    return data as Advert[];
  }
);

const advertsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setLoading, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(fetchAdverts.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchAdverts.fulfilled, (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchFavourites.fulfilled, (state, action) => {
      state.favourites = action.payload;
    })
    .addCase(addAdvert.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(addAdvert.fulfilled, (state) => {
      state.isLoading = false;
    })
    .addCase(delAdvert.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(delAdvert.fulfilled, (state) => {
      state.isLoading = false;
    })
    .addCase(delAdvert.rejected, (state, action) => {
      state.error = action.error.message;
    })
    .addCase(editAdvert.fulfilled, (state, action) => {
      state.isLoading = false;
      state.advert.title = action.payload.title;
      state.advert.content = action.payload.content;
      state.advert.price = action.payload.price;
    })
    .addCase(addFavourite.fulfilled, (state) => {
      // state.like = true;
    })
    .addCase(delFavourite.fulfilled, (state) => {
      // state.like = false;
    })
    .addCase(fetchUserAdverts.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchUserAdverts.fulfilled, (state, action) => {
      state.userAdverts = action.payload;
      state.isLoading = false;
    });
});

export default advertsReducer;
