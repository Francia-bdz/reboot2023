import styles from "./choice.module.scss";

export default function Choice({ choice, onClick, show }) {
  // console.log(show);
  return (
    <div className={`${styles.choice} ${show ? "" : styles.hide}`}>
      <h1 onClick={onClick}>{choice.proposition}</h1>
    </div>
  );
}
