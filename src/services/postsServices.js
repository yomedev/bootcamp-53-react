import axios from "axios";

axios.defaults.baseURL = "https://newsapi.org/v2/";
axios.defaults.params = {
  pageSize: 9,
  apiKey: "8cb01996c0d34dbebd5fe5c1bf4080cf",
};

// const postsApi = axios.create({
//   baseURL: "https://newsapi.org/v2/",
//   params: {
//     pageSize: 9,
//     apiKey: "8cb01996c0d34dbebd5fe5c1bf4080cf",
//   },
// });

export const getPosts = async (params) => {
  const { data } = await axios.get("everything", {
    params: {
      q: params?.search ?? "bitcoin",
      page: params?.page,
    },
  });

  return data;
};
