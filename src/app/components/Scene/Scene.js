import styles from "./style.module.scss";
export default function Scene({ scene, response }) {
  return (
    <div className={styles.sceneContainer}>
      <div className={styles.character}>//image du perso</div>
      <div className={styles.bubble}>
        {response ? <h1>{response}</h1> : <h1>{scene.question}</h1>}
        {/* {scene.question} */}
      </div>
    </div>
  );
}
