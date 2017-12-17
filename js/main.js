var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 0, 255)",
  "rgb(0, 255, 0)",
  "rgb(255, 0, 255)",
  "rgb(255, 255, 255)",
];

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var displayColor = document.getElementById("colorDisplay");

// displayColor.textContent = pickedColor;

for(var i=0; i < squares.length; i++){
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    // alert(this.style.backgroundColor);
    if(clickedColor === pickedColor){
      displayColor.textContent = this.style.backgroundColor;
      alert("Correct!");
    } else{
      alert("Wrong!");
    }
  })
}
