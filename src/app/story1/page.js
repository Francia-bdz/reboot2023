"use client";

import Scene from "../components/Scene/Scene";
import Choices from "../components/Choices/Choices";
import styles from "./story1.module.scss";

import data from "../../data/story1.json";
import BtnNext from "../components/BtnNext/BtnNext";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [currentScene, setCurrentScene] = useState(0);
  const [selectedResponse, setSelecteResponse] = useState(null);
  const [showChoices, setShowChoices] = useState(true);
  const [isBtnShown, setIsBtnShown] = useState(false);
  const changeScene = () => {
    if (currentScene < data.story.length - 1) {
      setShowChoices(true);
      setCurrentScene(currentScene + 1);
      setSelecteResponse(null);
      if (data.story[currentScene + 1].choices) {
        setIsBtnShown(false);
      } else {
        setIsBtnShown(true);
      }
    } else {
      router.push("/story2");
    }
  };
  const handleChoiceClick = (response) => {
    setSelecteResponse(response);
    setShowChoices(false);
    setIsBtnShown(true);
    console.log(response);
  };

  return (
    <div className={styles.storyContainer}>
      <Scene scene={data.story[currentScene]} response={selectedResponse} />
      {data.story[currentScene].choices && showChoices && (
        <Choices
          choices={data.story[currentScene].choices}
          handleChoiceClick={handleChoiceClick}
        />
      )}
      <BtnNext shown={isBtnShown} onClick={() => changeScene()} />
    </div>
  );
}
