import Head from "next/head";

import Header from "../components/Header";
import Slider from "../components/Slider";
import AboutUs from "../components/AboutUs";
import OurProjects from "../components/OurProjects";
import WhatWeDo from "../components/WhatWeDo";
import Footer from "../components/Footer";
import WeSupport from "../components/WeSupport";
import Review from "../components/Review";

export default function Home() {
  return (
    <>
      <Head>
        <title>HOME - Griebler Remodeling</title>
      </Head>

      <main>
        <Header />
        <Slider />
        <article>
          <AboutUs name="test" />
          <WhatWeDo />
          <OurProjects />
          <Review />
          <WeSupport />
        </article>
        <Footer />
      </main>
    </>
  );
}
