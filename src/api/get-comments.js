import { API_URL_COMMENTS as url } from "../constants";
import { api } from "./api-client";

export const getComments = async () => {
  const comments = api(url);
  return comments;
};
