const imgPathsAry = [
  "banana",
  "bottle",
  "plastic-bag",
  // "#banana",
  // "#bottle",
  // "#plastic-bag",
  // "#greenbox",
  // "#coffee",
  // "#pinkbottle",
  // "#plastic",
];

// Returns a random number between min (inclusive) and max (exclusive)
function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function randomTrash() {
  return imgPathsAry[Math.floor(Math.random() * imgPathsAry.length)];
}

class Trash {
  constructor(trashId) {
    this.trashId = trashId; // trashId == number. each trash object has to have a unique number to set html id attribute
    this.img = new Image(); // create dom img html element <img>. similar to document.createElement("img");
    this.setNewTrash(); // set trash img html attributes
    this.moveTrashToTop(); // set position of trash to top of game area
    this.trashSpeed = Math.round(randomNumber(1, 2.5) * 10) / 10; // round to 1st decimal, ex 2.4

    // move trash down the screen at trashSpeed, every 16ms
    this.interval = setInterval(() => {
      this.img.style.top = this.y + "px";
      this.y += this.trashSpeed;

      // TO DO: check if trash hits surfer
      // if trash hits bottom of game area, change trash type and reset position to top
      if (this.y >= 600 - this.img.height) {
        this.setNewTrash();
        this.moveTrashToTop();
      }
    }, 1000 / 60); // 60 because we want 60 frames per second for smooth animation
  }

  setNewTrash() {
    this.trashType = randomTrash(); // ex. "banana"
    this.img.src = `./images/${this.trashType}.png`;
    this.img.className = `trash ${this.trashType}`; // allows us to select all trash OR select all types of a trash (ex. bananas)
    this.img.id = `#${this.trashType}-${this.trashId}`; // each id needs to be unique. allows to select specific trash
  }

  moveTrashToTop() {
    this.x = randomNumber(0, 800 - this.img.width); // num pixels away trash is from left border of game area
    this.y = 0; // num pixels away trash is from top border of game area
    this.img.style.left = `${this.x}px`; // set starting locations
    this.img.style.top = "0px";
  }
}

export default Trash;
