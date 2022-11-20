import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { setupAPIClient } from "../../pages/api/apiClient";
import { FaRegUserCircle } from "react-icons/fa";
import StarReview from "../UI/StarReview";

export default function Review() {
  const [userReview, setReview] = useState([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    async function getReview() {
      const api = setupAPIClient();
      const response = await api.get(
        "/api/controllers/review/GetCommentController"
      );
      setReview(response.data.result);
    }
    getReview();
  }, [setReview]);

  const ToggleMode = () => {
    setActive(!active);
  };

  function handleReview() {
    if (active === false) {
      return (
        <>
          {userReview.slice(0, 3).map((item, index) => (
            <div key={item.id} className={styles.containerReview}>
              <FaRegUserCircle color="#fff" size={30} />
              <div className={styles.contentReview}>
                <div className={styles.user}>
                  <h1>{item.name}</h1>
                  <StarReview rating={item.stars} />
                </div>

                <h2>{item.description}</h2>
              </div>
            </div>
          ))}
          {userReview.length > 3 && (
            <button onClick={ToggleMode}>See More</button>
          )}
        </>
      );
    } else {
      return (
        <>
          {userReview.map((item, index) => (
            <div key={item.id} className={styles.containerReview}>
              <FaRegUserCircle color="#fff" size={30} />
              <div className={styles.contentReview}>
                <div className={styles.user}>
                  <h1>{item.name}</h1>
                  <StarReview rating={item.stars} />
                </div>

                <h2>{item.description}</h2>
              </div>
            </div>
          ))}
          <button onClick={ToggleMode}>See less</button>
        </>
      );
    }
  }

  return (
    <section className={styles.Review} id="Review">
      {userReview.length !== 0 && (
        <>
          <h2>Review</h2>

          {handleReview()}
        </>
      )}
    </section>
  );
}
