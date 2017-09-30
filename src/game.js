// game.js

import Snake from './snake';
import Food from './food';

/** @class Game
  * Represents a snake game
  */
export default class Game {
  constructor() {
    this.snake = new Snake(50, 50, 16);
    this.food = [];
    this.over = false;
    // Create the back buffer canvas
    this.backBufferCanvas = document.createElement('canvas');
    this.backBufferCanvas.width = 100;
    this.backBufferCanvas.height = 100;
    this.backBufferContext = this.backBufferCanvas.getContext('2d');
    // Create the screen buffer canvas
    this.screenBufferCanvas = document.createElement('canvas');
    this.screenBufferCanvas.width = 100;
    this.screenBufferCanvas.height = 100;
    document.body.appendChild(this.screenBufferCanvas);
    this.screenBufferContext = this.screenBufferCanvas.getContext('2d');
    // Create HTML UI Elements
    var message = document.createElement('div');
    div.id = "message";
    message.innerText = "";
    document.body.appendChild(message);
    // Bind class functions
    this.gameOver = this.gameOver.bind(this);
    this.update = this.update.bind(this);
    this.render = this.render.bind(this);
    this.loop = this.loop.bind(this);
    // Start the game loop
    this.interval = setInterval(this.loop, 500);
  }

  /** @function gameOver
   *  Displays a game over message using the DOM.
   */
   function gameOver() {
     var message = document.getElementById("message");

   }

  /** @method update
    * Updates the game world.
    */
  update() {
    if(!this.over) {
      var position = this.snake.getPosition();
      if(position.x < 0 || position.x >= 100 ||
         position.y < 0 || position.y >= 100) {
           this.over = true;
           return;
      }
      if(Math.random() < 0.1){
        this.food.push(new Food(Math.floor(Math.random() * 100)));
      }

      this.food.forEach((food) => {
        food.update();
      });
      this.over = this.snake.update(this.input);
    }
    else {
    }
  }
  /** @method render
    * Renders the game world
    */
  render() {
    this.backBufferContext.fillStyle = '#ccc';
    this.backBufferContext.fillRect(0, 0, 100, 100);
    this.food.forEach((food) => {
      food.render(this.backBufferContext);
    })
    this.snake.render(this.backBufferContext);
    this.screenBufferContext.drawImage(this.backBufferCanvas,0,0);
  }
  loop() {
    this.update();
    this.render();
  }
}
