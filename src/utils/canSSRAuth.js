import { parseCookies, destroyCookie } from "nookies";

import { AuthTokenError } from "../pages/api/errors/AuthTokenError";

// Apenas usuários logados tem acesso.
export function canSSRAuth(fn) {
  return async (ctx) => {
    const cookies = parseCookies(ctx);
    const token = cookies["@nextauth.token"];

    if (!token) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    try {
      return await fn(ctx);
    } catch (err) {
      if (err instanceof AuthTokenError) {
        destroyCookie(ctx, "@nextauth.token");
        return {
          redirect: {
            destination: "/",
            permanent: false,
          },
        };
      }
    }
  };
}
