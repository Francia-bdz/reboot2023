import styles from "./scene.module.scss";
import Image from "next/image";

export default function Scene({ scene, response }) {
  return (
    <div className={styles.sceneContainer}>
      <div className={styles.character}>
        <Image
          src="/assets/images/old_man.png"
          width="300"
          height="200"
          objectFit="cover"
        />
      </div>
      <div className={styles.bubble}>
        {response ? <p>{response}</p> : <p>{scene.question}</p>}
      </div>
    </div>
  );
}
