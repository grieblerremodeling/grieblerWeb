import Head from "next/head";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { setupAPIClient } from "../../pages/api/apiClient";
import { canSSRAuth } from "../../utils/canSSRAuth";
import styles from "./styles.module.scss";

export default function Admin({ clientList }) {
  const [clients, setClients] = useState(clientList);
  const [clientSelected, setClientSelected] = useState(0);

  const api = setupAPIClient();

  async function handleDelete(event) {
    if (clients.length === 0) {
      toast.error(" There are no comments to delete.");
      event.preventDefault();
      return;
    }

    console.log(clientList);

    event.preventDefault();

    try {
      await api.delete("/api/controllers/review/DeleteCommentController", {
        params: {
          id: clients[clientSelected]?.id,
        },
      });

      const response = await api.get(
        "/api/controllers/review/GetCommentController"
      );

      setClients(response.data.result);
      toast.success("Review Deleted Successfully.");
    } catch (error) {
      console.log(error);
      toast.error("Error deleting review.");
    }
  }

  function handleChangeClient(event) {
    setClientSelected(event.target.value);
  }

  useEffect(() => {
    return console.log(clientList);
  }, []);

  return (
    <>
      <Head>
        <title> ADMIN - Griebler Remodeling </title>
      </Head>

      <div>
        <main className={styles.container}>
          <h1> Delete Review From</h1>

          <form className={styles.form} onSubmit={handleDelete}>
            {clients.length !== 0 && (
              <select value={clientSelected} onChange={handleChangeClient}>
                {Array.from(clients)?.map((item, index) => {
                  return (
                    <option key={item.id} value={index}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            )}

            <button type="submit" className={styles.buttonDelete}>
              Delete
            </button>
          </form>
        </main>
      </div>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);

  const response = await apiClient.get(
    "/api/controllers/review/GetCommentController"
  );

  return {
    props: {
      clientList: response.data.result,
    },
  };
});
