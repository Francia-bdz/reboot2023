import styles from "./btnNext.module.scss";

export default function BtnNext({ onClick }) {
  return (
    <div className={styles.btnNext} onClick={onClick}>
      Suivant
    </div>
  );
}
