let numA = 7;
let numB = 10;
let threshold = 50;
let ratio = numB / numA;
const scaler = 50;
const color = 1;


function setup() {
  createCanvas(500, 500);
  createSpan('A');
  const inputNumA = createInput(numA.toString(), 'range');
  createSpan('B');
  const inputNumB = createInput(numB.toString(), 'range');
  createSpan('Threshold');
  const inputThreshold = createInput(threshold.toString(), 'range');
  inputNumA.input(updateNumA);
  inputNumB.input(updateNumB);
  inputThreshold.input(updateThreshold);
}

function updateNumA() {
  numA = Number(this.value());
}

function updateNumB() {
  numB = Number(this.value());
}

function updateThreshold() {
  threshold = Number(this.value());
}

function keyPressed() {
  if (keyCode === ENTER) {
    save('euclidean-algorithm.png');
  }
}

function draw() {
  ratio = numB / numA;
  if (ratio !== 1) divSquare(0, 0, width);
}

// 正方形を長方形で分割する
function divSquare(xPositionOrigin, yPositionOrigin, rectWidthOrigin) {
  let count = 0;
  let rectWidth = rectWidthOrigin;
  let xPosition = xPositionOrigin;
  let yPosition = yPositionOrigin;
  let xEndPosition = xPosition + rectWidth;
  let yEndPosition = yPosition + rectWidth;

  colorMode(RGB, 1);
  fill(color);
  rect(xPosition, yPosition, rectWidth, rectWidth);

  while(rectWidth > threshold) {
    count++;
    if (count % 2 === 1) {
      while(xPosition + rectWidth * ratio < xEndPosition + 0.1) {
        devRect(xPosition, yPosition, rectWidth * ratio);
        xPosition += rectWidth * ratio;
      }
      rectWidth = xEndPosition - xPosition;
    } else {
      while(yPosition + rectWidth / ratio < yEndPosition + 0.1) {
        devRect(xPosition, yPosition, rectWidth);
        yPosition += rectWidth / ratio;
      }
      rectWidth = yEndPosition - yPosition;
    }
  }
}

// 長方形を正方形で分割する
function devRect(xPositionOrigin, yPositionOrigin, rectWidthOrigin) {
  let count = 0;
  let rectWidth = rectWidthOrigin;
  let xPosition = xPositionOrigin;
  let yPosition = yPositionOrigin;
  let xEndPosition = xPosition + rectWidth;
  let yEndPosition = yPosition + rectWidth / ratio;

  colorMode(RGB, 1);
  fill(color);
  rect(xPosition, yPosition, rectWidth, rectWidth / ratio);

  while(rectWidth > threshold) {
    count++;
    if (count % 2 === 0) {
      while(xPosition + rectWidth < xEndPosition + 0.1) {
        divSquare(xPosition, yPosition, rectWidth);
        xPosition += rectWidth;
      }
      rectWidth = xEndPosition - xPosition;
    } else {
      while(yPosition + rectWidth < yEndPosition + 0.1) {
        divSquare(xPosition, yPosition, rectWidth);
        yPosition += rectWidth;
      }
      rectWidth = yEndPosition - yPosition;
    }
  }
}
