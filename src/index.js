import Surfer from "./Surfer"; // ES6 syntax- default import (only 1 object can be exported at this file)
import Trash from "./Trash";

// wait for dom and assets/images to load, then run callback
window.addEventListener("load", function () {
  startGame(); // TO DO: will also have renderLoadingScreen(), renderHomeScreen(), and stopGame() functions
});

function startGame() {
  const beachGif = document.createElement("img"); // render waves gif background
  beachGif.src = "./images/water1.gif";
  beachGif.id = "beach";
  const root = document.getElementById("game-area");
  root.appendChild(beachGif);

  const surfer = new Surfer(200, 350); // x, y positions
  root.appendChild(surfer.img);

  let interval;
  let both = 0; // to account for pressing of both keys at the same time

  document.addEventListener("keydown", (event) => {
    if (both === 0) {
      both++;
      if (event.key === "ArrowLeft") {
        interval = setInterval(() => surfer.moveLeft(), 1);
      }
      if (event.key === "ArrowRight") {
        interval = setInterval(() => surfer.moveRight(), 1);
      }
    }
  });

  document.addEventListener("keyup", (event) => {
    clearInterval(interval);
    both = 0;
  });

  // const numTrash = 3; // max num of trash at once in game
  const numTrash = 10; // max num of trash at once in game
  let trashInterval = 1000;
  for (let i = 0; i < numTrash; i++) {
    setTimeout(() => {
      const randomTrash = new Trash(i); // create 1 random trash object with random x position
      root.appendChild(randomTrash.img);
    }, (trashInterval += 1000)); // stagger each appearance by 1 second
  }
}
