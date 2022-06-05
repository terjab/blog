import { API_URL_USERS as url } from "../constants";
import { api } from "./api-client";

export const getUsers = async () => {
  const users = api(url);
  return users;
};
