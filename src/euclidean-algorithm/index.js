const numA = 10;
const numB = 6;
const scaler = 50;
const ratio = numB / numA;

function setup() {
  createCanvas(500, 500);
}

function keyPressed() {
  if (keyCode === ENTER) {
    save('euclidean-algorithm.png');
  }
}

function draw() {
  const numAA = numA * scaler;
  const numBB = numB * scaler;

  let xPosition = 0;
  let yPosition = 0;
  let count = 0;
  let rectWidth = width * ratio;
  
  while(rectWidth > 0.1) {
    count++;
    if (count % 2 === 1) {
      while(xPosition + rectWidth < width + 0.1) {
        divSquare(xPosition, yPosition, rectWidth, ratio);
        xPosition += rectWidth;
      }
      rectWidth = width - xPosition;
    } else {
      while(yPosition + rectWidth < width * ratio + 0.1) {
        divSquare(xPosition, yPosition, rectWidth, ratio);
        yPosition += rectWidth;
      }
      rectWidth = width * ratio - yPosition;
    }
  }
}

function divSquare(xPositionOrigin, yPositionOrigin, rectWidthOrigin) {
  let count = 0;
  let rectWidth = rectWidthOrigin;
  let xPosition = xPositionOrigin;
  let yPosition = yPositionOrigin;
  let xEndPosition = xPosition + rectWidth;
  let yEndPosition = yPosition + rectWidth;
  
  while(rectWidth > 0.1) {
    count++;
    if (count % 2 === 1) {
      while(xPosition + rectWidth * ratio < xEndPosition + 0.1) {
        rect(xPosition, yPosition, rectWidth * ratio, rectWidth);
        xPosition += rectWidth * ratio;
      }
      rectWidth = xEndPosition - xPosition;
    } else {
      while(yPosition + rectWidth / ratio < yEndPosition + 0.1) {
        rect(xPosition, yPosition, rectWidth, rectWidth / ratio);
        yPosition += rectWidth / ratio;
      }
      rectWidth = yEndPosition - yPosition;
    }
  }
}