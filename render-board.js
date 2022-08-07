let numOne = 0;
let numTwo = 1;
export function renderCells() {
    const cell = document.createElement('div');
    cell.classList.add(`cell-class`);
    if (numOne !== 8) {
        numOne++;
    } else {
        numOne = 1
        numTwo++;
    }
    cell.classList.add(`${numTwo}` + '-' + `${numOne}`);
    board.append(cell);
}