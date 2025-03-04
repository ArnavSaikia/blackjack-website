let playerStats = {
    balance: 5000,
    totalBet: 0,
    amountWon: 0,
}

function saveToStorage(){
    localStorage.setItem('playerStats', JSON.stringify(playerStats));
}

function loadFromStorage(){
    let data = localStorage.getItem('playerStats');
    if(data){
        playerStats = JSON.parse(data);
    }
    else console.log("Couldn't load player stats");
}

function initializeAmount(){
    loadFromStorage();
    playerStats.totalBet = 0;
    playerStats.amountWon = 0;
}

function addBet(amount){
    playerStats.totalBet += amount;
    playerStats.balance -= amount;
}

function renderAll(){
    document.querySelector('.balance-amount').innerHTML = `$${playerStats.balance}`;
    document.querySelector('.total-bet-amount').innerHTML = `$${playerStats.totalBet}`;
    document.querySelector('.amount-won-amount').innerHTML = `$${playerStats.amountWon}`;
}

document.querySelector('.js-1').addEventListener('click', () =>{
    addBet(1);
    //saveToStorage();
    renderAll();
});

document.querySelector('.js-10').addEventListener('click', () =>{
    addBet(10);
    //saveToStorage();
    renderAll();
});

document.querySelector('.js-50').addEventListener('click', () =>{
    addBet(50);
    //saveToStorage();
    renderAll();
});

document.querySelector('.js-100').addEventListener('click', () =>{
    addBet(100);
    //saveToStorage();
    renderAll();
});

document.querySelector('.js-500').addEventListener('click', () =>{
    addBet(500);
    //saveToStorage();
    renderAll();
});

document.querySelector('.js-1000').addEventListener('click', () =>{
    addBet(1000);
    //saveToStorage();
    renderAll();
});





//program flow
initializeAmount();
renderAll();