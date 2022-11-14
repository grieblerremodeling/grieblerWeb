import Link from "next/link";
import styles from "./styles.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.content}>
        <ul>
          <li>
            <Link href="/projects">
              <h1> Projects</h1>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <h1> Contact</h1>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
