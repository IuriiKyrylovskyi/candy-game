const candies = ['Blue', 'Green', 'Orange', 'Purple', 'Red', 'Yellow']
const BLANK = 'blank'
const BLANK_IMG_PATH = './images/blank.png'

const rows = 9
const columns = 9
let board = []
let curCandy
let otherCandy
let score = 0

let initX
let initY
let endX
let endY
let moveRight
let moveDown

const setRandom = arr => {
  return arr[Math.floor(Math.random() * arr.length)]
}

const checkValid = () => {
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
        return true
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
        return true
      }
    }
  }
  return false
}

const createPop = (element, num) => {
  const coordinates = element.getBoundingClientRect()

  const popScore = document.createElement('div')
  popScore.classList.add('pop-score')
  popScore.textContent = `+${num}`
  popScore.style.top = `${coordinates.top}px`
  popScore.style.left = `${coordinates.left}px`
  popScore.classList.add('visible')

  document.querySelector('main').appendChild(popScore)

  const timeout = setTimeout(() => {
    popScore.remove()
  }, 750)

  return () => clearTimeout(timeout)
}

const cruchFive = () => {
  //check rows
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns - 4; c++) {
      const candy01 = board[r][c]
      const candy02 = board[r][c + 1]
      const candy03 = board[r][c + 2]
      const candy04 = board[r][c + 3]
      const candy05 = board[r][c + 4]
      const candy01Name = candy01.getAttribute('data-name')
      const candy02Name = candy02.getAttribute('data-name')
      const candy03Name = candy03.getAttribute('data-name')
      const candy04Name = candy04.getAttribute('data-name')
      const candy05Name = candy05.getAttribute('data-name')

      if (
        candy01Name === candy02Name &&
        candy02Name === candy03Name &&
        candy03Name === candy04Name &&
        candy04Name === candy05Name &&
        candy01Name !== BLANK
      ) {
        candy01.setAttribute('data-name', BLANK)
        candy01.setAttribute('src', BLANK_IMG_PATH)

        candy02.setAttribute('data-name', BLANK)
        candy02.setAttribute('src', BLANK_IMG_PATH)

        candy03.setAttribute('data-name', BLANK)
        candy03.setAttribute('src', BLANK_IMG_PATH)

        candy04.setAttribute('data-name', BLANK)
        candy04.setAttribute('src', BLANK_IMG_PATH)

        candy05.setAttribute('data-name', BLANK)
        candy05.setAttribute('src', BLANK_IMG_PATH)

        score += 20

        createPop(candy03, 20)
      }
    }
  }

  //check columns
  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows - 4; r++) {
      const candy01 = board[r][c]
      const candy02 = board[r + 1][c]
      const candy03 = board[r + 2][c]
      const candy04 = board[r + 3][c]
      const candy05 = board[r + 4][c]
      const candy01Name = candy01.getAttribute('data-name')
      const candy02Name = candy02.getAttribute('data-name')
      const candy03Name = candy03.getAttribute('data-name')
      const candy04Name = candy04.getAttribute('data-name')
      const candy05Name = candy05.getAttribute('data-name')

      if (
        candy01Name === candy02Name &&
        candy02Name === candy03Name &&
        candy03Name === candy04Name &&
        candy04Name === candy05Name &&
        candy01Name !== BLANK
      ) {
        candy01.setAttribute('data-name', BLANK)
        candy01.setAttribute('src', BLANK_IMG_PATH)

        candy02.setAttribute('data-name', BLANK)
        candy02.setAttribute('src', BLANK_IMG_PATH)

        candy03.setAttribute('data-name', BLANK)
        candy03.setAttribute('src', BLANK_IMG_PATH)

        candy04.setAttribute('data-name', BLANK)
        candy04.setAttribute('src', BLANK_IMG_PATH)

        candy05.setAttribute('data-name', BLANK)
        candy05.setAttribute('src', BLANK_IMG_PATH)

        score += 20

        createPop(candy03, 20)
      }
    }
  }
}
const cruchFour = () => {
  //check rows
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns - 3; c++) {
      const candy01 = board[r][c]
      const candy02 = board[r][c + 1]
      const candy03 = board[r][c + 2]
      const candy04 = board[r][c + 3]
      const candy01Name = candy01.getAttribute('data-name')
      const candy02Name = candy02.getAttribute('data-name')
      const candy03Name = candy03.getAttribute('data-name')
      const candy04Name = candy04.getAttribute('data-name')

      if (
        candy01Name === candy02Name &&
        candy02Name === candy03Name &&
        candy03Name === candy04Name &&
        candy01Name !== BLANK
      ) {
        candy01.setAttribute('data-name', BLANK)
        candy01.setAttribute('src', BLANK_IMG_PATH)

        candy02.setAttribute('data-name', BLANK)
        candy02.setAttribute('src', BLANK_IMG_PATH)

        candy03.setAttribute('data-name', BLANK)
        candy03.setAttribute('src', BLANK_IMG_PATH)

        candy04.setAttribute('data-name', BLANK)
        candy04.setAttribute('src', BLANK_IMG_PATH)

        score += 15

        createPop(candy02, 15)
      }
    }
  }

  //check columns
  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows - 3; r++) {
      const candy01 = board[r][c]
      const candy02 = board[r + 1][c]
      const candy03 = board[r + 2][c]
      const candy04 = board[r + 3][c]
      const candy01Name = candy01.getAttribute('data-name')
      const candy02Name = candy02.getAttribute('data-name')
      const candy03Name = candy03.getAttribute('data-name')
      const candy04Name = candy04.getAttribute('data-name')

      if (
        candy01Name === candy02Name &&
        candy02Name === candy03Name &&
        candy03Name === candy04Name &&
        candy01Name !== BLANK
      ) {
        candy01.setAttribute('data-name', BLANK)
        candy01.setAttribute('src', BLANK_IMG_PATH)

        candy02.setAttribute('data-name', BLANK)
        candy02.setAttribute('src', BLANK_IMG_PATH)

        candy03.setAttribute('data-name', BLANK)
        candy03.setAttribute('src', BLANK_IMG_PATH)

        candy04.setAttribute('data-name', BLANK)
        candy04.setAttribute('src', BLANK_IMG_PATH)

        score += 15

        createPop(candy02, 15)
      }
    }
  }
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

        score += 10

        createPop(candy02, 10)
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

        score += 10

        createPop(candy02, 10)
      }
    }
  }
}

const crushCandy = () => {
  cruchFive()
  cruchFour()
  cruchThree()
  document.querySelector('#score').textContent = score
}

const slideCandy = () => {
  for (let c = 0; c < columns; c++) {
    let ind = rows - 1
    for (let r = rows - 1; r >= 0; r--) {
      if (board[r][c].getAttribute('data-name') !== BLANK) {
        board[ind][c].setAttribute(
          'data-name',
          board[r][c].getAttribute('data-name')
        )
        board[ind][c].src = board[r][c].src

        ind -= 1
      }
    }

    for (let r = ind; r >= 0; r--) {
      board[r][c].setAttribute('data-name', BLANK)
      board[r][c].src = BLANK_IMG_PATH
    }
  }
}

const generateCandy = () => {
  for (let c = 0; c < columns; c++) {
    if (board[0][c].getAttribute('data-name') === BLANK) {
      const candy = setRandom(candies)

      board[0][c].setAttribute('data-name', candy)
      board[0][c].src = `./images/${candy}.png`
    }
  }
}
// drag events
const onDragstart = e => {
  curCandy = e.target
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
  otherCandy = e.target
}

const onDragend = () => {
  // prevent swap with blank
  if (
    curCandy.getAttribute('data-name') === BLANK ||
    otherCandy.getAttribute('data-name') === BLANK
  )
    return

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

      curCandy.src = otherImg
      otherCandy.src = curImg

      curCandy.setAttribute('data-name', otherName)
      otherCandy.setAttribute('data-name', curName)

      const isValid = checkValid()

      if (!isValid) {
        const curImg = curCandy.src
        const otherImg = otherCandy.src
        const curName = curCandy.getAttribute('data-name')
        const otherName = otherCandy.getAttribute('data-name')

        curCandy.src = otherImg
        otherCandy.src = curImg

        curCandy.setAttribute('data-name', otherName)
        otherCandy.setAttribute('data-name', curName)
        return
      }
    }
  }

  const timeout = setTimeout(swapImgs, 200)

  return () => clearTimeout(timeout)
}

// touch events
const onTouchstart = e => {
  curCandy = e.target
  initX = e.touches[0].clientX
  initY = e.touches[0].clientY

  // console.log(initX, initY)
  // console.log(e)

  e.preventDefault()
}
const onTouchmove = e => {
  // console.log(e)
  const touchLocation = e.targetTouches[0]

  // assign box new coordinates based on the touch.
  moveRight = touchLocation.clientX - initX
  moveDown = touchLocation.clientY - initY

  const moveHoriz = Math.abs(moveRight) >= Math.abs(moveDown)
  curCandy.style.position = 'relative'
  const halfCandyWidth = curCandy.clientWidth / 2
  const halfCandyHeight = curCandy.clientHeight / 2

  if (moveHoriz) {
    curCandy.style.top = 0
    curCandy.style.left =
      moveRight >= 0 ? `${halfCandyWidth}px` : `-${halfCandyWidth}px`
  }
  if (!moveHoriz) {
    curCandy.style.left = 0
    curCandy.style.top =
      moveDown >= 0 ? `${halfCandyHeight}px` : `-${halfCandyHeight}px`
  }
  e.preventDefault()
}

const onTouchend = e => {
  const isMoveHoriz = Math.abs(moveRight) >= Math.abs(moveDown)
  const curCandyRowColumn = curCandy.id.split('-')

  if (isMoveHoriz) {
    otherCandy =
      board[curCandyRowColumn[0]][
        moveRight >= 0 ? +curCandyRowColumn[1] + 1 : +curCandyRowColumn[1] - 1
      ]
  }
  if (!isMoveHoriz) {
    otherCandy =
      board[
        moveDown >= 0 ? +curCandyRowColumn[0] + 1 : +curCandyRowColumn[0] - 1
      ][curCandyRowColumn[1]]
  }

  onDragend()

  curCandy.style.position = 'static'

  e.preventDefault()
}
const onTouchcancel = e => {
  console.log(e)
  e.preventDefault()
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

      tile.addEventListener('touchstart', onTouchstart)
      tile.addEventListener('touchmove', onTouchmove)
      tile.addEventListener('touchend', onTouchend)
      tile.addEventListener('touchcancel', onTouchcancel)
    }
    board.push(row)
  }
}

window.onload = () => {
  startGame()

  const interval = setInterval(() => {
    crushCandy()
    slideCandy()
    generateCandy()
  }, 100)

  setInterval(() => {}, interval)

  return () => clearInterval(interval)
}
