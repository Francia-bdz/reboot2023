import styles from "./style.module.scss";
export default function Choice({ choice, onClick }) {
  return <h1 onClick={onClick}>{choice.proposition}</h1>;
}
