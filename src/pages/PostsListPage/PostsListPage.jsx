import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { Button } from "../../components/Button";

import { PostsItem } from "../../components/Posts";
import { PostsLoader } from "../../components/Posts";
import { PostsSearch } from "../../components/Posts";
import { PostsError } from "../../components/Posts";
import { useDispatch, useSelector } from "react-redux";
import { getPostsThunk } from "../../redux/posts/postsThunk";

const fetchStatus = {
  Idle: "idle",
  Loading: "loading",
  Success: "success",
  Error: "error",
};

export const PostsListPage = () => {
  const {items: posts, status} = useSelector((state) => state.posts)

  const dispatch = useDispatch()

  const [searchParams, setSearchParams] = useSearchParams();
  // const search = searchParams.get("query");
  const page = searchParams.get("page");
  
  const params = Object.fromEntries([...searchParams]);

  useEffect(() => {
    dispatch(getPostsThunk())
  }, [dispatch]);

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
            {posts.data?.map((post) => (
              <PostsItem key={post.id} post={post} />
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
