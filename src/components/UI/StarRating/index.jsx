import React, { useState } from "react";
import styles from "./styles.module.scss";
import { FaStar } from "react-icons/fa";

const StarRating = ({ childToParent }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className={styles.container}>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => {
                setRating(ratingValue);
                childToParent(ratingValue);
              }}
            />
            <FaStar
              size={50}
              color={ratingValue <= (hover || rating) ? "#fcad26" : "#e4e5e9"}
              className={styles.star}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
