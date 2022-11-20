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

      <h2>Our specialization</h2>

      <ul>
        <li>
          <BsHouseFill size={35} color="#febd4b" />
          <h1>architecture</h1>
        </li>
        <li>
          <GiPaintRoller size={35} color="#febd4b" />
          <h1>interiors</h1>
        </li>
        <li>
          <MdDesignServices size={35} color="#febd4b" />
          <h1>design</h1>
        </li>
      </ul>
    </section>
  );
}
