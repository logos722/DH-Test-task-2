
import { createSlice } from '@reduxjs/toolkit';

const paginationSlice = createSlice({
  name: 'pagination',
  initialState: {
    currentPage: 1,
  },
  reducers: {
    changePage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { changePage } = paginationSlice.actions;

export default paginationSlice.reducer;
