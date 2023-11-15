import Choice from "../Choice/Choice";
import styles from "./style.module.scss";
export default function Choices({ choices, handleChoiceClick }) {
  return (
    <div>
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
