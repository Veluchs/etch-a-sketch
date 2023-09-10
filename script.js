let NUM_BOXES = 16;
let NUM_ROWS = 16;

const grid = document.querySelector('#grid');

for (let j = 0; j < NUM_ROWS; j++){
    const rowDiv = document.createElement('div');
    rowDiv.className = "grid-row";
    grid.appendChild(rowDiv);
    for (let i = 0; i < NUM_BOXES; i++) {
        const div = document.createElement('div');
        div.addEventListener('mouseover', () => div.classList.add('hover'));
        div.classList.add("grid-box");
        rowDiv.appendChild(div);

    }
}