import styles from "./style.module.scss";
export default function Scene({ scene, response }) {
  return (
    <div className={styles.sceneContainer}>
      <div className={styles.character}>//image du perso</div>
      <div className={styles.bubble}>
        {response ? response : scene.question}
        {scene.question}
      </div>
    </div>
  );
}
