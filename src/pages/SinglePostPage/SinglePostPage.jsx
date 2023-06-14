import { useEffect, useState } from "react";

import { toast } from "react-toastify";

import { Loader } from "../../components/Loader";
import { getSinglePostService } from "../../services/postsServices";
import { Link, useLocation, useParams, Outlet } from "react-router-dom";

export const SinglePostPage = () => {
  const { postId } = useParams();
  console.log(postId);

  const location = useLocation()

  console.log(location.state);

  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getSinglePostService(postId)
      .then(setPost)
      .catch(() => {
        toast.error("Something went wrong!");
      })
      .finally(() => setIsLoading(false));
  }, [postId]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    post && (
      <>
        <Link to={location.state ?? '/posts'} className="btn btn-primary my-3">
          Back
        </Link>
        <img
          src={post.urlToImage}
          alt={post.title}
          className="img-fluid mb-4"
          style={{ maxHeight: "600px", width: "100%", objectFit: "cover" }}
        />
        <h1 className="mb-5">{post.title}</h1>

        <div>{post.description}</div>

        <Link to={`/posts/${postId}/comments`} state={location.state} className="btn btn-primary my-4">
          Vew post comments
        </Link>
        <Outlet />
      </>
    )
  );
};
