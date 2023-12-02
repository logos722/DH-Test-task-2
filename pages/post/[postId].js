// pages/post/[postId].js
import { useRouter } from 'next/router';
import Head from 'next/head';
import CommentList from '../../components/CommentList';
import styles from '../../styles/style.module.scss'

const Post = () => {
  const router = useRouter();
  const { postId } = router.query;
  console.log(router)

  return (
    <div>
      <Head>
        <title>Post Comments</title>
        <meta name="description" content="Comments for a post" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.container}>
          
        <div className={styles.comments__header}>
        <h1>Post №{postId}</h1>
        <button type="button" onClick={() => router.back()}>Вернуться к постам</button>
        </div>
        <h2>Comments:</h2>
        <CommentList postId={postId} />          
        </div>
      </main>
    </div>
  );
};

export default Post;
