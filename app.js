let turnX = true;
let buttons = document.querySelectorAll(".box");
let gameOver = false;
let winStatement = document.querySelector(".win-statement");
let resetButton = document.querySelector(".reset");
let clicks = 0;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

resetButton.addEventListener("click", () => {
    location.reload();
});

console.log(buttons)
buttons.forEach( (button) => {
    button.addEventListener("click", () => {
        if(gameOver) return;
        if(turnX) {
            button.textContent = "X";
            button.style.color = "#003049";
            turnX = false;
        }
        else {
            button.textContent = "O";
            button.style.color = "#d62828"
            turnX = true;
        }
        winStatement.style.visibility = "hidden";
        button.disabled = true;
        clicks++;
        winCheck(button.textContent)
        if (clicks === 9 && !gameOver) {
    
            winStatement.innerHTML = "It's a tie!";
            winStatement.style.visibility = "visible";
            gameOver = true;
        }
    });
});

function winCheck (sign) {
    for(let pattern of winPatterns) {
        if(buttons[pattern[0]].textContent === sign && buttons[pattern[1]].textContent === sign && buttons[pattern[2]].textContent === sign) {
            winStatement.style.visibility = "visible";
            winStatement.innerHTML = `<b class="win-sign" id="${sign}-color">${sign}</b> wins!`;
            gameOver = true;
            return;
        }
    }
};