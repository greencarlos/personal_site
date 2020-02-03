const app = document.querySelector('.app')
const boardStr = localStorage.getItem('kanban') || '[]'
let boardData = JSON.parse(boardStr)

const Boards = []
const undoData = []

const updateStorage = () => {
  if (!Boards) {return}
  const result = Boards.map((e) => {
    return e.getData()
  })
  return localStorage.setItem('kanban', JSON.stringify(result))
}

const setUndo = () => {
  if (!Boards) {return}
  const result = Boards.map((e) => {
    return e.getData()
  })
  return undoData.push(result)
}

const undoButton = document.querySelector('.undoDiv') 

undoButton.addEventListener('click', (e) => {
	e.preventDefault()
	const undone = undoData.pop()
	if (!undone) {return}

  boardData = undone
	loadApp()
  return localStorage.setItem('kanban', JSON.stringify(undone))
})

function loadApp() {
  app.innerHTML = ''
  Boards.push( 
  new Board('To-Do', 'lightblue', 0),
  new Board('Doing', 'lightgreen', 1),
  new Board('Done', 'violet', 2),
  new Board('Approved', 'orange', 3))
  return
}

loadApp()

function Board(title, color, index) {
  this.title = title
  this.index = index

  const div = document.createElement('div');
  div.setAttribute('class', 'outerContainer')

  div.innerHTML = `
	<h1 style="background:${color};" class="outer${title}">
	${title}
	</h1>
	<div class="midContainer"></div>
	<div class="lowerContainer">
	<textarea class="type" type="text"></textarea>
	<button class="submit">Submit</button>
	</div>
	`;

  const submit = div.querySelector('.submit');
  const lowerContainer = div.querySelector('.lowerContainer');
  const type = div.querySelector('.type')
  const midContainer = div.querySelector('.midContainer');
	
  submit.addEventListener('click', () => {
    setUndo()
    const value = type.value;
    if (value.trim() === '') {
      return
    } 
    this.data.push(new Item(value, midContainer, index));
    updateStorage()
  });

  this.getData = function() {
    const dataArray = this.data.map((e) => {
      return e.getData()
    })
    return dataArray.filter((e) => {
      return e !== ""
    })
  }

	this.addTodo = function(value) {
    this.data.push(new Item(value, midContainer, index))
  }

  app.append(div);

  const dataArr = boardData[index] || []
  this.data = dataArr.map((str) => {
    return new Item(str, midContainer, index)
  })
}

function Item(string, element, index) {
	const div = document.createElement('div')
  div.className = `todo${index}`

	if (index === 0) {
  div.innerHTML = `
	<div class="left"></div>
	<div class="right" style="float:right;">></div>
	<div class="title" style="text-align:center;">
  ${string}
  </div>
  `; 
	} else if (index === 3) {
		div.innerHTML = `
	<div class="left" style="float:left;"><</div>
	<div class="right"></div>
	<div class="title" style="text-align:center;">
	${string}
	</div>
	`
	} else {
		div.innerHTML = `
	<div class="left" style="float:left;"><</div>
	<div class="right" style="float:right;">></div>
	<div class="title" style="text-align:center;">
	${string}
	</div>
	`
	}

  const title = div.querySelector('.title')
  const left = div.querySelector('.left');
  const right = div.querySelector('.right');

  left.onclick = () => {
    setUndo()
    if (index === 0) {
      return
    }
    const leftBoard = Boards[index - 1]
    leftBoard.addTodo(string)
    div.remove()
    string = ''
    updateStorage()
  };

  right.onclick = () => {
    setUndo()
    if (index === 3) {
      return
    }
    const rightBoard = Boards[index + 1]
    rightBoard.addTodo(string)
    div.remove()
    string = ''
    updateStorage()
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

