import Head from "next/head";

import Layout from "../components/layout/layout.js";

import Background from "../components/background/Background.js";
import SocialsSidebar from "../components/socialsSidebar/SocialsSidebar.js";

import About from "../sections/about/About.js";
import Work from "../sections/work/Work.js";
import Notification from "../components/notification/Notification.js";

function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Manuel Puchner's portfolio" />
        <meta
          name="keywords"
          content="Manuel, Puchner, portfolio, Htl-leonding, personal, website"
        />
        <meta name="author" content="Manuel Puchner" />
        <meta name="publisher" content="Manuel Puchner" />
        <meta name="copyright" content="Manuel Puchner" />
        <title>Manuel Puchner | Portfolio</title>
      </Head>

      {/* fixid position stuff */}
      <Background />
      <SocialsSidebar />
      <Notification />

      {/* normal stuff */}
      <Layout>
        <About />
        <Work />
      </Layout>
    </>
  );
}

export default Home;
