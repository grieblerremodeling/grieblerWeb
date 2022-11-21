import styles from "./styles.module.scss";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { MdLogin } from "react-icons/md";

export default function Header() {
  const [active, setActive] = useState(false);

  const ToggleMode = () => {
    setActive(!active);
  };

  return (
    <header className={active ? styles.containerActive : styles.container}>
      <div
        className={active ? styles.iconActive : styles.icon}
        onClick={ToggleMode}
      >
        <div className={styles.menuBurguer}></div>
      </div>
      <div className={active ? styles.menuOpen : styles.menuClose}>
        <ul>
          <li>
            <Link href="/">
              <Image src="/logo.svg" height={200} width={200} alt="logo" />
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <h3>Contact</h3>
            </Link>
          </li>
          <li>
            <Link href="/#Review">
              <h3>Review</h3>
            </Link>
          </li>
          <li>
            <Link href="/#AboutUs">
              <h3>About Us</h3>
            </Link>
          </li>

          <li>
            <Link href="/projects">
              <h3>Our Projects</h3>
            </Link>
          </li>
          <li>
            <Link href="/signIn">
              <MdLogin size={25} color="#fff" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
