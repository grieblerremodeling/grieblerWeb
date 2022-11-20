import { createContext, useState, useEffect } from "react";
import { setupAPIClient } from "../pages/api/apiClient";
import { destroyCookie, setCookie, parseCookies } from "nookies";
import Router from "next/router";
import { toast } from "react-toastify";

export const AuthContext = createContext({});
const api = setupAPIClient();

export function signOut() {
  try {
    destroyCookie(undefined, "@nextauth.token");
    Router.push("/");
  } catch {
    console.log("erro ao deslogar");
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const isAuthenticated = !!user;

  useEffect(() => {
    // pegar o token
    const { "@nextauth.token": token } = parseCookies();

    if (token) {
      api
        .get("/api/controllers/user/DetailUserController")
        .then((response) => {
          const { id, email } = response.data;

          setUser({
            id,
            email,
          });
        })
        .catch(() => {
          // se der erro, deslogamos.
          signOut();
        });
    }
  }, []);

  async function signIn({ email, password }) {
    try {
      const response = await api.post(
        "/api/controllers/user/AuthUserController",
        {
          email,
          password,
        }
      );

      const { id, token } = response.data;
      setCookie(undefined, "@nextauth.token", token, {
        maxAge: 60 * 60 * 24 * 30, // expirar em 1 mês
        path: "/",
      });

      setUser({
        id,
        email,
      });
      // Passar para as próximas requisições o token
      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      toast.success("Logado com sucesso!");

      Router.push("/admin");
    } catch (error) {
      toast.error("Erro ao acessar!");
      console.log("Erro ao acessar.", error);
    }
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
