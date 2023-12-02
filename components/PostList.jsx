import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { fetchPosts } from '../redux/postSlice';
import { changePage } from '../redux/paginationSlice';
import PostItem from './PostItem';
import PostNotFound from './PostNotFound';
import ReactPaginate from 'react-paginate';
import styles from '../styles/style.module.scss'
import Image from 'next/image';
import arrow from '../icons/arrow.svg'
import arrowForw from '../icons/arrow_forward_ios.svg'
import arrowBack from '../icons/arrow_back_ios.svg'

const PostList = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const { posts, totalPages, currentPage } = useSelector((state) => state.posts);
  const firstUpdate = useRef(true);

  const handlePageChange = ({ selected }) => {
    const page = selected + 1;
    dispatch(changePage(page));
    router.push({ query: { ...router.query, page } });
  };

  const onSubmit = ({ title }) => {
    const page = 1;
    dispatch(fetchPosts({ title, page }));
    router.push({ query: { title_like: title, page } });
  };

  useEffect(() => {
    const page = 1;
    dispatch(fetchPosts({ title: '', page }));
    router.push({ query: { title_like: '', page } });
  }, []);

  useEffect(() => {
    if (firstUpdate.current) {
      return;
    } else {
      const page = parseInt(router.query.page, 10) || 1;
      const { title_like } = router.query;
      dispatch(fetchPosts({ title: title_like, page }));
    }

  }, [router.query.title_like, router.query.page]);

  return (
    <div>
      <form className={styles.searchForm} onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('title')} placeholder="Search by title" />
        <button className={styles.searchForm__btn} type="submit"><Image priority src={arrow} alt='ll' /></button>
      </form>
      <div >
        {posts.length ? posts.map((post) => (
          <PostItem key={post.id} post={post} />
        )) : <PostNotFound />}
      </div>
      {totalPages ? <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={10}
        marginPagesDisplayed={2}
        onPageChange={handlePageChange}
        containerClassName={styles.pagination}
        activeClassName={styles.activePage}
        nextClassName={styles.pagination__next}
        nextLabel={<Image src={arrowForw} alt='das' />}
        previousClassName={styles.pagination__previous}
        previousLabel={<Image src={arrowBack} alt='ads' />}
        initialPage={currentPage - 1}
      /> : null}
    </div>
  );
};

export default PostList;
