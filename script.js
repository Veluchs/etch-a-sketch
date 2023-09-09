let NUM_BOXES = 16;

const grid = document.querySelector('#grid');

for (let i = 0; i < NUM_BOXES; i++) {
    const div = document.createElement('div');
    div.className = "grid-box";
    grid.appendChild(div);
}