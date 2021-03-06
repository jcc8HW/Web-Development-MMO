const TO_RADIANS = Math.PI/180; // multiply for degrees to radians

const X_VIEW = 25; // horizontal render distance from snake head
const Y_VIEW = 15; // vertical render distance from snake head

const CENTER_X = 12; // center tile's x position for reference during plotting
const CENTER_Y = 7; // center tile's y position

const X_PERIPHERAL = Math.floor((X_VIEW-1)/2);; // distance from snake head to left/right edges of screen
const Y_PERIPHERAL = Math.floor((Y_VIEW-1)/2);; // distance from snake head to top/right edges of screen


var TILE_SIZE; // height and width of each grid square

var FRAME_OFFSET = 1 / 6; // portion of tile offset per frame

var CANVAS_WIDTH; // actual width of canvas in browser
var CANVAS_HEIGHT; // actual height of canvas in browser


function configureCanvasMeasurements(canvas_width) {
  // make sure canvas width is integer to prevents blurring
  CANVAS_WIDTH = Math.floor(canvas_width);

  // determine new height according to new width to maintain width:height ratio
  CANVAS_HEIGHT = Math.floor((9/15) * CANVAS_WIDTH);

  // set height of canvas to new height
  canvas.setAttribute("height", CANVAS_HEIGHT+"px");

  // configure measurements
  TILE_SIZE = Math.floor(CANVAS_WIDTH / X_VIEW);
}
