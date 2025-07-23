/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { PAGE_SIZE } from '../constants/constants';

const useFetchPosts = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true);

  const getPosts = async pageNumber => {
    try {
      const URL = `https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=${PAGE_SIZE}`;
      console.log("@@@ url:", URL);

      const response = await fetch(URL);

      const result = await response.json();

      if (result.length > 0) {
        setData(prev => [...prev, ...result]);
        setPage(prev => prev + 1);
      } else {
        setHasMoreData(false);
      }
    } catch (er) {
      console.log('@@@ er:', er);
    }
    setLoadingMore(false);

    return [];
  };

  useEffect(() => {
    getPosts(page);
  }, []);

  return { page, data, loadingMore, hasMoreData, getPosts };
};

export default useFetchPosts;
