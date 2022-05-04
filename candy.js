const candies = ['Blue', 'Green', 'Orange', 'Purple', 'Red', 'Yellow']
const BLANK = 'blank'
const BLANK_IMG_PATH = './images/blank.png'

const rows = 9
const columns = 9
let board = []
let curCandy
let otherCandy

const scoreElement = document.querySelector('#score')

const setRandom = arr => {
  return arr[Math.floor(Math.random() * arr.length)]
}

const cruchThree = () => {
  //check rows
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns - 2; c++) {
      const candy01 = board[r][c]
      const candy02 = board[r][c + 1]
      const candy03 = board[r][c + 2]
      const candy01Name = candy01.getAttribute('data-name')
      const candy02Name = candy02.getAttribute('data-name')
      const candy03Name = candy03.getAttribute('data-name')

      if (
        candy01Name === candy02Name &&
        candy02Name === candy03Name &&
        candy01Name !== BLANK
      ) {
        candy01.setAttribute('data-name', BLANK)
        candy01.setAttribute('src', BLANK_IMG_PATH)

        candy02.setAttribute('data-name', BLANK)
        candy02.setAttribute('src', BLANK_IMG_PATH)

        candy03.setAttribute('data-name', BLANK)
        candy03.setAttribute('src', BLANK_IMG_PATH)
      }
    }
  }

  //check columns
  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows - 2; r++) {
      const candy01 = board[r][c]
      const candy02 = board[r + 1][c]
      const candy03 = board[r + 2][c]
      const candy01Name = candy01.getAttribute('data-name')
      const candy02Name = candy02.getAttribute('data-name')
      const candy03Name = candy03.getAttribute('data-name')

      if (
        candy01Name === candy02Name &&
        candy02Name === candy03Name &&
        candy01Name !== BLANK
      ) {
        candy01.setAttribute('data-name', BLANK)
        candy01.setAttribute('src', BLANK_IMG_PATH)

        candy02.setAttribute('data-name', BLANK)
        candy02.setAttribute('src', BLANK_IMG_PATH)

        candy03.setAttribute('data-name', BLANK)
        candy03.setAttribute('src', BLANK_IMG_PATH)
      }
    }
  }
}

const onDragstart = e => {
  curCandy = e.target
  console.log(curCandy)
}
const onDragenter = e => {
  e.preventDefault()
}
const onDragover = e => {
  e.preventDefault()
}
const onDragleave = e => {
  e.preventDefault()
}
const onDrop = e => {
  console.log(e.target)
  otherCandy = e.target
}

const crushCandy = () => {
  // cruchFive()
  // cruchFive()
  cruchThree()
}

const onDragend = () => {
  const curCoors = curCandy.id.split('-')
  const r = +curCoors[0]
  const c = +curCoors[1]

  const otherCoors = otherCandy.id.split('-')
  const rOther = +otherCoors[0]
  const cOther = +otherCoors[1]

  const isLeftAdj = r === rOther && c === cOther - 1
  const isRightAdj = r === rOther && c === cOther + 1
  const isTopAdj = r === rOther - 1 && c === cOther
  const isBottomAdj = r === rOther + 1 && c === cOther
  const isAdjacent = isLeftAdj || isRightAdj || isTopAdj || isBottomAdj

  const swapImgs = () => {
    if (isAdjacent) {
      const curImg = curCandy.src
      const otherImg = otherCandy.src
      const curName = curCandy.getAttribute('data-name')
      const otherName = otherCandy.getAttribute('data-name')

      // prevent swap with blank
      if (curName === BLANK || otherName === BLANK) return

      curCandy.src = otherImg
      otherCandy.src = curImg

      curCandy.setAttribute('data-name', otherName)
      otherCandy.setAttribute('data-name', curName)
    }
  }

  const timeout = setTimeout(swapImgs, 100)

  return () => clearTimeout(timeout)
}

const startGame = () => {
  for (let r = 0; r < rows; r++) {
    let row = []
    for (let c = 0; c < columns; c++) {
      const color = setRandom(candies)

      const tile = document.createElement('img')
      tile.setAttribute('src', `./images/${color}.png`)
      tile.setAttribute('id', `${r}-${c}`)
      tile.setAttribute('data-name', color)

      row.push(tile)

      document.querySelector('#board').appendChild(tile)

      tile.addEventListener('dragstart', onDragstart)
      tile.addEventListener('dragover', onDragover)
      tile.addEventListener('dragenter', onDragenter)
      tile.addEventListener('dragleave', onDragleave)
      tile.addEventListener('drop', onDrop)
      tile.addEventListener('dragend', onDragend)
    }
    board.push(row)
  }
}

window.onload = () => {
  startGame()

  const interval = setInterval(cruchThree, 100)

  return () => clearInterval(interval)
}
