const imgPathsAry = [
  "#banana",
  "#bottle",
  "#plastic-bag",
  // "#greenbox",
  // "#coffee",
  // "#pinkbottle",
  // "#plastic",
];

// Returns a random number between min (inclusive) and max (exclusive)
function rndScreenX(min, max) {
  return Math.random() * (max - min) + min;
}

function randomTrashID() {
  return imgPathsAry[Math.floor(Math.random() * imgPathsAry.length)];
}

class Trash {
  constructor(x) {
    this.img = document.createElement("img"); // create dom img html element <img>
    const trashID = randomTrashID(); // ex. "#banana"
    const fileName = trashID.slice(1); // remove "#" from trashID
    this.img.src = `./images/${fileName}.png`;
    this.img.className = "trash";
    this.img.id = fileName;
    this.x = rndScreenX(0, 800 - this.img.clientWidth); // num pixels away trash is from left border of game area
    this.y = 0; // num pixels away trash is from top border of game area
    this.img.style.left = `${this.x}px`; // set starting locations
    this.img.style.top = "0px";

    this.interval = setInterval(() => {
      this.img.style.left = this.x + "px";
      this.img.style.top = this.y + "px";
      this.y += 2.5;

      // TO DO: check if trash hits surfer
      // if trash hits bottom of game area, reset to top
      if (this.y === 600 - this.img.clientHeight) {
        this.img.style.top = "0px"; // reset to top
        this.y = 0;
        this.x = rndScreenX(0, 800 - this.img.clientWidth);

        this.img.src = `./images/${randomTrashID().slice(1)}.png`; // randomize trash img

        // if we don't do this they're be a jump in image in the x plane
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";
      }
    }, 1000 / 60);
  }
}

export default Trash;
