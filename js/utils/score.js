class Score {
  constructor() {
    this.initialScore = 0;
    this.highScore = 0 || localStorage.getItem('distanceTravelled');
    this.distanceTravelled = 0;
    this.gear = 1;
  }

  init = () => {
    this.scoreBoard = document.createElement('div');
    this.scoreBoard.style.position = 'absolute';
    this.scoreBoard.style.top = '20%';
    this.scoreBoard.style.left = '2%';
    this.scoreBoard.style.width = '500px';
    this.scoreBoard.style.padding = '20px';
    this.scoreBoard.style.backgroundColor = '#659dbd';
    container.appendChild(this.scoreBoard);

    this.gameInformationTop = document.createElement('div');
    this.gameInformationMiddle = document.createElement('div');
    this.gameInformationBottom = document.createElement('div');
    this.scoreBoard.appendChild(this.gameInformationTop);
    this.scoreBoard.appendChild(this.gameInformationMiddle);
    this.scoreBoard.appendChild(this.gameInformationBottom);

    this.scoreText = document.createElement('p');
    this.scoreText.innerText = 'Distance Travelled';
    this.scoreText.style.fontSize = '24px';
    this.scoreText.style.width = '50%';
    this.scoreText.style.display = 'inline-block';
    this.scoreText.style.marginRight = '20px';
    this.gameInformationTop.appendChild(this.scoreText);

    this.scoreValue = document.createElement('p');
    this.scoreValue.innerText = `: ${this.distanceTravelled} km`;
    this.scoreValue.style.fontSize = '24px';
    this.scoreValue.style.display = 'inline-block';
    this.gameInformationTop.appendChild(this.scoreValue);

    this.gearIndicator = document.createElement('p');
    this.gearIndicator.innerText = 'Gear';
    this.gearIndicator.style.fontSize = '24px';
    this.gearIndicator.style.width = '50%';
    this.gearIndicator.style.display = 'inline-block';
    this.gearIndicator.style.marginRight = '20px';
    this.gameInformationMiddle.appendChild(this.gearIndicator);

    this.gearValue = document.createElement('p');
    this.gearValue.innerText = `: ${this.gear}`;
    this.gearValue.style.fontSize = '24px';
    this.gearValue.style.display = 'inline-block';
    this.gameInformationMiddle.appendChild(this.gearValue);

    this.highScoreText = document.createElement('p');
    this.highScoreText.innerText = 'High Score';
    this.highScoreText.style.width = '50%';
    this.highScoreText.style.marginRight = '20px';
    this.highScoreText.style.fontSize = '24px';
    this.highScoreText.style.display = 'inline-block';
    this.gameInformationBottom.appendChild(this.highScoreText);

    this.highScoreValue = document.createElement('p');
    this.highScoreValue.innerText = `: ${this.highScore} km`;
    this.highScoreValue.style.fontSize = '24px';
    this.highScoreValue.style.display = 'inline-block';
    this.gameInformationBottom.appendChild(this.highScoreValue);
  };

  updateScore = currentGear => {
    if (currentGear == 2) {
      this.initialScore += 2;
    } else if (currentGear == 3) {
      this.initialScore += 3;
    } else if (currentGear == 4) {
      this.initialScore += 4;
    } else if (currentGear == 5) {
      this.initialScore += 5;
    } else {
      this.initialScore += 1;
    }

    this.gear = currentGear;
    this.gearValue.innerText = `: ${this.gear}`;

    if (this.initialScore >= 300) {
      this.initialScore = 0;
      this.distanceTravelled += 1;
      this.scoreValue.innerText = `: ${this.distanceTravelled} km`;
    }
  };

  updateHighScore = () => {
    if (this.distanceTravelled > localStorage.getItem('distanceTravelled')) {
      this.highScore = this.distanceTravelled;
      localStorage.setItem('distanceTravelled', this.distanceTravelled);
      this.highScoreValue.innerText = `: ${this.highScore} km`;
    }
  };
}
