"use client";

import Scene from "../components/Scene/Scene";
import Choices from "../components/Choices/Choices";
import styles from "./style.module.scss";

import data from "../../data/story1.json";
import BtnNext from "../components/BtnNext/BtnNext";
import { useState } from "react";

export default function Home() {
  const [currentScene, setCurrentScene] = useState(0);
  const [selectedResponse, setSelecteResponse] = useState(null);
  const changeScene = () => {
    setCurrentScene(currentScene + 1);
    setSelecteResponse(null);
  };
  const handleChoiceClick = (response) => {
    setSelecteResponse(response);
  };

  return (
    <div>
      <Scene scene={data.story[currentScene]} response={selectedResponse} />
      {data.story[currentScene].choices && (
        <Choices
          choices={data.story[currentScene].choices}
          onChoiceClick={handleChoiceClick}
        />
      )}
      <BtnNext onClick={() => setCurrentScene(currentScene + 1)} />
    </div>
  );
}
