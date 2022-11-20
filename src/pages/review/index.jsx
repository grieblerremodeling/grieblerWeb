import { useState } from "react";
import styles from "./styles.module.scss";
import { toast } from "react-toastify";
import Head from "next/head";
import { setupAPIClient } from "../api/apiClient";
import StarRating from "../../components/UI/StarRating";

import Header from "../../components/Header";

export default function Review() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(null);

  async function handleReview(event) {
    event.preventDefault();

    try {
      if (name === "" || rating === "" || description === "") {
        toast.error("Fill in all fields.");
        return;
      }

      const stars = rating.toString();

      const apiClient = setupAPIClient();
      await apiClient.post("/api/controllers/review/CreateCommentController", {
        name,
        stars,
        description,
      });

      toast.success("Review sent successfully!");
    } catch (error) {
      console.log(error);
      toast.error("error sending view!");
    }

    setName("");
    setDescription("");
  }

  const childToParent = (childdata) => {
    setRating(childdata);
  };

  return (
    <>
      <Head>
        <title> REVIEW - Griebler Remodeling </title>
      </Head>
      <div>
        <main className={styles.main}>
          <Header />

          <div className={styles.container}>
            <div className={styles.content}>
              <h1>
                <strong>Review</strong> - Griebler Remodeling
              </h1>
              <form className={styles.form} onSubmit={handleReview}>
                <input
                  type="text"
                  placeholder="Type your name"
                  className={styles.input}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <textarea
                  placeholder="Write a review_"
                  className={styles.input}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <StarRating childToParent={childToParent} />
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
