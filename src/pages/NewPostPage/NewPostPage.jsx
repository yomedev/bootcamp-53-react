import { useState } from "react";

import { toast } from "react-toastify";

import { Loader } from "../../components/Loader";
import { getPostInfo } from "./helpers";
import { createPostService } from "../../services/postsServices";
import { useDispatch, useSelector } from "react-redux";
import { createPostThunk } from "../../redux/posts/postsThunk";

const { title, content, author, urlToImage, publishedAt } = getPostInfo();

const initialState = {
  title,
  content,
  urlToImage,
  author,
  publishedAt,
};

export const NewPostPage = () => {

  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.posts.isLoading)
  const [form, setForm] = useState(() => getPostInfo());

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => setForm(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();

    const isEmpty = Object.values(form).some((item) => !item);
    if (isEmpty) {
      toast.error("Fill all required fields!");
      return;
    }
    dispatch(createPostThunk(form))
  };

  return (
    <>
      {isLoading && <Loader />}

      <form action="#" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="d-block form-label">
            <p>Post title</p>
            <input
              value={form.title}
              onChange={handleChange}
              type="text"
              name="title"
              className="form-control"
              placeholder="Post title ..."
            />
          </label>
        </div>

        <div className="mb-3">
          <label className="d-block form-label">
            <p>Post content</p>
            <textarea
              value={form.content}
              onChange={handleChange}
              className="form-control"
              name="content"
              rows="10"
              placeholder="Post content"
            />
          </label>
        </div>

        <div className="mb-3">
          <label className="d-block form-label">
            <p>Image url</p>
            <input
              type="text"
              name="urlToImage"
              value={form.urlToImage}
              onChange={handleChange}
              className="form-control"
              placeholder="https://example.com/samll_image.jpeg"
            />
          </label>

          {form.urlToImage && (
            <img
              src={form.urlToImage}
              className="img-thumbnail"
              alt=""
              style={{ height: "200px" }}
            />
          )}
        </div>


        <div className="d-flex mt-5">
          <button
            type="button"
            className="d-block btn btn-secondary me-4"
            onClick={handleReset}
          >
            Reset form
          </button>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};