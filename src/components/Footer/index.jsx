import styles from "./styles.module.scss";
import { FaLocationArrow, FaPhone, FaInstagram } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>
          <h1>Griebler Remodeling</h1>
          <h2>We Can Help Your Dreams Become Reality.</h2>
        </li>
        <li>
          <h1>Contact</h1>

          <div>
            <FaLocationArrow size={18} color="#fff" />
            <h3> Massachusetts </h3>
          </div>
          <Link href="tel:+1(978)596-7760" target="_blank">
            <div>
              <FaPhone size={18} color="#fff" />
              <h3>(978) 596-7760</h3>
            </div>
          </Link>
          <Link href="mailto:grieblerremodeling@gmail.com" target="_blank">
            <div>
              <IoMail size={18} color="#fff" />
              <h3>grieblerremodeling@gmail.com</h3>
            </div>
          </Link>
          <Link
            href="https://www.instagram.com/grieblerremodeling/"
            target="_blank"
          >
            <div>
              <FaInstagram size={18} color="#fff" className={styles.insta} />
              <h3>GrieblerRemodeling</h3>
            </div>
          </Link>
        </li>
      </ul>
      <div className={styles.detail}>
        <h1>
          © All rights reserved for Griebler Remodeling, 2022.
          <strong>
            Developed by{" "}
            <Link href="mailto:marcelomafradev@gmail.com" target="_blank">
              Marcelo Mafra.
            </Link>
          </strong>
        </h1>
      </div>
    </footer>
  );
}
