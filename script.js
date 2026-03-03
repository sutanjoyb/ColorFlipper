// Get reference to the body
const body = document.body;

// Function to set a specific color
function setColor(colorName) {
  body.style.backgroundColor = colorName;
}

// Function to set a random color
function randomColor() {
  const red = Math.floor(Math.random() * 256); // 0-255
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const rgb = `rgb(${red}, ${green}, ${blue})`;
  body.style.backgroundColor = rgb;
}