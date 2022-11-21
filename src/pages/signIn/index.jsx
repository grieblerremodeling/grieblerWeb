import React, { useContext, useState } from "react";
import styles from "./styles.module.scss";
import { toast } from "react-toastify";
import Head from "next/head";
import { AuthContext } from "../../contexts/AuthContext";
import { canSSRGuest } from "../../utils/canSSRGuest";

export default function Sign() {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(event) {
    event.preventDefault();

    if (email === "" || password === "") {
      toast.error("Fill in all fields.");
      return;
    }

    let data = {
      email,
      password,
    };

    await signIn(data);
  }

  return (
    <>
      <Head>
        <title> REVIEW - Griebler Remodeling </title>
      </Head>
      <div>
        <main className={styles.main}>
          <div className={styles.container}>
            <div className={styles.content}>
              <h1>
                <strong>Login</strong> - Griebler Remodeling
              </h1>
              <form className={styles.form} onSubmit={handleLogin}>
                <input
                  type="email"
                  placeholder="Type your email"
                  className={styles.input}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Type your password"
                  className={styles.input}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit" className={styles.buttonAdd}>
                  Send
                </button>
              </form>
              <div className={styles.detail}>
                <h1>© All rights reserved for Griebler Remodeling, 2022.</h1>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});

