import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import styles from "./styles.module.scss";
import Image from "next/image";
import { images } from "../../utils/array";
import Link from "next/link";

export function SliderConfig({ settings, children }) {
  return (
    <div>
      <Swiper modules={[Navigation, Pagination, Autoplay]} {...settings}>
        {children}
      </Swiper>
    </div>
  );
}

export default function Slider() {
  const settings = {
    pagination: {
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  };

  return (
    <SliderConfig settings={settings}>
      {images.map((item, key) => (
        <SwiperSlide key={key}>
          <div key={key} className={styles.cardItem}>
            <div className={styles.description}>
              <h2>{item.description}</h2>
            </div>

            <div className={styles.button}>
              <Link href="mailto:grieblerremodeling@gmail.com" target="_blank">
                <button>GET QUOTE</button>
              </Link>
            </div>
            <div className={styles.img}>
              <Image
                src={item.image}
                width={250}
                height={250}
                unoptimized={true}
                alt={item.description}
                priority
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </SliderConfig>
  );
}
