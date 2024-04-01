import { Image } from 'react-native'
import Matter from 'matter-js'

import { styles } from './styles'

import Player from '../../assets/images/shark.png'

const Shark = props => {
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y

  const xBody = props.body.position.x - widthBody / 2
  const yBody = props.body.position.y - heightBody / 2

  return (
    <Image
      source={Player}
      style={
        styles({
          widthBody,
          heightBody,
          xBody,
          yBody,
        }).shark
      }
    />
  )
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (world, pos, size) => {
  const initialFish = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    { label: 'Shark' ,isStatic: false }
  )

  Matter.World.add(world, [initialFish])

  return {
    body: initialFish,
    pos,
    renderer: <Shark />
  }
}
