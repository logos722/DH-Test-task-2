import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchComments } from '../redux/commentsSlice';
import styles from '../styles/style.module.scss'


const CommentList = ({ postId }) => {
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.comments);

  useEffect(() => {
    if (postId) {
      dispatch(fetchComments(postId));
    }
  }, [postId, dispatch]);

  return (
    <div>
      {comments.map((comment) => (
        <div className={styles.comments} key={comment.id}>
          <h4>Title: {comment.name}</h4>
          <div className={styles.comments__body}><span>Body:</span> {comment.body}</div>
          <div className={styles.comments__email}><span>Email:</span> {comment.email}</div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
