import { Image } from 'react-native'
import Matter from 'matter-js'
import Land from "../../assets/images/Land.png";
import LandTop from "../../assets/images/Land-top.png";

import { styles } from './styles'

const Floor = props => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y

  const xBody = props.body.position.x - widthBody / 2
  const yBody = props.body.position.y - heightBody / 2

  return (
    <Image
    source={props.isTop ? LandTop : Land}
      style={
        styles({
          widthBody,
          heightBody,
          xBody,
          yBody,
        }).floor
      }
    />
  )
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (world, pos, size , isTop = false) => {
  const initialFloor = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    { label: 'Floor', isStatic: true }
  )

  Matter.World.add(world, [initialFloor])

  return {
    body: initialFloor,
    pos,
    isTop,
    renderer: <Floor />
  }
}
