function setup() {
  createCanvas(500, 500);
}

function keyPressed() {
  if (keyCode === ENTER) {
    save('euclidean-algorithm.png');
  }
}

function draw() {
  const numA = 10;
  const numB = 6;
  const scaler = 50;
  const ratio = numB / numA;

  const numAA = numA * scaler;
  const numBB = numB * scaler;

  let xPosition = 0;
  let yPosition = 0;
  let count = 0;
  let rectWidth = width;
  
  while(rectWidth > 0.1) {
    count++;
    if (count % 2 === 1) {
      while(xPosition + rectWidth * ratio < width + 0.1) {
        rect(xPosition, yPosition, rectWidth * ratio, rectWidth);
        xPosition += rectWidth * ratio;
      }
      rectWidth = numAA - xPosition;
    } else {
      while(yPosition + rectWidth / ratio < width + 0.1) {
        rect(xPosition, yPosition, rectWidth, rectWidth / ratio);
        yPosition += rectWidth / ratio;
      }
      rectWidth = width - yPosition;
    }
  }
}