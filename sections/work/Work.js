import { FiChevronRight } from "react-icons/fi";
import styles from "./Work.module.scss";
import CustomCarousel from "../../components/CustomSlider/CustomSlider";

function Work() {
  const openButtonLink = (e) => {
    window.open(e.target.getAttribute("href"), "_blank");
  };
  return (
    <div id="work" className={styles.work}>
      <h2 className={styles.workHeader}>Some of my Work</h2>
      <div className={styles.flexWrapper}>
        <div className={styles.carouselWrapper}>
          <CustomCarousel>
            <div>
              <img src="/NotizApp.png" alt="" className={styles.img} />
            </div>
            <div>
              <img src="/NotizAppGitHub.png" alt="" className={styles.img} />
            </div>
          </CustomCarousel>
        </div>
        <div className={styles.text}>
          <h2>ToDo List App</h2>
          <p>Here I tested to connect to mongodb with the nextjs framework</p>

          <div className={styles.links}>
            <a href="http://manuelpuchner.ddns.net:3000">
              View Demo <FiChevronRight className={styles.buttonIcon} />
            </a>
            <a href="https://github.com/ManuelPuchner/test-mern-app">
              Visit the GitHub repo{" "}
              <FiChevronRight className={styles.buttonIcon} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.flexWrapper}>
        <div className={styles.text}>
          <h2>Social media app</h2>
          <p>Here i tried to realize a login system.</p>
          <p>New Update: creating text posts, style to be added . . .</p>

          <div className={styles.links}>
            <a href="/projects/socialmediaapp">
              View Demo <FiChevronRight className={styles.buttonIcon} />
            </a>
            <a href="https://github.com/ManuelPuchner/SocialMediaApp">
              Visit the GitHub repo{" "}
              <FiChevronRight className={styles.buttonIcon} />
            </a>
          </div>
        </div>
        <div className={styles.carouselWrapper}>
          <CustomCarousel>
            <div>
              <img src="/Home.png" alt="" className={styles.img} />
            </div>
            <div>
              <img src="/Login.png" alt="" className={styles.img} />
            </div>
            <div>
              <img src="/Signup.png" alt="" className={styles.img} />
            </div>
            <div>
              <img src="/Dashboard.png" alt="" className={styles.img} />
            </div>
          </CustomCarousel>
        </div>
      </div>
    </div>
  );
}

export default Work;
