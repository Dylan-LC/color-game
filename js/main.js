var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var select = document.querySelector(".selected");
// var easyBtn = document.querySelector("#easyBtn");
// var hardBtn = document.querySelector("#hardBtn");

init();

function init(){
  setUpModeButtons();
  setUpSquares();
  reset();
}

function setUpModeButtons(){
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      select = document.querySelector(".selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    });
  }
}

function setUpSquares(){
  for(var i = 0; i < squares.length; i++){
    // squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor;
      if(clickedColor === pickedColor){
        colorDisplay.textContent = this.style.backgroundColor;
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        select.style.background = clickedColor;
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again!";
      }
    });
  }
}


// easyBtn.addEventListener("click", function(){
//   easyBtn.classList.add("selected");
//   hardBtn.classList.remove("selected");
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i = 0; i < squares.length; i++){
//     if(colors[i]){
//       squares[i].style.backgroundColor = colors[i];
//     } else {
//       squares[i].style.display = "none";
//     }
//   }
// });
//
// hardBtn.addEventListener("click", function(){
//   easyBtn.classList.remove("selected");
//   hardBtn.classList.add("selected");
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i = 0; i < squares.length; i++){
//     squares[i].style.backgroundColor = colors[i];
//     squares[i].style.display = "block";
//   }
// });

resetButton.addEventListener("click", function(){
  reset();
});

colorDisplay.textContent = pickedColor;


function reset(){
  resetButton.textContent = "New Colors";
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

function changeColors(color){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;
  }
  // select.style.background = "color";
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  var arr = [];
  for(var i = 0; i < num; i++){
    arr.push(randomColor());
  };
  return arr;
}

function randomColor(){
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r +", " + g +", " + b + ")";
}
