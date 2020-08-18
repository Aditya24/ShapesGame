//Creating Canvas
const canvas = document.createElement("canvas");
const container = document.createElement("div");
container.className += "container";
//Defining the platform 2d
platform = canvas.getContext("2d");
//Dimensions
const width = (canvas.width = 450);
const height = (canvas.height = 450);
//Adding canvas to DOM
document.body.appendChild(canvas);
//Styling the platform
platform.fillStyle = "black";
platform.fillRect(0, 0, width, height); //takes X axis Y axis and width and height
//the Pointer
posUp = 200; //x
posDown = 200; //y
posRight = 0; //dx
posLeft = 0; //dy

setInterval(function () {
  // To avoid the continues looking line
  //platform.fillStyle = "black";
  //platform.fillRect(0, 0, width, height);

  posUp += posRight;
  posDown += posLeft;
  // to stop object from going out of the platform frame
  posUp > 438 ? (posRight = 0) && (posUp = 438) : posUp;
  posUp < 0 ? (posRight = 0) && (posUp = 0) : posUp;
  posDown > 438 ? (posLeft = 0) && (posDown = 338) : posDown;
  posDown < 0 ? (posLeft = 0) && (posDown = 0) : posDown;

  platform.fillStyle = "white";
  platform.fillRect(posUp, posDown, 12, 12); //takes X axis Y axis and width and height
}, 20);
//To move the object using keys
window.addEventListener("keydown", pressKey, true);
function pressKey(event) {
  switch (event.keyCode) {
    case 37:
      posRight = -1;
      posLeft = 0;
      break;
    case 38:
      posRight = 0;
      posLeft = -1;
      break;
    case 39:
      posRight = 1;
      posLeft = 0;
      break;
    case 40:
      posRight = 0;
      posLeft = 1;
      break;
    case 32:
      posRight = 0;
      posLeft = 0;
      break;
  }
}
