import { parseCookies } from "nookies";

// Pode ser acessadas apenas por visitantes;

export function canSSRGuest(fn) {
  return async (ctx) => {
    const cookies = parseCookies(ctx);

    //Se tiver logado, será redirecionado
    if (cookies["@nextauth.token"]) {
      return {
        redirect: {
          destination: "/admin",
          permanent: false,
        },
      };
    }
    return await fn(ctx);
  };
}
