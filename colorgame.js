var nbrOfSquares = 6
var colors
var pickedColor

//selectors
var squares = document.querySelectorAll('.square')
var colorDesplay = document.getElementById('colorDisplay')
var messageDisplay = document.querySelector('#message')
var topMenu = document.querySelector('h1')
var resetButton = document.querySelector('#reset')
var modeButtons = document.querySelectorAll('.mode')

init()

function init(){
  // mode buttons listeners
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function () {
      modeButtons[0].classList.remove('selected')
      modeButtons[1].classList.remove('selected')
      this.classList.add('selected')
      this.textContent === 'Easy' ? nbrOfSquares = 3: nbrOfSquares = 6
      reseter()
    })
  }

  //reset button listener
  resetButton.addEventListener('click', reseter)
  //reset 
  reseter()
  //color squares listeners and adds colors
  setupsSquares()
}

function generateRandomColors (num) {
  var arr = []
  for (var i = 0; i < num; i++) {
    arr.push(colorRandomizer())
  }
  return arr
}

function colorRandomizer () {
  var arr = []
  for (var i = 0; i < 3; i++) {
    arr.push(randomRGBNumber())
  }
  return 'rgb(' + arr[0] + ', ' + arr[1] + ', ' + arr[2] + ')'
}

function randomRGBNumber () {
  return Math.floor(Math.random() * 256)
}


function changeColor (color) {
  // change squares colors
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color
  }
}

function pickColor () {
  var pick = colors[randomSquare()]
  colorDesplay.textContent = pick
  return pick
}

function randomSquare () {
  return Math.floor(Math.random() * colors.length)
}

function reseter () {
  colors = generateRandomColors(nbrOfSquares)
  pickedColor = pickColor()
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = 'block'
      squares[i].style.backgroundColor = colors[i]
    } else {
      squares[i].style.display = 'none'
    }
  }
  topMenu.style.backgroundColor = 'steelblue'
  resetButton.textContent = 'New Colors'
  messageDisplay.textContent = ''
}

function setupsSquares(){
  
    for (var i = 0; i < squares.length; i++) {
    // colors changer
    squares[i].style.backgroundColor = colors[i]
    // alert
    squares[i].addEventListener('click', function () {
      var clickedColor = this.style.backgroundColor
      // check if you win
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = 'Correct!'
        changeColor(clickedColor)
        resetButton.textContent = 'Play Again'
        // change h1 color
        topMenu.style.backgroundColor = pickedColor
      } else {
        this.style.backgroundColor = '#232323'
        messageDisplay.textContent = 'Try next color'
      }
    })
  }
}
