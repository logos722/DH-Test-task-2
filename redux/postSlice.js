
import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    totalPages: 1,
    currentPage: 1,
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setPosts, setTotalPages, setCurrentPage } = postsSlice.actions;

export const fetchPosts = ({ title, page }) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10&title_like=${title}`
    );
    const data = await response.json();
    const totalCount = response.headers.get('X-Total-Count');

    dispatch(setPosts(data));
    dispatch(setTotalPages(Math.ceil(totalCount / 10)));
    dispatch(setCurrentPage(page));
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};

export default postsSlice.reducer;
