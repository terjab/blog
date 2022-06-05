import { API_URL_POSTS as url } from "../constants";
import { api } from "./api-client";

export const getPosts = async (page) => {
  const posts = api(page ? url + `?_page=${page}` : url);
  return posts;
};
