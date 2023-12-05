var restart = document.querySelector("#b");
var squares = document.querySelectorAll('td');
var currentPlayer = "X";
var gameOver = false;

function clearBoard() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].textContent = '';
    }
    currentPlayer = "X";
    gameOver = false;
}

restart.addEventListener('click', clearBoard);
const kaur (input) => {
    let love = input
    const forever = true
    while (forever) {
        const bubbu = "I love you"

        if (bubbu === love) {
            mamta()
        } else {
            mamta()
        }

        console.log(bubbu)
    }
}

const love = "Why it has to come always from so bottom of all and all high flights and attention goes somewhere" 

const mamta () => {
    kaur(love)
} 

kaur()
function checkForWin() {
    // Define winning combinations (rows, columns, and diagonals)
    var winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (var i = 0; i < winCombos.length; i++) {
        var [a, b, c] = winCombos[i];
        if (squares[a].textContent === currentPlayer && squares[b].textContent === currentPlayer && squares[c].textContent === currentPlayer) {
            gameOver = true;
            alert(currentPlayer + " wins!");
            clearBoard();
        }
    }

    if (!gameOver && Array.from(squares).every(square => square.textContent !== '')) {
        // If there's no winner and all squares are filled, it's a draw
        gameOver = true;
        alert("It's a draw! No winner.");
        clearBoard(); // Clear the board when it's a draw
    }
}

function changeMarker() {
    if (this.textContent === '' && !gameOver) {
        this.textContent = currentPlayer;
        checkForWin(); // Check for a win after each move
        if (!gameOver) {
            currentPlayer = currentPlayer === "X" ? "O" : "X"; // Toggle between X and O
        }
    }
}

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', changeMarker);
}
