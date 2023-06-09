import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

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

export const PostsListPage = () => {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState(fetchStatus.Idle);
  // const [search, setSearch] = useState("");
  // const [page, setPage] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("query");
  const page = searchParams.get("page");
  
  const params = Object.fromEntries([...searchParams]);

  const fetchPosts = useCallback(async () => {
    setStatus(fetchStatus.Loading);
    try {
      const postsResponse = await getPosts({ page, search });
      setPosts(postsResponse.articles);
      setStatus(fetchStatus.Success);
    } catch (err) {
      setStatus(fetchStatus.Error);
    }
  }, [page, search]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleChangePage = (page) => {
    setSearchParams({ ...params, page });
  };

  if (status === fetchStatus.Loading) {
    return <PostsLoader />;
  }

  return (
    <>
      <PostsSearch />

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

      <div className="pagination">
        <div className="btn-group my-2 mx-auto btn-group-lg">
          {[...Array(9)].map((_, index) => (
            <Button
              disabled={index + 1 === page}
              onClick={() => handleChangePage(index + 1)}
              key={index}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};
