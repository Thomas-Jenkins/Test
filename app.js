import { renderFighterCard } from "./render-fighters.js"; 
import { fighterTemplate } from "./fighter-data.js";
import { renderCells } from "./render-board.js";
import { renderFighter } from "./render-fighters.js";
const board = document.querySelector('#board');
const ui = document.querySelector('#ui');

let cells = 64;


for (let i = 0; i < cells; i++) {
    renderCells();
}
renderFighterCard();

// renderFighter();

// renderFighter(loc);

















// let cellColumns = [1];
// let cellRows = [1];
// let varOne = 1;
// let varTwo = 1;

// for (let cell of cellColumns) {
//     if (cellColumns.length < 9) {
//         renderColumns();
//     } 
// }


// function renderColumns() {
//     const buildColumns = document.createElement('div'); 
//     board.append(buildColumns);
//     buildColumns.classList.add(`column-class-${varOne}`);
//     varOne++;
//     cellColumns.push(1);
//     let a = [1, 1, 1, 1, 1, 1, 1, 1];
//     for (let booger of a){
//         const buildRows = document.createElement('div');
//         buildColumns.append(buildRows);
//         buildRows.classList.add(`row-class-${varTwo}`);
//         varTwo++;   
//     } if (varTwo > 8) {
//         varTwo = 1;
//     }
//     return buildColumns;
// }



// while (cellColumns < 8) {
//     const buildColumns = document.createElement('div');
//     board.append(buildColumns);

//     buildColumns.classList.add('column-class')
//     cellColumns++;

//     for (let cell of cellColumns){
//         while (cellRows < 8) {
//             const buildRows = document.createElement('div');
//             buildColumns.append(buildRows);
//             buildRows.classList.add('row-class')
//             cellRows++;
//         }
//     }      
// }


 // let varTwo = [1];
    // for (let i of varTwo) {
    //     if (varTwo < 9) {
    //         const buildRows = document.createElement('div');
    //         buildRows.classList.add('row-class');
    //         varTwo++;
    //     }
    // }