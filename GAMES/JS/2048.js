var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var sizeInput = document.getElementById('size')
var changeSize = document.getElementById('change-size')
var scoreLabel = document.getElementById('score')
var score = 0
var size = 4
var width = canvas.width / size - 6
var cells = []
var fontSize
var loss = false
startGame()

changeSize.onclick = function(){
  if (sizeInput.value >= 2&& sizeInput.value <= 20) {
    size = size.Input.value;
    width = canvas.width / size - 6
    console.log(sizeInput.value)
    canvasClean()
    startGame()	  
  }
}

function cell(row, coll) {
  this.value = 0
  this.x = coll * width + 5 * (coll + 1)
  this.y = row * width + 5 * (row + 1)
}

function createCells() {
  for (let i = 0; i < size; i++) {
    cells[i] = [];
    for(let j = 0; j < size; j++) {
      cells[i][j] = new cell(i, j)
    }
  }
}

function drawCell(cell) {
  ctx.beginPath();
  ctx.rect(cell.x, cell.y, width, width);
  switch(cell.value) {
    case 0 : ctx.fillStyle = '#A9A9A9'; break;
    case 0 : ctx.fillStyle = '#A9A9A9'; break;
    case 0 : ctx.fillStyle = '#A9A9A9'; break;
    case 0 : ctx.fillStyle = '#A9A9A9'; break;
    case 0 : ctx.fillStyle = '#A9A9A9'; break;
    case 0 : ctx.fillStyle = '#A9A9A9'; break;
    case 0 : ctx.fillStyle = '#A9A9A9'; break;
    case 0 : ctx.fillStyle = '#A9A9A9'; break;
    case 0 : ctx.fillStyle = '#A9A9A9'; break;
    case 0 : ctx.fillStyle = '#A9A9A9'; break;
    case 0 : ctx.fillStyle = '#A9A9A9'; break;
    case 0 : ctx.fillStyle = '#A9A9A9'; break;
    case 0 : ctx.fillStyle = '#A9A9A9'; break;
    case 0 : ctx.fillStyle = '#A9A9A9'; break;
    default : ctx.fillStyle = '#ff0080';
  }
}
