var numSquares = 9;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    //mode buttons event listeners
    setUpModeButtons();
   //changing squares listeners texts and background
    setUpSquares();
   //reset all colors
    reset();
}

function setUpModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            modeButtons[2].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent === "Easy") {
                numSquares = 3;
            } else if (this.textContent === "Medium") {
                numSquares = 6;
            } else {
                numSquares = 9;
            }
            reset();
        });
    }
}

function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.background;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
            } else {
                this.style.background = "black";
                messageDisplay.textContent = "Try Again!"
            }
        });
    }
}

 function reset() {
     colors = generateRandomColors(numSquares);
     pickedColor = pickColor();
     colorDisplay.textContent = pickedColor;
     messageDisplay.textContent = "";
     resetButton.textContent = "New Colors";
     for (var i = 0; i < squares.length; i++) {
         if (colors[i]) {
             squares[i].style.display = "block";
             squares[i].style.background = colors[i];
         } else if(colors[i]) {
             squares[i].style.display = "none";
         } else {
             squares[i].style.display = "none";
             squares[i].style.background = colors[i];
        }
     };
     h1.style.background = "steelblue";
 };

// easyBtn.addEventListener("click", function () {
//     resetButton.classList.remove("selected");
//     medBtn.classList.remove("selected");
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++){
//         if (colors[i]) {
//             squares[i].style.background = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     };
// });

// medBtn.addEventListener("click", function () {
//     resetButton.classList.remove("selected");
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.remove("selected");
//     medBtn.classList.add("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//         if (colors[i]) {
//             squares[i].style.background = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }

//     };
// });

// hardBtn.addEventListener("click", function () {
//     easyBtn.classList.remove("selected");
//     medBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     resetButton.classList.remove("selected");
//     numSquares = 9;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//          squares[i].style.background = colors[i];
//          squares[i].style.display = "block";

//     };
// });

resetButton.addEventListener("click", function () {
    // easyBtn.classList.remove("selected");
    // medBtn.classList.remove("selected");
    // hardBtn.classList.remove("selected");
    // resetButton.classList.add("selected");
    // numSquares = 9;
    // colors = generateRandomColors(numSquares);
    // pickedColor = pickColor();
    // colorDisplay.textContent = pickedColor;
    // messageDisplay.textContent = "";
    // this.textContent = "New Colors";
    // for (var i = 0; i < squares.length; i++){
    //   squares[i].style.background = colors[i];
    // }
    // h1.style.background = "steelblue";
    reset();
})

function changeColors(color) {
    //loop through all squares
    for (var i = 0; i < squares.length; i++)
        squares[i].style.background = color;
}
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++){
        //get random color and push into arr
        arr.push(randomColor())
    }
    return arr;
}
function randomColor() {
    //pick a "red" from 0-255
    var r =  Math.floor(Math.random() * 254);
    //pick a "green" from 0-255
    var g = Math.floor(Math.random() * 254);
    //pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 254);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}