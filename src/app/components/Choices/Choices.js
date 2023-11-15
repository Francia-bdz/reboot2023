import Choice from "../Choice/Choice";
import styles from "./choices.module.scss";
export default function Choices({ choices, handleChoiceClick }) {
  return (
    <div className={styles.choicesContainer}>
      {choices.map((choice, index) => {
        return (
          <Choice
            choice={choice}
            key={index}
            onClick={() => handleChoiceClick(choice.response)}
          />
        );
      })}
    </div>
  );
}
