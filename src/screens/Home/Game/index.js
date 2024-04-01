import { useRef, useState } from "react";
import { GameEngine } from "react-native-game-engine";

import { styles } from "./styles";

import { Start } from "./Start";
import { GameOver } from "./GameOver";
import { Physics } from "../../../utils/physics";

import entities from "../../../entities";
import { Point } from "./Point";

const Game = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [currPoints, setCurrPoints] = useState(0);
  const gameEngineRef = useRef();

  const handlebackToStart = () => {
    setIsRunning(false);
    setIsGameOver(false);
    setCurrPoints(0);

  };

  const handleOnStartGame = () => {
    setIsRunning(true);
    setIsGameOver(false);
    setCurrPoints(0);

  };

  const handleOnGameOver = () => {
    setIsRunning(false);
    setIsGameOver(true);
  };

  const handleOnEvent = (event) => {
    // eslint-disable-next-line default-case
    switch (event.type) {
      case "game_over":
        handleOnGameOver();
        break;
      case "add-point":
        setCurrPoints(currPoints + 1);
        break;
    }
  };

  if (!isRunning && !isGameOver) {
    return <Start handleOnStartGame={handleOnStartGame} />;
  }
  if (!isRunning && isGameOver) {
    return <GameOver handlebackToStart={handlebackToStart} 
     currPoints = {currPoints} />;
  }

  return (
    <>
      <Point point={currPoints} />

      <GameEngine
        systems={[Physics]}
        ref={gameEngineRef}
        running={isRunning}
        entities={entities()}
        onEvent={handleOnEvent}
        style={styles.engineContainer}
      />
    </>
  );
};

export { Game };
