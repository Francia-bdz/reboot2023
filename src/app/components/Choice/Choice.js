import styles from "./style.module.scss";
export default function Choice({ choice, onClick }) {
  return (
    <div className={styles.choice}>
      <h1 onClick={onClick}>{choice.proposition}</h1>
    </div>
  );
}
