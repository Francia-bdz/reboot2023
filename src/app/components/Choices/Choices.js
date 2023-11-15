import Choice from "../Choice/Choice";
import styles from "./choices.module.scss";
export default function Choices({ choices, handleChoiceClick, showChoices }) {
  return (
    <div className={styles.choicesContainer}>
      {choices.map((choice, index) => {
        return (
          <Choice
            choice={choice}
            key={index}
            show={showChoices}
            onClick={() => handleChoiceClick(choice.response)}
          />
        );
      })}
    </div>
  );
}
