class Menu {
  constructor(parent) {
    this.parent = parent;
    this.show = true;
  }

  init = () => {
    this.menuItem = document.createElement('p');
    this.menuItem.innerText = 'Press F to pay respect';
    this.menuItem.style.position = 'absolute';
    this.menuItem.style.width = '100%';
    this.menuItem.style.textAlign = 'center';
    this.menuItem.style.top = '50%';
    this.menuItem.style.left = '50%';
    this.menuItem.style.transform = 'translate(-50%,-50%)';
    this.menuItem.style.zIndex = '100';
    this.menuItem;
    this.parent.road.appendChild(this.menuItem);
  };

  blink = () => {
    this.menuInterval = setInterval(() => {
      this.show = !this.show;
      if (this.show) {
        this.menuItem.innerText = 'Press F to pay respect';
      } else {
        this.menuItem.innerText = '';
      }
    }, 1000);
  };

  stopBlinking = () => {
    this.menuItem.innerText = '';
    clearInterval(this.menuInterval);
  };
}
