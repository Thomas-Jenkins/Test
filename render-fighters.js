export function renderFighterCard() {
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
    

    fighterName.textContent = 'Fighter'
    fighterHP.textContent = 'HP 10/10'
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

export function renderFighter() {
    const fighterToken = document.createElement('div');
    const fighterImg = document.createElement('div');
    const location = document.getElementsByClassName('1-2');
    fighterImg.classList.add('fighter-image')
    location.append(fighterToken);
    fighterImg.append(fighterToken);
}
