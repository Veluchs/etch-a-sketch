let NUM_BOXES = 16;
let NUM_ROWS = 16;


function createGrid(numBoxes=NUM_BOXES, numRows=NUM_ROWS) {
    const grid = document.querySelector('#grid');

    for (let j = 0; j < numRows; j++){
        const rowDiv = document.createElement('div');
        rowDiv.className = "grid-row";
        grid.appendChild(rowDiv);
        for (let i = 0; i < numBoxes; i++) {
            const div = document.createElement('div');
            div.addEventListener('mouseover', () => div.classList.add('hover'));
            div.classList.add("grid-box");
            rowDiv.appendChild(div);
        }
    }
}

createGrid(NUM_BOXES, NUM_ROWS);



const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', resetGrid);

function resetGrid() {
    let numRows = prompt("How big should the grid be?");
    const grid = document.querySelector('#grid');
    removeAllChildNodes(grid);
    createGrid(numRows, numRows);
    
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}