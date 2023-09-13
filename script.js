let NUM_BOXES = 16;
let NUM_ROWS = 16;

let randomColor = false;


function createGrid(numBoxes=NUM_BOXES, numRows=NUM_ROWS) {
    const grid = document.querySelector('#grid');

    for (let j = 0; j < numRows; j++){
        const rowDiv = document.createElement('div');
        rowDiv.className = "grid-row";
        grid.appendChild(rowDiv);
        for (let i = 0; i < numBoxes; i++) {
            const div = document.createElement('div');
            div.addEventListener('mouseover', () => colorDivByHover(div, randomColor));
            div.classList.add("grid-box");
            rowDiv.appendChild(div);
        }
    }
}

createGrid(NUM_BOXES, NUM_ROWS);

const newGridButton = document.querySelector('#newGrid');
newGridButton.addEventListener('click', resetGrid);


function colorDivByHover (div, randomColor) {
    if (randomColor) {
        div.style.backgroundColor = generateRandomColor();
    }
    else {
        div.style.backgroundColor = 'brown';
    }
}

function resetGrid() {
    let numRows = prompt("How big should the grid be?");
    const grid = document.querySelector('#grid');
    removeAllChildNodes(grid);
    createGrid(numRows, numRows);
    NUM_ROWS = numRows;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


function resetGridColor(grid, numRows) {
    removeAllChildNodes(grid);
    createGrid(numRows, numRows);
}

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => resetGridColor(grid, NUM_ROWS));


const randomColorButton = document.querySelector('#randomColor');
randomColorButton.addEventListener('click', () => {
    console.log(randomColor);
    if (randomColor == false) {
        randomColor = true;
        randomColorButton.style.backgroundColor = generateRandomColor();
    }
    else {
        randomColor = false;
        randomColorButton.style.removeProperty('background-Color');
    }
});

function generateRandomColor() {
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    let randColor = randomNumber.toString(16);
    randColor = randColor.padStart(6, '0');   

    return '#' + randColor.toUpperCase();

}