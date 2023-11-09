import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import { Publication } from '../../@types/publication';
import axiosInstance from '../../utils/axios';

interface PublicationState {
  list: Publication[];
  isLoading: boolean;
  error?: string;
  like: boolean;
}

export const initialState: PublicationState = {
  list: [],
  isLoading: false,
  error: '',
  like: false,
};

export const fetchPosts = createAsyncThunk(
  'publications/fetchPosts',
  async () => {
    try {
      const { data } = await axiosInstance.get('/posts');
      return data as Publication[];
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
    } catch (error: any) {
      throw new Error(error.response.data.error);
    }
  }
);

export const delPost = createAsyncThunk(
  'publications/delPost',
  async (id: number) => {
    try {
      await axiosInstance.delete(`/posts/${id}`);
    } catch (error: any) {
      throw new Error(error.response.data.error);
    }
  }
);

export const addLike = createAsyncThunk(
  'publications/AddLike',
  async (id: number) => {
    try {
      await axiosInstance.post(`/likes/${id}`);
    } catch (error: any) {
      throw new Error(error.response.data.error);
    }
  }
);

export const delLike = createAsyncThunk(
  'publications/delLike',
  async (id: number) => {
    try {
      const { data } = await axiosInstance.delete(`/likes/${id}`);
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${data.token}`;
    } catch (error: any) {
      throw new Error(error.response.data.error);
    }
  }
);

const publicationsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchPosts.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    })
    .addCase(fetchPosts.fulfilled, (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchPosts.rejected, (state, action) => {
      state.error = action.error.message;
    })
    .addCase(addPost.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    })
    .addCase(addPost.fulfilled, (state) => {
      state.isLoading = false;
    })
    .addCase(delPost.pending, (state) => {
      state.isLoading = true;
      state.error = '';
    })
    .addCase(delPost.fulfilled, (state) => {
      state.isLoading = false;
    })
    .addCase(delPost.rejected, (state, action) => {
      state.error = action.error.message;
    });
});

export default publicationsReducer;
