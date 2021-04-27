import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { CommentType } from '~/components/CommentList/interface';

export type CommentState = { comments: CommentType[] };

const commentSlice = createSlice({
  name: 'comment',
  initialState: { comments: [] } as CommentState,
  reducers: {
    commentAdded(state, action: PayloadAction<CommentType>) {
      state.comments.push(action.payload);
    },
    commentFetched(state, action: PayloadAction<CommentType[]>) {
      state.comments = action.payload;
    },
  },
});

const { commentAdded, commentFetched } = commentSlice.actions;

export const addCommentAction = createAsyncThunk('comments/add', async (formData: CommentType, { dispatch }) => {
  const response = await axios.post('/v1/comments', formData);

  dispatch(commentAdded(response.data));
});

export const fetchCommentAction = createAsyncThunk('comments/fetch', async (_, { dispatch }) => {
  const response = await axios.get('/v1/comments');

  dispatch(commentFetched(response.data as CommentType[]));
});

export default commentSlice.reducer;
