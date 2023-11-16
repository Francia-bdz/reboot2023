import styles from "./scene.module.scss";
export default function Scene({ scene, response }) {
  return (
    <div className={styles.sceneContainer}>
      <div className={styles.character}></div>
      <div className={styles.bubble}>
        {response ? <p>{response}</p> : <p>{scene.question}</p>}
      </div>
    </div>
  );
}
