import { API_URL_POSTS as url } from "../constants";
import { api } from "./api-client";

export const getPost = async (id) => {
  const posts = api(url + `/${id}`);
  return posts;
};
