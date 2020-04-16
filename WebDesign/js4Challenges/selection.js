const myCanvas = document.querySelector('.myCanvas');
const container = document.querySelector('.container');

let isDown = false;
let startX;
let startY;
let currentX;
let currentY;

const getRow = (row, j, i = 0, arr = []) => {
  if (i === row) return arr;
  arr.push(new Box(i, j));
  return getRow(row, j, i + 1, arr);
};

const getGrid = (row, col, i = 0, res = []) => {
  if (i === col) return res;
  res.push(getRow(row, i));
  return getGrid(row, col, i + 1, res);
};

const grid = getGrid(5, 5);

function Box(i, j) {
  const boxEle = document.createElement('div');
  boxEle.classList.add('boxClass');
  boxEle.classList.add(`row-${i}`);
  boxEle.classList.add(`col-${j}`);

  container.append(boxEle);
}

document.addEventListener('mousedown', e => {
  startX = e.clientX;
  startY = e.clientY;
  isDown = true;

  container.addEventListener('dragstart', evt => {
    console.log('Drag start', evt);
    evt.dataTransfer.setData('Text', evt.target.id);
  });
});

document.addEventListener('mousemove', e => {
  if (!isDown) {
    return;
  }

  currentX = e.clientX;
  currentY = e.clientY;
  myCanvas.style.visibility = 'visible';

  // myCanvas goes down right
  myCanvas.style.top = startY + 'px';
  myCanvas.style.left = startX + 'px';
  myCanvas.style.height = currentY - startY + 'px';
  myCanvas.style.width = currentX - startX + 'px';

  // myCanvas goes left
  if (startX > currentX) {
    myCanvas.style.right = startX + 'px';
    myCanvas.style.left = currentX + 'px';
    myCanvas.style.width = startX - currentX + 'px';
  }

  // myCanvas goes up
  if (startY > currentY) {
    myCanvas.style.top = currentY + 'px';
    myCanvas.style.bottom = startY + 'px';
    myCanvas.style.height = startY - currentY + 'px';
  }

  container.addEventListener('dragenter', evt => {
    if (evt.target.className === 'droptarget') {
      evt.target.style.backgroundColor = 'lightblue';
    }
  });
});

document.addEventListener('mouseup', e => {
  isDown = false;
  startX = null;
  startY = null;
  currentX = null;
  currentY = null;
  myCanvas.style.visibility = 'hidden';

  container.addEventListener('dragleave', evt => {
    if (evt.target.className === 'droptarget') {
      evt.target.style.backgroundColor = '';
    }
  });
});
