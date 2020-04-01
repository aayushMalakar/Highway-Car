class Game {
  constructor() {
    this.runAnimation;
    this.obstacles = [];
    this.obstacleCounter = 0;
    this.obstacleGenerationMinTime = 370;
    this.obstacleGenerationMaxTime = 450;
    this.maxObstacle = 0;
    this.prevObstacleRespawnPoint;
    this.background = new Background();
    this.background.init();
  }

  init = () => {
    this.car = new Car(this.background);
    this.car.init();
    this.score = new Score();
    this.score.init();
    this.obstacles = [];
    this.menu = new Menu(this.background);
    this.menu.init();
    this.menu.blink();
    window.addEventListener('keydown', this.gameEvent);
  };

  gameEvent = event => {
    if (event.keyCode === KEY_F) {
      this.resetGame();
      window.removeEventListener('keydown', this.gameEvent);
    }
  };

  resetGame = () => {
    while (this.background.road.firstChild) {
      this.background.road.removeChild(this.background.road.lastChild);
    }

    while (this.score.scoreBoard.firstChild) {
      this.score.scoreBoard.removeChild(this.score.scoreBoard.lastChild);
    }

    this.init();
    this.menu.stopBlinking();
    this.runAnimation = requestAnimationFrame(this.startGame);
  };

  startGame = () => {
    this.car.updatePosition();
    if (this.obstacleCounter % 100 === 0 && this.maxObstacle <= 6) {
      const obstacle = new Obstacle(this.background);
      obstacle.init();
      this.obstacles.push(obstacle);
      this.maxObstacle++;
    }

    for (let count = 0; count < this.obstacles.length; count++) {
      this.obstacles[count].move();

      if (this.obstacles[count].y > this.background.height) {
        this.prevObstacleRespawnPoint = this.obstacles[count].reSpawn(
          this.prevObstacleRespawnPoint
        );
      }

      if (
        collision(
          this.car.y,
          this.car.x,
          this.car.width,
          this.car.height,
          this.obstacles[count].y,
          this.obstacles[count].x,
          this.obstacles[count].width,
          this.obstacles[count].height
        )
      ) {
        this.endGame();

        cancelAnimationFrame(this.runAnimation);
        return;
      }
    }

    if (
      collision(
        this.car.y,
        this.car.x,
        this.car.width,
        this.car.height,
        0,
        0,
        4,
        600
      ) ||
      collision(
        this.car.y,
        this.car.x,
        this.car.width,
        this.car.height,
        0,
        240 - 4,
        1,
        600
      )
    ) {
      this.endGame();
      cancelAnimationFrame(this.runAnimation);
      return;
    }

    this.obstacleCounter++;
    this.background.move(this.car.gear);
    this.score.updateScore(this.car.gear);

    this.runAnimation = requestAnimationFrame(this.startGame);
  };

  endGame = () => {
    this.car.remove();
    this.score.updateHighScore();
    window.addEventListener('keydown', this.gameEvent);
    this.menu.init();
    this.menu.blink();
  };
}

const game = new Game();
game.init();
