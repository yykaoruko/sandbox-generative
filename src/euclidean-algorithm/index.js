const numA = 29;
const numB = 8;
const scaler = 50;
const ratio = numB / numA;
const threshold = 20;

function setup() {
  createCanvas(500, 500);
  divSquare(0, 0, width);
}

function keyPressed() {
  if (keyCode === ENTER) {
    save('euclidean-algorithm.png');
  }
}

function draw() {
  // const numAA = numA * scaler;
  // const numBB = numB * scaler;

  // let xPosition = 0;
  // let yPosition = 0;
  // let count = 0;
  // let rectWidth = width * ratio;
  
  // while(rectWidth > 0.1) {
  //   count++;
  //   if (count % 2 === 1) {
  //     while(xPosition + rectWidth < width + 0.1) {
  //       divSquare(xPosition, yPosition, rectWidth, ratio);
  //       xPosition += rectWidth;
  //     }
  //     rectWidth = width - xPosition;
  //   } else {
  //     while(yPosition + rectWidth < width * ratio + 0.1) {
  //       divSquare(xPosition, yPosition, rectWidth, ratio);
  //       yPosition += rectWidth;
  //     }
  //     rectWidth = width * ratio - yPosition;
  //   }
  // }
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
  fill(random(1));
  // fill(random(1), random(1), random(1));
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
  fill(random(1));
  // fill(random(1), random(1), random(1));
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
