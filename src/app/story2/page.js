"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Scene from "../components/Scene/Scene";
import Choices from "../components/Choices/Choices";
import BtnNext from "../components/BtnNext/BtnNext";
import styles from "./story2.module.scss";
import data from "../../data/story2.json";

export default function Home() {
  const router = useRouter();

  const [currentScene, setCurrentScene] = useState(0);
  const [selectedResponse, setSelecteResponse] = useState(null);
  const [showChoices, setShowChoices] = useState(true);
  const [isBtnShown, setIsBtnShown] = useState(true);
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
      router.push("/");
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === " " && isBtnShown) {
      changeScene();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [changeScene]);

  return (
    <div
      className={styles.main}
      style={{
        backgroundImage: `url(${data.story[currentScene].img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={styles.storyContainer}>
        <Scene scene={data.story[currentScene]} response={selectedResponse} />

        {isBtnShown && (
          <div className={styles.spaceBarNext}>
            <p>
              {/* Appuyer sur <span>ESPACE</span> pour continuer ! */}
            </p>
          </div>
        )}
        <BtnNext shown={isBtnShown} onClick={() => changeScene()} />
      </div>
    </div>
  );
}
