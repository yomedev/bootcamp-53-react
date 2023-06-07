import { useEffect, useState } from "react";

import { toast } from "react-toastify";

import { Loader } from "../../components/Loader";
import { getSingePostService } from "../../services/postsServices";
import { useParams } from "react-router-dom";

export const SinglePostPage = () => {
  // const postId = "The Hidden Dangers of the Decentralized Web";

  const {postId} = useParams()
  console.log(postId);

  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getSingePostService(postId)
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
        <a href="/posts" className="btn btn-primary my-3">
          Back
        </a>
        <img
          src={post.urlToImage}
          alt={post.title}
          className="img-fluid mb-4"
          style={{ maxHeight: "600px", width: "100%", objectFit: "cover" }}
        />
        <h1 className="mb-5">{post.title}</h1>

        <div>{post.description}</div>

        {/* <div dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br/>') }} /> */}
      </>
    )
  );
};
