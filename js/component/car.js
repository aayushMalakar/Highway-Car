class Car {
  constructor(parent) {
    this.parent = parent;
    this.width = 24;
    this.height = 53;
    this.x = 120 - this.width / 2;
    this.y = this.parent.height - this.height;
    this.maxGear = 5;
    this.minGear = 1;
    this.gear = 1;
    this.gearOne = 1;
    this.gearTwo = 2;
    this.gearThree = 3;
    this.gearFour = 4;
    this.gearFive = 5;
    this.gearOneSpeed = 0;
    this.gearTwoSpeed = 424;
    this.gearThreeSpeed = 324;
    this.gearFourSpeed = 224;
    this.gearFiveSpeed = 124;
    this.speed = 0;
    this.maxSpeed = 300;
    this.moveUp = false;
    this.moveDown = false;
    this.moveLeft = false;
    this.moveRight = false;
  }

  init = () => {
    this.car = document.createElement('div');
    this.car.style.width = `${this.width}px`;
    this.car.style.height = `${this.height}px`;
    this.car.style.position = 'absolute';
    this.car.style.top = `${this.y}px`;
    this.car.style.left = `${this.x}px`;
    // this.car.style.backgroundColor = 'red';
    this.car.style.backgroundImage = "url('../../assets/img/car01.png')";
    this.car.style.backgroundSize = 'cover';
    this.car.style.backgroundPositionX = 'center';

    document.addEventListener('keypress', this.move);
    this.parent.road.appendChild(this.car);
  };

  move = event => {
    // console.log(event.keyCode);

    if (event.isComposing || event.keyCode === KEY_W) {
      this.moveUp = true;
      this.increaseGear();
    }

    if (event.isComposing || event.keyCode === KEY_S) {
      this.moveUp = false;
      this.decreaseGear();
    }

    if (event.isComposing || event.keyCode === KEY_A) {
      this.moveLeft = true;
      this.moveRight = false;
    }

    if (event.isComposing || event.keyCode === KEY_D) {
      this.moveleft = false;
      this.moveRight = true;
    }
  };

  updatePosition = () => {
    if (this.moveUp) {
      if (this.gear === this.gearTwo) {
        if (this.y >= this.gearTwoSpeed) {
          this.y -= 1.5;
        }
      } else if (this.gear === this.gearThree) {
        if (this.y >= this.gearThreeSpeed) {
          this.y -= 2;
        }
      } else if (this.gear === this.gearFour) {
        if (this.y >= this.gearFourSpeed) {
          this.y -= 2.5;
        }
      } else if (this.gear === this.gearFive) {
        if (this.y >= this.gearFiveSpeed) {
          this.y -= 3;
        }
      }
    } else {
      if (this.gear === this.gearOne) {
        if (this.y <= 547) {
          this.y += 3;
        }
      } else if (this.gear === this.gearTwo) {
        if (this.y <= 424) {
          this.y += 2.5;
        }
      } else if (this.gear === this.gearThree) {
        if (this.y <= 324) {
          this.y += 2;
        }
      } else if (this.gear === this.gearFour) {
        if (this.y <= 224) {
          this.y += 1.5;
        }
      }
    }

    if (this.moveRight) {
      this.moveLeft = false;
      // this.car.style.backgroundImage =
      //   "url('../../assets/img/car01-right.png')";
      this.x += 2.5;
    }

    if (this.moveLeft) {
      this.moveRight = false;
      // this.car.style.backgroundImage = "url('../../assets/img/car01-left.png')";
      this.x -= 2.5;
    }

    this.car.style.top = `${this.y}px`;
    this.car.style.left = `${this.x}px`;
  };

  increaseGear = () => {
    if (this.gear < this.gearFive) {
      this.gear++;
    }
  };

  decreaseGear = () => {
    if (this.gear > this.gearOne) {
      this.gear--;
    }
  };

  brake = () => {
    this.y -= 4;
  };

  remove = () => {
    document.removeEventListener('keypress', this.move);
  };
}
