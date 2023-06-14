import axios from "axios";

// const postsApi = axios.create({
//   baseURL: "https://newsapi.org/v2/",
//   params: {
//     apiKey: "8cb01996c0d34dbebd5fe5c1bf4080cf",
//   },
// });

// export const getPosts = async (params) => {
//   const { data } = await postsApi.get("everything", {
//     params: {
//       pageSize: 9,
//       q: params?.search || "bitcoin",
//       page: params?.page,
//     },
//   });

//   return data;
// };

// export const getSingePostService = async (query) => {
//   const { data } = await postsApi.get("everything", {
//     params: {
//       q: query,
//       searchIn: "title",
//       pageSize: 1,
//     },
//   });
//   return data.articles[0];
// };

const postsApi = axios.create({
  baseURL: "https://642db3cc66a20ec9cea44565.mockapi.io/articles",
});

export const getPostsService = async () => {
  // throw new Error()
  const { data } = await postsApi.get("");

  return data;
};

export const getSinglePostService = async (id) => {
  const { data } = await postsApi.get(`${id}`);
  return data;
};

export const createPostService = async (body) => {
  const { data } = await postsApi.post("", body);
  console.log(data);
  return data;
};

export const deletePostService = async (id) => {
  const { data } = await postsApi.delete(`${id}`);
  return data;
};
