import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <h1>DEGROWTH</h1>
        <h2>2100 .</h2>
      </div>
      <Link className={styles.start} href="/story1">
        {" "}
        Démarrer l'histoire
      </Link>
    </main>
  );
}
