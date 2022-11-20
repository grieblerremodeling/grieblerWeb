import axios from "axios";
import { parseCookies } from "nookies";
import { signOut } from "../../contexts/AuthContext";
import { AuthTokenError } from "../api/errors/AuthTokenError";

export function setupAPIClient(ctx = undefined) {
  let cookies = parseCookies(ctx);

  const api = axios.create({
    baseURL: "postgres://wuhhmmzfvworya:5b6eed8be8f8f2cc4bc9863020c804d7bad06d2e2e5259ac5a0a2a6c191e6480@ec2-54-163-34-107.compute-1.amazonaws.com:5432/d66tni5dlpc44l",
    headers: {
      Authorization: `Bearer ${cookies["@nextauth.token"]}`,
    },
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response?.status === 401) {
        if (typeof window !== undefined) {
          signOut();
        } else {
          return Promise.reject(new AuthTokenError());
        }
      }

      return Promise.reject(error);
    }
  );

  return api;
}
