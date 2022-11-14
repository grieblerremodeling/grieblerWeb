import styles from "./styles.module.scss";
import { FaLocationArrow, FaPhone, FaInstagram } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.container}>
      <ul>
        <Link href="/">
          <li>
            <AiFillHome size={23} color="#fff" />
            <h3>HOME</h3>
          </li>
        </Link>

        <div>
          <Link href="tel:+1(978)596-7760" target="_blank">
            <li>
              <FaPhone size={23} color="#fff" />
              <h3>(978) 596-7760</h3>
            </li>
          </Link>
          <Link href="mailto:grieblerremodeling@gmail.com" target="_blank">
            <li>
              <IoMail size={23} color="#fff" />
              <h3>grieblerremodeling@gmail.com</h3>
            </li>
          </Link>
          <Link
            href="https://www.instagram.com/grieblerremodeling/"
            target="_blank"
          >
            <li>
              <FaInstagram size={23} color="#fff" className={styles.insta} />
            </li>
          </Link>
        </div>
        <Link
          href="https://www.instagram.com/grieblerremodeling/"
          target="_blank"
        >
          <li className={styles.iconInstagram}>
            <FaInstagram size={23} color="#fff" className={styles.insta} />
          </li>
        </Link>
      </ul>
    </header>
  );
}
