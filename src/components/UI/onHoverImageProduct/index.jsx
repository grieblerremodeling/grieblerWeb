import { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

export const OnHoverImageProjects = ({ hoveredImage, image, alt, title }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={styles.container}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover ? (
        <>
          <Image
            src={image}
            width={1}
            height={1}
            unoptimized={true}
            alt={alt}
            priority
            className={styles.image}
          />

          <h1> after</h1>
        </>
      ) : (
        <>
          <Image
            src={hoveredImage}
            width={1}
            height={1}
            unoptimized={true}
            alt={alt}
            priority
            className={styles.hoveredImage}
          />

          <h3> {title}</h3>
          <h1> Before</h1>
        </>
      )}
    </div>
  );
};
