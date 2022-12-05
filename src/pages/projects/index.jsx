import Head from "next/head";
import Footer from "../../components/Footer";
import { comparation, finishProjects } from "../../utils/array";
import styles from "./styles.module.scss";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { OnHoverImageProjects } from "../../components/UI/onHoverImageProduct";
import { FiArrowLeft } from "react-icons/fi";
import Image from "next/image";
import { SliderConfig } from "../../components/Slider";
import { SwiperSlide } from "swiper/react";

import "video-react/dist/video-react.css";
import { Player } from "video-react";

export default function Projects() {
  const settings = {
    pagination: {
      clickable: true,
    },
    loop: true,
  };

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

            <h1>
              other <strong>finished</strong> projects
            </h1>

            <div className={styles.slider}>
              <SliderConfig settings={settings}>
                {finishProjects.map((item, key) => (
                  <SwiperSlide key={key}>
                    <div key={key} className={styles.cardItem}>
                      <Image
                        src={item.image}
                        width={1}
                        height={1}
                        unoptimized={true}
                        alt={item.description}
                        priority
                      />
                      <h1>{item.description}</h1>
                    </div>
                  </SwiperSlide>
                ))}
              </SliderConfig>
            </div>

            <h1>Videos</h1>
            <div className={styles.videos}>
              <div className={styles.video}>
                <Player>
                  <source src="/kitchenVideo.mp4" />
                </Player>
              </div>
              <div className={styles.video}>
                <Player muted>
                  <source src="/deckVideo.mp4" />
                </Player>
              </div>
              <div className={styles.video}>
                <Player muted>
                  <source src="/deckVideo2.mp4" />
                </Player>
              </div>
              <div className={styles.video}>
                <Player>
                  <source src="/bathroom.mp4" />
                </Player>
              </div>
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
                <Image
                  src="/qrcode.png"
                  width={200}
                  height={200}
                  alt="qrcode"
                />
              </Link>
            </div>
          </section>
        </article>

        <Footer />
      </main>
    </>
  );
}
