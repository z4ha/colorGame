var colors = generateRandomColors(6)
var nbrOfSquares = 6
var squares = document.querySelectorAll('.square')
var colorDesplay = document.getElementById('colorDisplay')
var messageDisplay = document.querySelector('#message')
var topMenu = document.querySelector('h1')
var resetButton = document.querySelector('#reset')
var easyButton = document.getElementById('easyButton')
var hardButton = document.getElementById('hardButton')

var pickedColor = pickColor()

easyButton.addEventListener('click', function () {
  this.classList.add('selected');
  hardButton.classList.remove('selected');
  nbrOfSquares = 3
  reseter()
})

hardButton.addEventListener('click', function () {
  this.classList.add('selected');
  easyButton.classList.remove('selected');
  nbrOfSquares = 6
  reseter()
})

resetButton.addEventListener('click', reseter)

function reseter () {
  colors = generateRandomColors(nbrOfSquares)
  pickedColor = pickColor()
  for (var i = 0; i < squares.length; i++) {
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i]
      squares[i].style.display = "block"
    } else {
      squares[i].style.display = "none"
    }
  }

  topMenu.style.backgroundColor = 'steelblue'
  resetButton.textContent = 'New Colors'
  messageDisplay.textContent = ''
}

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

function randomSquare () {
  return Math.floor(Math.random() * colors.length)
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
