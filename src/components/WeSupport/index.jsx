import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function WeSupport() {
  return (
    <section className={styles.WeSupport}>
      <h2>We Support</h2>

      <Link href="https://www.seedoflove.net/" target="_blank">
        <Image src="/foudation.png" width={200} height={200} alt="seedoflove" />
      </Link>
    </section>
  );
}
