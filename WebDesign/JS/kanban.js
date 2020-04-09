const app = document.querySelector('.app')
const boardStr = localStorage.getItem('kanban') || '[]'
const undoButton = document.querySelector('.undoDiv') 

const undoData = []
let Boards = []
let boardData = JSON.parse(boardStr)

const getItemList = () => {
  if (!Boards.length) {return}
  return Boards.map((e) => {
    return e.getData()
  })
}

const updateStorage = () => {
  const result = getItemList()
  return localStorage.setItem('kanban', JSON.stringify(result))
}

const setUndo = () => {
  const result = getItemList()
  return undoData.push(result)
}

undoButton.addEventListener('click', () => {
	const undone = undoData.pop()
	if (!undone) {return}

  boardData = undone
	loadApp()
  return localStorage.setItem('kanban', JSON.stringify(undone))
})

function loadApp() {
  app.innerHTML = ''

  Boards = [
  new Board('To-Do', 'lightblue', 0),
  new Board('Doing', 'lightgreen', 1),
  new Board('Done', 'violet', 2),
  new Board('Approved', 'orange', 3)
  ]
}

loadApp()

function Board(title, color, index) {
  let itemList = []
  const div = document.createElement('div');
  div.setAttribute('class', 'outerContainer')

  div.innerHTML = `
	<h1 style="background:${color};">${title}</h1>
	<div class="midContainer"></div>
	<div class="lowerContainer">
	<textarea class="type" type="text"></textarea>
	<button class="submit">Submit</button>
	</div>
	`;

  const midContainer = div.querySelector('.midContainer');
  const lowerContainer = div.querySelector('.lowerContainer');
  const type = div.querySelector('.type')
  const submit = div.querySelector('.submit');
	
  submit.addEventListener('click', () => {
    const value = type.value;
    if (value.trim() === '') {return} 

    setUndo()
    itemList.push(new Item(value, midContainer, index));
    updateStorage()
  });

  this.getData = function() {
    const result = itemList.map((e) => {
      return e.getData()
    })
    return result.filter((e) => {
      return e !== ""
    })
  }

	this.addTodo = function(value) {
    itemList.push(new Item(value, midContainer, index))
  }

  app.append(div);

  const dataArr = boardData[index] || []
  itemList = dataArr.map((str) => {
    return new Item(str, midContainer, index)
  })
}

function Item(string, element, index) {
	const div = document.createElement('div')
  const left = index === 0 ? '' : '<';
  const right = index === 3 ? '' : '>';

  div.innerHTML = `
	<div class="left">${left}</div>
	<div class="right">${right}</div>
	<div class="title todo todo${index}">${string}</div>`; 

  const title = div.querySelector('.title')
  const leftButton = div.querySelector('.left');
  const rightButton = div.querySelector('.right');

  const handleClick = (board) => {
    setUndo()
    board.addTodo(string)
    div.remove()
    string = ''
    updateStorage()
  }

  leftButton.onclick = () => {
    if (index === 0) {return}
    const leftBoard = Boards[index - 1]
    handleClick(leftBoard)
  };

  rightButton.onclick = () => {
    if (index === 3) {return}
    const rightBoard = Boards[index + 1]
    handleClick(rightBoard)
  };

  this.getData = function() {
    return string 
  }

  element.append(div);

  title.addEventListener('click', () => {
		const todoDelete = confirm(`Are you sure you want to delete "${string}"?`)
		if (todoDelete === true) {
      setUndo()
      div.remove();
      string = ''
      updateStorage()
		}
    return;
  });
}

