const board = document.querySelector('#board');
let cells = 64;
let classAdd = 1;
let num = 0;

for (let i = 0; i < cells; i++) {
    renderCells();
    classAdd++;
    if (num !== 8) {
        num++;
    } else {
        num = 1
    }
    console.log(num);
}


function renderCells() {
    const cell = document.createElement('div');
    
    cell.classList.add(`cell-class`);
    cell.classList.add(`0${classAdd}`);
   
    board.append(cell);
    return cell;
}













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