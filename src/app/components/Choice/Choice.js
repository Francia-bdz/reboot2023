import styles from "./choice.module.scss";

export default function Choice({ choice, onClick, show }) {
  return (
    <div className={`${styles.choice} ${show ? "" : styles.hide}`}>
      <h5 onClick={onClick}>{choice.proposition}</h5>
    </div>
  );
}
