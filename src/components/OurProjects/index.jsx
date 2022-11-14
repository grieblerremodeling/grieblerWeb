import Link from "next/link";
import { comparation } from "../../utils/array";
import { OnHoverImage } from "../UI/onHoverImage";
import styles from "./styles.module.scss";

export default function OurProjects() {
  return (
    <section className={styles.ourProjects}>
      <h2>Our Projects</h2>

      <div className={styles.projects}>
        {comparation.slice(0, 3).map((item, index) => (
          <OnHoverImage
            key={index}
            image={item.image[0]}
            hoveredImage={item.image[1]}
            title={item.title}
            alt={item.title}
          />
        ))}
      </div>

      <button>
        <Link href="/projects">
          <h1>See More</h1>
        </Link>
      </button>
    </section>
  );
}
