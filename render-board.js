let numOne = 0;
let numTwo = 1;
export let click = [];
export function renderCells() {
    const cell = document.createElement('div');
    cell.classList.add(`cell-class`);
    if (numOne !== 8) {
        numOne++;
    } else {
        numOne = 1
        numTwo++;
    }
    cell.setAttribute(`id`, `${numTwo}` + `-` + `${numOne}`);
    cell.addEventListener('click', () => {
        click.push(cell.id);
        if(click.length > 3) {
            click.shift();
        }
        // console.log(click);
        return click;
    });
    
    board.append(cell);
}