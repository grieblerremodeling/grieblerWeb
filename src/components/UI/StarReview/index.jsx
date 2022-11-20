import React, { useState } from "react";
import styles from "./styles.module.scss";
import { FaStar } from "react-icons/fa";

const StarReview = ({ rating }) => {
  return (
    <div className={styles.container}>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index}>
            <input type="radio" name="rating" value={ratingValue} />
            <FaStar
              size={20}
              color={ratingValue <= rating ? "#fcad26" : "#e4e5e9"}
              className={styles.star}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarReview;
