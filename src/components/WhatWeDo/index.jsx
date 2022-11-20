import styles from "./styles.module.scss";

import { BsGearWide } from "react-icons/bs";
import { IoIosConstruct } from "react-icons/io";
import { FaLightbulb } from "react-icons/fa";

export default function WhatWeDo() {
  return (
    <section className={styles.WhatWeDo}>
      <h2>
        <strong>What</strong> We Do?
      </h2>

      <ul>
        <li>
          <FaLightbulb color="#febd4b" size={40} className={styles.icon} />
          <h1>renovation</h1>
          <h3>We will improve your structure or make it more modern!</h3>
        </li>
        <li>
          <IoIosConstruct color="#febd4b" size={40} className={styles.icon} />
          <h1>construction</h1>
          <h3>
            We will build your dream from scratch, with technology and quality.
          </h3>
        </li>
        <li>
          <BsGearWide color="#febd4b" size={40} className={styles.icon} />
          <h1>remodelation</h1>
          <h3>We can renovate existing structures, leaving it your way.</h3>
        </li>
      </ul>
    </section>
  );
}
