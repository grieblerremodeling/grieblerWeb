import { BsHouseFill } from "react-icons/bs";
import { GiPaintRoller } from "react-icons/gi";
import { MdDesignServices } from "react-icons/md";

import styles from "./styles.module.scss";

export default function AboutUs() {
  return (
    <section className={styles.aboutUs} id="AboutUs">
      <h1>
        About <strong>Us</strong>
      </h1>

      <h2>
        Griebler Remodeling is a specialist remodeling company that has been
        servicing clients in the Northeast of the United States. We pride
        ourselves on having a complete team that can handle a wide variety of
        home renovation and home improvement projects. We have been building and
        remodeling for many years and we can do your project with intelligence,
        elegance, technology and the highest quality.
      </h2>
    </section>
  );
}
