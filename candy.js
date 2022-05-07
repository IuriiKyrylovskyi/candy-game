const candies = ['Blue', 'Green', 'Orange', 'Purple', 'Red', 'Yellow']
const BLANK = 'blank'
const BLANK_IMG_PATH = './images/blank.png'

const rows = 9
const columns = 9
let board = []
let curCandy
let otherCandy
let score = 0

// for mobile
let initX
let initY
let moveX
let moveY
let moveOffsetX
let moveOffsetY
let touchedElement

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

  swapImgs()
}

// touch events
const onTouchstart = e => {
  e.preventDefault()
  curCandy = e.target
  const touch = e.touches[0]

  moveOffsetX = curCandy.offsetLeft - touch.pageX
  moveOffsetY = curCandy.offsetTop - touch.pageY

  const posX = e.changedTouches[0].pageX + moveOffsetX
  const posY = e.changedTouches[0].pageY + moveOffsetY

  initX = posX
  initY = posY

  touchedElement = document.createElement('img')
  touchedElement.classList.add('touch')
  touchedElement.src = curCandy.src
  touchedElement.style.left = posX + 'px'
  touchedElement.style.top = posY + 'px'

  document.querySelector('main').appendChild(touchedElement)

  curCandy.style.opacity = 0
}

const onTouchmove = e => {
  e.preventDefault()

  const posX = e.touches[0].pageX + moveOffsetX
  const posY = e.touches[0].pageY + moveOffsetY

  moveX = posX
  moveY = posY

  touchedElement.style.left = posX + 'px'
  touchedElement.style.top = posY + 'px'
}

const onTouchend = e => {
  e.preventDefault()

  const curCandyRowColumn = curCandy.id.split('-')
  const tochElement = document.querySelector('.touch')
  document.querySelector('main').removeChild(tochElement)

  const rightMove = moveX - initX
  const downMove = moveY - initY

  const isHorizontalMove = Math.abs(rightMove) - Math.abs(downMove) >= 0

  if (isHorizontalMove) {
    otherCandy =
      board[curCandyRowColumn[0]][
        rightMove >= 0 ? +curCandyRowColumn[1] + 1 : +curCandyRowColumn[1] - 1
      ]
  }
  if (!isHorizontalMove) {
    otherCandy =
      board[
        downMove >= 0 ? +curCandyRowColumn[0] + 1 : +curCandyRowColumn[0] - 1
      ][curCandyRowColumn[1]]
  }

  onDragend()

  curCandy.style.opacity = '1'
}

const onTouchcancel = e => {
  onTouchend()
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

      tile.addEventListener('touchstart', onTouchstart, false)
      tile.addEventListener('touchmove', onTouchmove, false)
      tile.addEventListener('touchend', onTouchend, false)
      tile.addEventListener('touchcancel', onTouchcancel, false)
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
