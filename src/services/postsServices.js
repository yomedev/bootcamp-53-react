import axios from "axios";

axios.defaults.baseURL = "https://newsapi.org/v2/";
axios.defaults.params = {
  apiKey: "8cb01996c0d34dbebd5fe5c1bf4080cf",
};

export const getPosts = async (params) => {
  const { data } = await axios.get("everything", {
    params: {
      pageSize: 9,
      q: params?.search || "bitcoin",
      page: params?.page,
    },
  });

  return data;
};

export const getSingePostService = async (query) => {
  const { data } = await axios.get("everything", {
    params: {
      q: query,
      searchIn: "title",
      pageSize: 1,
    },
  });
  return data.articles[0];
};
