const board = document.querySelector('#board');
const ui = document.querySelector('#ui');
import { fighters } from './fighter-data.js';

let temp = '1-1';
let numOne = 0;
let numTwo = 1;
let click = ['1-1'];


for (let i = 0; i < 64; i++) {
    renderCells();
}
renderFighterCard();
renderFighter();

function renderCells() {
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
        console.log(click);
        renderFighter();
        
        deRenderFighter();
        return click;
        
    });
    board.append(cell);
}

function displayFighter() {
    for (let fighter of fighters) {
        const fighterEl = renderFighter(fighter);

    }
}

function renderFighterCard() {
    const fighterCard = document.createElement('div');
    const fighterName = document.createElement('div');
    const fighterStats = document.createElement('div');
    const fighterHP = document.createElement('p');
    const fighterDef = document.createElement('p');
    const fighterResources = document.createElement('div');
    const fighterActionPoints = document.createElement('p');
    const fighterButtons = document.createElement('div');
    const fighterMove = document.createElement('button');
    const fighterAttack = document.createElement('button');
    const fighterOther = document.createElement('button');

    fighterCard.classList.add('unit-card');
    

    fighterName.textContent = fighters.name;
    fighterHP.textContent = `HP: `;
    fighterDef.textContent = 'Def: 12'
    fighterActionPoints.textContent = 'Action Points: 2/2';
    fighterMove.textContent = 'Move';
    fighterAttack.textContent = 'Attack';
    fighterOther.textContent = '...'

    ui.append(fighterCard);
    fighterCard.append(fighterName, fighterStats, fighterResources, fighterButtons);
    fighterStats.append(fighterHP, fighterDef);
    fighterResources.append(fighterActionPoints);
    fighterButtons.append(fighterMove, fighterAttack, fighterOther);
    
}

function renderFighter(fighter) {
    const lastLoc = click[click.length - 1];
    const fighterToken = document.createElement('div');
    const fighterImg = document.createElement('div');
    const location = document.getElementById(`${lastLoc}`);
    fighterToken.classList.add('fighter')
    fighterImg.classList.add('fighter-image')
    location.append(fighterToken);
    fighterToken.append(fighterImg);

    

}
function deRenderFighter() {
    const tick = click[click.length -2];
    
    const identity = document.getElementById(`${tick}`);
    console.log(identity);
    identity.removeChild(identity.firstChild);
    
}












































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