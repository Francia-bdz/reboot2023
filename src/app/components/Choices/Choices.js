import Choice from "../Choice/Choice";
import styles from "./style.module.scss";
export default function Choices({ choices, onChoiceClick }) {
  return (
    <div>
      {choices.map((choice, index) => {
        return (
          <Choice
            choice={choice}
            key={index}
            onClick={() => onChoiceClick(choice.response)}
          />
        );
      })}
    </div>
  );
}
