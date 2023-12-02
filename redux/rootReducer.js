import { combineReducers } from 'redux';
import postsReducer from './postSlice';
import paginationReducer from './paginationSlice';
import commentsReducer from './commentsSlice';

const rootReducer = combineReducers({
  posts: postsReducer,
  pagination: paginationReducer,
  comments: commentsReducer,
});

export default rootReducer;
