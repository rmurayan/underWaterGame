import { Dimensions } from 'react-native'
import Matter from 'matter-js'

import Fish from '../components/Fish'
import Floor from '../components/Floor'
import Obstacle from '../components/Obstacle'

import { getPipeSizePosPair } from '../utils/ramdom'
import Shark from '../components/Shark'

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width

const BOTTOM = 51

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  let engine = Matter.Engine.create({
    enableSleeping: false
  })

  let world = engine.world

  engine.gravity.y = 0.4

  const pipeSizePosA = getPipeSizePosPair()
  const pipeSizePosB = getPipeSizePosPair(windowWidth * 0.99)

  return {
    physics: { engine, world },
    Fish: Fish(world, { x: 100, y: 300 }, { height: 60, width: 60 }),
    Shark: Shark(world, { x: 60, y: 300 }, { height: 100, width: 100 }),

    ObstacleTop1: Obstacle(
      world,
      'ObstacleTop1',
      'gray',
      pipeSizePosA.pipeTop.pos,
      pipeSizePosA.pipeTop.size,
      true
    ),

    ObstacleBottom1: Obstacle(
      world,
      'ObstacleBottom1',
      'gray',
      pipeSizePosA.pipeBottom.pos,
      pipeSizePosA.pipeBottom.size,
      false
    ),

    ObstacleTop2: Obstacle(
      world,
      'ObstacleTop2',
      'gold',
      pipeSizePosB.pipeTop.pos,
      pipeSizePosB.pipeTop.size,
      true
    ),

    ObstacleBottom2: Obstacle(
      world,
      'ObstacleBottom2',
      'gold',
      pipeSizePosB.pipeBottom.pos,
      pipeSizePosB.pipeBottom.size,
      false
    ),

    Floor: Floor(
      world,
      { x: windowWidth / 2, y: windowHeight -60 },
      { height: BOTTOM + 100, width: windowWidth },
    ),
    FloorTop: Floor(
      world,
      { x: windowWidth / 2, y: 60 },
      { height: BOTTOM + 100, width: windowWidth }, 
      true
    )
  }
}
