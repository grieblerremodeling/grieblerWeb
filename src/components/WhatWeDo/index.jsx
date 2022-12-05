import styles from "./styles.module.scss";

import { BsGearWide, BsFillHouseFill, BsTools } from "react-icons/bs";
import { BiCabinet } from "react-icons/bi";
import { IoIosConstruct } from "react-icons/io";
import { MdAutorenew } from "react-icons/md";
import { ImPaintFormat } from "react-icons/im";

export default function WhatWeDo() {
  return (
    <section className={styles.WhatWeDo}>
      <h2>
        <strong>What</strong> We Do?
      </h2>

      <ul>
        <li>
          <MdAutorenew color="#febd4b" size={45} className={styles.icon} />
          <h1>General remodeling and Additions.</h1>
        </li>
        <li>
          <BsFillHouseFill color="#febd4b" size={45} className={styles.icon} />
          <h1>All about residential and commercial renovation.</h1>
        </li>
        <li>
          <IoIosConstruct color="#febd4b" size={45} className={styles.icon} />
          <h1>Deck, porch and so forth.</h1>
        </li>
        <li>
          <BiCabinet color="#febd4b" size={45} className={styles.icon} />
          <h1>Custom cabinets.</h1>
        </li>
        <li>
          <ImPaintFormat color="#febd4b" size={45} className={styles.icon} />
          <h1>Interior and exterior painting.</h1>
        </li>
        <li>
          <BsTools color="#febd4b" size={45} className={styles.icon} />
          <h1>Finish carpentry.</h1>
        </li>
      </ul>
    </section>
  );
}
