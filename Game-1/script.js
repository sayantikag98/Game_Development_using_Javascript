const canvas = document.querySelector("#canvas");  // reference to HTML canvas element
const context = canvas.getContext("2d"); //this method gets the above html element context - the thing onto which the drawing will be rendered


// these properties are a part of CanvasRenderingContext2D interface
context.fillStyle = "red"; // this will color the rectangle red
context.fillRect(20, 20, 10, 10); // this places the rectangle top-left corner at (20, 20) and is 50 units in width and 50 units in height

context.fillStyle = "blue";
context.fillRect(40, 40, 60, 60);

