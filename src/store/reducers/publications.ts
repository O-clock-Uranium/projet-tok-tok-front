import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import { Publication } from '../../@types/publication';
import axiosInstance from '../../utils/axios';
import axiosInstance2 from '../../utils/axios copy';

interface PublicationState {
  list: Publication[];
  isLoading: boolean;
  error: string;
  like: boolean;
}

export const initialState: PublicationState = {
  list: [],
  isLoading: false,
  error: '',
  like: false,
};

// eslint-disable-next-line import/prefer-default-export
export const fetchPosts = createAsyncThunk(
  'publications/fetchPosts',
  async () => {
    try {
      const { data } = await axiosInstance.get('/posts');
      return data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error.response.data.error);
    }
  }
);

export const addPost = createAsyncThunk(
  'publications/addPost',
  async (formData: FormData) => {
    try {
      const { data } = await axiosInstance.post('/posts', formData);
      return data as Publication[];

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error.response.data.error);
    }
  }
);

export const delPost = createAsyncThunk(
  'publications/delPost',
  async (id: number) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { data } = await axiosInstance.delete(`/posts/${id}`);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error.response.data.error);
    }
  }
);

export const addLike = createAsyncThunk(
  'publications/AddLike',
  async (id: number) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { data } = await axiosInstance.post(`/likes/${id}`);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error.response.data.error);
    }
  }
);

export const delLike = createAsyncThunk(
  'publications/delLike',
  async (id: number) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { data } = await axiosInstance.delete(`/likes/${id}`);
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${data.token}`;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error.response.data.error);
    }
  }
);

const publicationsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchPosts.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchPosts.fulfilled, (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    })
    .addCase(addPost.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(addPost.fulfilled, (state) => {
      state.isLoading = false;
    })
    .addCase(delPost.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(delPost.fulfilled, (state) => {
      state.isLoading = false;
    })
    .addCase(delPost.rejected, (state, action) => {
      state.error = action.error.message;
    })
    .addCase(addLike.fulfilled, (state) => {
      // state.like = true;
    })
    .addCase(delLike.fulfilled, (state) => {
      // state.like = false;
    });
});

export default publicationsReducer;
