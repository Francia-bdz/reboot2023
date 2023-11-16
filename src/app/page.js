import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.background}>
        <img src="/homeGradient.png" className={styles.background_img2} />
        <img src="/homeVideo.gif" className={styles.background_img} />
      </div>
      <div className={styles.title}>
        <div className={styles.logo}>
          <img src="d_logo.png" alt="D" className={styles.logo_1} />
          <p className={styles.logo_2}>EGROWTH</p>
        </div>
        <div className={`${styles.logo} ${styles.blur_1}`}>
          <img src="d_logo.svg" alt="D" className={styles.logo_1} />
          <p className={styles.logo_2}>EGROWTH</p>
        </div>
        <div className={`${styles.logo} ${styles.blur_2}`}>
          <img src="d_logo.svg" alt="D" className={styles.logo_1} />
          <p className={styles.logo_2}>EGROWTH</p>
        </div>
        <div className={`${styles.logo} ${styles.blur_3}`}>
          <img src="d_logo.svg" alt="D" className={styles.logo_1} />
          <p className={styles.logo_2}>EGROWTH</p>
        </div>
        <div className={`${styles.logo} ${styles.blur_4}`}>
          <img src="d_logo.svg" alt="D" className={styles.logo_1} />
          <p className={styles.logo_2}>EGROWTH</p>
        </div>
      </div>
      <Link className={styles.start} href="/story1">
        {" "}
        Démarrer
        <img src="arrow.svg" alt="arrow" className={styles.arrow} />
      </Link>
    </main>
  );
}
