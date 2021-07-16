import Image from "next/image";

import styles from "./About.module.scss";

function About() {
  return (
    <div id="about">
      <div className={styles.about}>
        <div className={styles.textWrapper}>
          <h1>Hi, I&apos;m Manuel</h1>
          <h2>Developer and Photographer</h2>
          <p>I&apos;m 15 years old and currently attending HTL-Leonding</p>
          <p>Currently, I&apos;m learning React and Next.js</p>
          <p>Constantly trying ro improve my coding skills . . .</p>
        </div>
        <div className={styles.pictureWrapper}>
          <Image
            src="/me.png"
            alt="me"
            layout="fill"
            className={styles.img}
          ></Image>
          {/* hier noch nen farbigen hintergrund hinzufügen */}
        </div>
      </div>
    </div>
  );
}

export default About;
