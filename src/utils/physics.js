import { Dimensions } from 'react-native'
import Matter from 'matter-js'
import { getPipeSizePosPair } from './ramdom'
const windowWidth = Dimensions.get('window').width
export const Physics = (entities, { touches, time, dispatch }) => {
  let engine = entities.physics.engine

  touches
    .filter(t => t.type === 'press')
    .forEach(t => {
      Matter.Body.setVelocity(entities.Fish.body, {
        x: 0,
        y: -4
      })
      Matter.Body.setVelocity(entities.Shark.body, {
        x: 0,
        y: -4
      })
    })

    for (let index = 0; index < 2; index++) {
      if (
        entities[`ObstacleTop${index + 1}`].body.bounds.max.x <=
          entities.Fish.body.bounds.min.x &&
        !entities[`ObstacleTop${index + 1}`].point
      ) {
        // set the point to true so that we don't add a point every frame
        entities[`ObstacleTop${index + 1}`].point = true;
        // add a point to the score
        dispatch({ type: "add-point" });
      }
  
      // if the pipe is out of the screen, move it to the right
      if (entities[`ObstacleTop${index + 1}`].body.bounds.max.x <= 0) {
        // reset the pipe position
        const pipeSizePos = getPipeSizePosPair(windowWidth * 0.9);
        Matter.Body.setPosition(entities[`ObstacleTop${index + 1}`].body, {
          x: pipeSizePos.pipeTop.pos.x,
          y: pipeSizePos.pipeTop.pos.y,
        });
        Matter.Body.setPosition(entities[`ObstacleBottom${index + 1}`].body, {
          x: pipeSizePos.pipeBottom.pos.x,
          y: pipeSizePos.pipeBottom.pos.y,
        });
        // reset the point
        entities[`ObstacleTop${index + 1}`].point = false;
      }
  
      // move the top and bottom pipes 3 pixels to the left every time the function is called
      Matter.Body.translate(entities[`ObstacleTop${index + 1}`].body, {
        x: -3,
        y: 0,
      });
      Matter.Body.translate(entities[`ObstacleBottom${index + 1}`].body, {
        x: -3,
        y: 0,
      });
    }

  Matter.Engine.update(engine, time.delta)

  Matter.Events.on(engine, 'collisionStart', () => {
    dispatch({ type: 'game_over' })
  })

  return entities
}
