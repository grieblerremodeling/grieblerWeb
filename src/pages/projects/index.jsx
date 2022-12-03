import Head from "next/head";
import Footer from "../../components/Footer";
import { comparation } from "../../utils/array";
import styles from "./styles.module.scss";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { OnHoverImageProjects } from "../../components/UI/onHoverImageProduct";
import { FiArrowLeft } from "react-icons/fi";
import Image from "next/image";

export default function Projects() {
  return (
    <>
      <Head>
        <title> PROJECTS - Griebler Remodeling</title>
      </Head>

      <main>
        <div className={styles.goBack}>
          <Link href="/">
            <FiArrowLeft size={28} color="#fff" />
          </Link>
        </div>

        <article>
          <section className={styles.container}>
            <h1>
              Our <strong>Projects</strong>
            </h1>

            <div className={styles.projects}>
              {comparation.map((item, index) => (
                <OnHoverImageProjects
                  key={index}
                  image={item.image[1]}
                  hoveredImage={item.image[0]}
                  title={item.title}
                  alt={item.title}
                />
              ))}
            </div>

            <div className={styles.seeMore}>
              <h2>see more on our instagram!</h2>
              <Link
                href="https://www.instagram.com/grieblerremodeling/"
                target="_blank"
              >
                <div>
                  <FaInstagram
                    size={18}
                    color="#fff"
                    className={styles.insta}
                  />
                  <h3>GrieblerRemodeling</h3>
                </div>
              </Link>
              <Link
                href="https://www.instagram.com/grieblerremodeling/"
                target="_blank"
              >
                <Image src="/qrcode.png" width={200} height={200} />
              </Link>
            </div>
          </section>
        </article>

        <Footer />
      </main>
    </>
  );
}
