import { Image } from "react-native";
import Matter from "matter-js";

import { styles } from "./styles";

import ANCHOR_GREY from "../../assets/images/obstacle-top.png";
import ANCHOR_GREY_INVERTED from "../../assets/images/obstacle-bottom.png";
import ANCHOR_GOLD  from "../../assets/images/obstacle2-top.png";
import ANCHOR_GOLD_INVERTED from "../../assets/images/obstacle2-bottom.png";

const Obstacle = (props) => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;
  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;

  return (
    <Image
      source={
        props.color === "grey"
          ? props.isTop
            ? ANCHOR_GREY
            : ANCHOR_GREY_INVERTED
          : props.isTop
          ? ANCHOR_GOLD
          : ANCHOR_GOLD_INVERTED
      }
      style={
        styles({
          widthBody,
          heightBody,
          xBody,
          yBody,
        }).obstacle
      }
    />
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (world, label, color, pos, size, isTop = false) => {
  const initialObstacle = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    { label, isStatic: true },
  );

  Matter.World.add(world, [initialObstacle]);

  return {
    body: initialObstacle,
    color,
    pos,
    isTop,
    renderer: <Obstacle />,
  };
};
