class Obstacle {
  constructor(parent) {
    this.parent = parent;
    this.width = 24;
    this.height = 53;
    this.x = 0;
    this.y = 0;
    this.obstaclePosition = [40, 120, 200];
    this.min = 0;
    this.max = 3;
    this.speed = 3;
    this.minImageSelector = 0;
    this.maxImageSeclector = obstacleSprites.length;
    this.img =
      obstacleSprites[Math.floor(Math.random() * this.maxImageSeclector)];
    this.minPositionOffset = 180;
    this.maxPositionOffset = 250;
  }

  init = () => {
    this.obstacle = document.createElement('div');
    this.obstacle.style.width = `${this.width}px`;
    this.obstacle.style.height = `${this.height}px`;
    this.x =
      this.obstaclePosition[Math.floor(Math.random() * this.max)] -
      this.width / 2;
    this.obstacle.style.position = 'absolute';
    this.obstacle.style.left = `${this.x}px`;
    this.obstacle.style.top = `${this.y}px`;
    this.obstacle.style.backgroundImage = `url("${this.img}")`;
    this.obstacle.style.backgroundSize = 'cover';
    this.obstacle.style.backgroundPositionX = 'center';
    this.obstacle.style.backgroundRepeat = 'no-repeat';
    this.obstacle.style.zIndex = '1000';
    this.parent.road.appendChild(this.obstacle);
  };

  move = () => {
    this.y += this.speed;
    this.obstacle.style.top = `${this.y}px`;
  };

  reSpawn = prevYPosition => {
    // console.log(prevYPosition);
    this.img =
      obstacleSprites[Math.floor(Math.random() * this.maxImageSeclector)];
    this.obstacle.style.backgroundImage = `url("${this.img}")`;
    this.x =
      this.obstaclePosition[Math.floor(Math.random() * this.max)] -
      this.width / 2;
    this.obstacle.style.left = `${this.x}px`;
    // this.y = -100;w
    this.y = -Math.floor(
      Math.random() * (this.maxPositionOffset - this.minPositionOffset + 1) +
        this.minPositionOffset
    );
    if (prevYPosition && prevYPosition >= this.y) {
      if (prevYPosition - this.y < 63) {
        this.y += -63;
      } else {
        this.y += 63;
      }
    }

    this.obstacle.style.top = `${this.y}px`;

    return this.y;
  };

  remod;
}
