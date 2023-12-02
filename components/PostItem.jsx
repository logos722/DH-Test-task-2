import React from 'react';
import Link from 'next/link';
import styles from '../styles/style.module.scss'

const PostItem = ({ post }) => {
  return (
    <div className={styles.post}>
      <h3 className={styles.post__header}>
        <Link href={`/post/${post.id}`}>
          {post.title}
        </Link>
      </h3>
      <div className={styles.post__descr}>
        {post.body}
      </div>
    </div>
  );
};

export default PostItem;
