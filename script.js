let NUM_ROWS = 16;

let COLOR = '#A8A196';

let randomColor = false;
let enableDraw = false;


function createGrid(numRows=NUM_ROWS) {
    const grid = document.querySelector('#grid');

    for (let j = 0; j < numRows; j++){
        const rowDiv = document.createElement('div');
        rowDiv.className = "grid-row";
        grid.appendChild(rowDiv);
        for (let i = 0; i < numRows; i++) {
            const div = document.createElement('div');
            div.addEventListener('mouseover', colorDivByHover);
            div.addEventListener('mousedown', colorDivByHover);
            div.classList.add("grid-box");
            rowDiv.appendChild(div);
        }
    }
}


function colorDivByHover (event) {
    if (event.type == 'mouseover' && enableDraw == false) {
        return
    }

    if (randomColor) {
        event.target.style.backgroundColor = generateRandomColor();
    }
    else {
        event.target.style.backgroundColor = COLOR;
    }
    
}


function createNewGrid() {
    let numRows = prompt("How big should the grid be?");
    const grid = document.querySelector('#grid');
    removeAllChildNodes(grid);
    createGrid(numRows);
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


function generateRandomColor() {
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    let randColor = randomNumber.toString(16);
    randColor = randColor.padStart(6, '0');   

    return '#' + randColor.toUpperCase();
}




const grid = document.querySelector('#grid');
grid.addEventListener('mousedown', () => enableDraw = true);
grid.addEventListener('mouseup', () => enableDraw = false);


createGrid(NUM_ROWS);

const newGridButton = document.querySelector('#newGrid');
newGridButton.addEventListener('click', createNewGrid);


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