class Background {
  constructor() {
    this.width = 240;
    this.height = 600;
    this.speed = 2;
    this.y = 0;
  }

  init = () => {
    this.road = document.createElement('div');
    this.road.style.width = `${this.width}px`;
    this.road.style.margin = '10px auto';
    this.road.style.height = `${this.height}px`;
    this.road.style.position = 'relative';
    this.road.style.overflow = 'hidden';
    this.road.style.backgroundImage = "url('../../assets/img/game_img.png')";
    this.road.style.backgroundSize = 'contain';

    container.appendChild(this.road);

    /*
      uncomment the code below if you want to add custom backgroud and comment
      the background image property
    */
    // this.road.style.backgroundImage =
    //   "url('../../assets/img/stripes.png'), url('../../assets/img/stripes.png')";
    // this.road.style.backgroundRepeatX = 'no-repeat';
    // this.road.style.backgroundPositionY = `${this.y}px`;
    // this.road.style.backgroundPositionX = '75px, 155px';
    // this.road.style.backgroundColor = '#595259';
    // this.road.style.backgroundRepeat = 'no-repeat';
  };

  move = gear => {
    if (gear === 2) {
      this.y += 2;
    } else if (gear === 3) {
      this.y += 3;
    } else if (gear === 4) {
      this.y += 4;
    } else if (gear === 5) {
      this.y += 5;
    } else {
      this.y += 1;
    }
    this.road.style.backgroundPositionY = `${this.y}px`;
  };
}
