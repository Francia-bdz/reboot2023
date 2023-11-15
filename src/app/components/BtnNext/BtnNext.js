import styles from "./btnNext.module.scss";

export default function BtnNext({ onClick, shown }) {
  return (
    <div
      className={shown ? styles.btnNext : styles.btnNextHide}
      onClick={onClick}
    >
      Suivant
    </div>
  );
}
