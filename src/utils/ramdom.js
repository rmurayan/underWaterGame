import { Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
console.log("windowHeight", windowHeight);
console.log("windowWidth", windowWidth);

export const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
export const getPipeSizePosPair = (addToPosX = 0) => {
  let yPosTop = -getRandom(110, windowHeight - 844);

  const pipeTop = {
    pos: { x: windowWidth + addToPosX, y: yPosTop + 200 },
    size: { height: 300, width: 200 },
  };
  const pipeBottom = {
    pos: { x: windowWidth + addToPosX, y: windowHeight - 100 + yPosTop },
    size: { height: 300, width: 200 },
  };

  return { pipeTop, pipeBottom };
};
