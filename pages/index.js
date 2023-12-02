import Head from 'next/head';
import PostList from '../components/PostList';
import styles from '../styles/style.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js JSONPlaceholder App</title>
        <meta name="description" content="Next.js app with JSONPlaceholder API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.container}>
        <h1 className={styles.header}>Приложенние для поиска постов</h1>
        <h2 className={styles.header__subheader}>Начните читать посты на любимые для вас темы уже сегодня!</h2>
        <PostList />
        </div>
      </main>
    </div>
  );
}
