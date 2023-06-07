import { useCallback, useEffect, useRef, useState } from "react";

import { Button } from "../../components/Button";

import { PostsItem } from "../../components/Posts";
import { PostsLoader } from "../../components/Posts";
import { PostsSearch } from "../../components/Posts";
import { PostsError } from "../../components/Posts";
import { getPosts } from "../../services/postsServices";

const fetchStatus = {
  Idle: "idle",
  Loading: "loading",
  Success: "success",
  Error: "error",
};

const pageLimit = 9;

export const PostsListPage = () => {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState(fetchStatus.Idle);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const total = useRef(null);

  const fetchPosts = useCallback(async () => {
    setStatus(fetchStatus.Loading);
    try {
      const postsResponse = await getPosts({ page, search });
      if (page > 1) {
        setPosts((prev) => [...prev, ...postsResponse.articles]);
      } else {
        setPosts(postsResponse.articles);
      }
      setStatus(fetchStatus.Success);
      total.current = postsResponse.totalResults;
    } catch (err) {
      setStatus(fetchStatus.Error);
    }
  }, [page, search])


  useEffect(() => {
    fetchPosts();
  }, [page, search, fetchPosts]);

  const handleChangeSearch = (value) => {
    setSearch(value);
    setPage(1);
  };

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  if (status === fetchStatus.Loading) {
    return <PostsLoader />;
  }

  return (
    <>
      <PostsSearch onSubmit={handleChangeSearch} />

      {status === fetchStatus.Error ? (
        <PostsError />
      ) : (
        <div className="container-fluid g-0">
          <div className="row">
            {posts?.map((post) => (
              <PostsItem key={post.url} post={post} />
            ))}
          </div>
        </div>
      )}

      {status === fetchStatus.Loading ? (
        <PostsLoader />
      ) : (
        total.current > page * pageLimit && (
          <div className="btn-group my-2 mx-auto btn-group-lg d-flex justify-content-center w-25">
            <Button onClick={handleNextPage}>Load more</Button>
          </div>
        )
      )}
    </>
  );
};