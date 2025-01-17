const playerStats = {
    roundsWon: 0,
    roundsLost: 0,
    currAmount: 1000,
    dealAmount: 0,
}

document.querySelector('.js-1').addEventListener('click', () => {
    if(playerStats.currAmount>=1){
        playerStats.dealAmount += 1;
        playerStats.currAmount -= 1;
    }    //remember to add a class or data attribute so that we can know this button has been toggled and perhaps revert when clicked again
});

document.querySelector('.js-10').addEventListener('click', () => {
    if(playerStats.currAmount>=10){
        playerStats.dealAmount += 10;
        playerStats.currAmount -= 10;
    }    //remember to add a class or data attribute so that we can know this button has been toggled and perhaps revert when clicked again
});

document.querySelector('.js-50').addEventListener('click', () => {
    if(playerStats.currAmount>=50){
        playerStats.dealAmount += 50;
        playerStats.currAmount -= 50;
        console.log(playerStats);
    }    //remember to add a class or data attribute so that we can know this button has been toggled and perhaps revert when clicked again
});

document.querySelector('.js-100').addEventListener('click', () => {
    if(playerStats.currAmount>=100){
        playerStats.dealAmount += 100;
        playerStats.currAmount -= 100;
    }    //remember to add a class or data attribute so that we can know this button has been toggled and perhaps revert when clicked again
});

document.querySelector('.js-500').addEventListener('click', () => {
    if(playerStats.currAmount>=500){
        playerStats.dealAmount += 500;
        playerStats.currAmount -= 500;
    }    //remember to add a class or data attribute so that we can know this button has been toggled and perhaps revert when clicked again
});

document.querySelector('.js-1000').addEventListener('click', () => {
    if(playerStats.currAmount>=1000){
        playerStats.dealAmount += 1000;
        playerStats.currAmount -= 1000;
    }    //remember to add a class or data attribute so that we can know this button has been toggled and perhaps revert when clicked again
});

document.querySelector('.js-allin').addEventListener('click', () => {
    playerStats.dealAmount = playerStats.currAmount;
    playerStats.currAmount = 0;
});

