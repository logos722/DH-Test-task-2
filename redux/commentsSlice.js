
import { createSlice } from '@reduxjs/toolkit';

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: [],
  },
  reducers: {
    setComments: (state, action) => {
      state.comments = action.payload;
    },
  },
});

export const { setComments } = commentsSlice.actions;

export const fetchComments = (postId) => async (dispatch) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    const data = await response.json();

    dispatch(setComments(data));
  } catch (error) {
    console.error('Error fetching comments:', error);
  }
};

export default commentsSlice.reducer;
