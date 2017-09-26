//snake.js

/** @class Snake
 * The snake in a Snake game
 */
export default class Snake {
  constructor(x, y, segments) {
    this.body = [];
    for(var i = 0; i < segments; i++) {
      this.body.push({
        x: x - i,
        y: y
      });
    }
    this.direction = 'right';
  }
  checkForConsumption(food) {

  }
  update() {
    //Didd we eat food?
    //Did we eat ourselves?
    //Do we need to grow?
    //Did we hit a wall?
  }
  render(ctx) {
    body.forEach(function(segments) {
      ctx.save();
      ctx.fillStyle = 'green';
      ctx.fillRect(
        segment.x,
        segment.y,
        1,
        1
      );
      ctx.restore();
    })
  }
}
