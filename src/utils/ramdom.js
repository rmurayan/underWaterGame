import { Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;


export const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
export const getAnchorSizePosPair = (addToPosX = 0) => {
  let yPosTop = -getRandom(110, windowHeight - 844);

  const anchorTop = {
    pos: { x: windowWidth + addToPosX, y: yPosTop + 150 },
    size: { height: 250, width: 100 },
  };
  const anchorBottom = {
    pos: { x: windowWidth + addToPosX, y: windowHeight - 100 + yPosTop },
    size: { height: 250, width: 100 },
  };

  return { anchorTop, anchorBottom };
};
