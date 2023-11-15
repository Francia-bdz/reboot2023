"use client";

import Scene from "../components/Scene/Scene";
import Choices from "../components/Choices/Choices";
import styles from "./style.module.scss";

import data from "../../data/story1.json";
import BtnNext from "../components/BtnNext/BtnNext";
import { useState } from "react";

export default function page() {
  const [currentScene, setCurrentScene] = useState(0);

  return (
    <div>
      <Scene scene={data.story[currentScene]} />
      <Choices choices={data.story[currentScene].choices} />
      <BtnNext onClick={() => setCurrentScene(currentScene + 1)} />
    </div>
  );
}
