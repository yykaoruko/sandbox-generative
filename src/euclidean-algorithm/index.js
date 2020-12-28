function setup() {
  createCanvas(500, 500);
}

function draw() {
  const numA = 10;
  const numB = 6;
  const scaler = 50;

  const numAA = numA * scaler;
  const numBB = numB * scaler;

  let xPosition = 0;
  let yPosition = 0;
  let count = 0;
  let rectWidth = numBB;
  
  while(rectWidth > 0) {
    count++;
    if (count % 2 === 1) {
      while(xPosition + rectWidth <= numAA) {
        rect(xPosition, yPosition, rectWidth, rectWidth);
        xPosition += rectWidth;
      }
      rectWidth = numAA - xPosition;
    } else {
      while(yPosition + rectWidth <= numBB) {
        rect(xPosition, yPosition, rectWidth, rectWidth);
        yPosition += rectWidth;
      }
      rectWidth = numBB - yPosition;
    }
  }
}