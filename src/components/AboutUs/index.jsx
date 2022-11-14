import { BsHouseFill } from "react-icons/bs";
import { GiPaintRoller } from "react-icons/gi";
import { MdDesignServices } from "react-icons/md";

import styles from "./styles.module.scss";

export default function AboutUs() {
  return (
    <section className={styles.aboutUs}>
      <h1>
        About <strong>Us</strong>
      </h1>

      <h2>Our specialization</h2>

      <ul>
        <li>
          <BsHouseFill size={35} color="#5792d9" />
          <h1>architecture</h1>
        </li>
        <li>
          <GiPaintRoller size={35} color="#5792d9" />
          <h1>interiors</h1>
        </li>
        <li>
          <MdDesignServices size={35} color="#5792d9" />
          <h1>design</h1>
        </li>
      </ul>
    </section>
  );
}
