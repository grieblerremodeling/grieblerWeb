import Head from "next/head";
import { FaPhone, FaInstagram } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { IoMail, IoLocation } from "react-icons/io5";
import Link from "next/link";

import styles from "./styles.module.scss";

export default function Contact() {
  return (
    <>
      <Head>
        <title> CONTACT US - Griebler Remodeling </title>
      </Head>
      <main>
        <article>
          <section className={styles.content}>
            <h1> Contact Us</h1>
            <div className={styles.goBack}>
              <Link href="/">
                <FiArrowLeft size={28} color="#fff" />
              </Link>
            </div>

            <div className={styles.card}>
              <h2>Get in touch</h2>

              <div className={styles.list}>
                <div>
                  <IoLocation size={30} color="#fff" />
                  <h4> Massachusetts </h4>
                </div>
                <Link href="tel:+1(978)596-7760" target="_blank">
                  <div>
                    <FaPhone size={30} color="#fff" />
                    <h3>(978) 596-7760</h3>
                  </div>
                </Link>
                <Link
                  href="mailto:grieblerremodeling@gmail.com"
                  target="_blank"
                >
                  <div>
                    <IoMail size={30} color="#fff" />
                    <h3>grieblerremodeling@gmail.com</h3>
                  </div>
                </Link>
                <Link
                  href="https://www.instagram.com/grieblerremodeling/"
                  target="_blank"
                >
                  <div>
                    <FaInstagram
                      size={30}
                      color="#fff"
                      className={styles.insta}
                    />
                    <h3>GrieblerRemodeling</h3>
                  </div>
                </Link>
              </div>
            </div>
            <div className={styles.detail}>
              <h1>© All rights reserved for Griebler Remodeling, 2022.</h1>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
