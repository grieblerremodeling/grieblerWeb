import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { comparation } from "../../utils/array";
import styles from "./styles.module.scss";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { OnHoverImageProjects } from "../../components/UI/onHoverImageProduct";

export default function Projects() {
  return (
    <>
      <Head>
        <title> PROJECTS - Griebler Remodeling</title>
      </Head>

      <main>
        <Header />

        <article>
          <section className={styles.container}>
            <h1>
              Our <strong>Projects</strong>
            </h1>

            <div className={styles.projects}>
              {comparation.map((item, index) => (
                <OnHoverImageProjects
                  key={index}
                  image={item.image[0]}
                  hoveredImage={item.image[1]}
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
            </div>
          </section>
        </article>

        <Footer />
      </main>
    </>
  );
}
