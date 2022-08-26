class Surfer {
  constructor(x = 0, y = 0) {
    this.img = document.createElement("img"); // create dom img html element <img>
    this.img.src = "./images/surfer1.png";
    this.img.id = "surfer";
    this.img.style.left = `${x}px`; // set starting location
    this.img.style.top = `${y}px`;

    // this is so we can write "surfer.x" instead of "surfer.img.style.left"
    this.x = x; // num pixels away surfer is from left border of game area
    this.y = y; // num pixels away surfer is from top border of game area
  }

  moveLeft() {
    if (this.x > 0) {
      this.img.style.left = this.x - 5 + "px";
      this.x -= 5;
    }
  }

  moveRight() {
    if (this.x < 550) {
      // i'm just guesstimating here
      this.img.style.left = this.x + 5 + "px";
      this.x += 5;
    }
  }
}

export default Surfer;
