export let playerStats = {
    balance: 5000,
    totalBet: 0,
    amountWon: 0,
};

export function saveToStorage(){
    localStorage.setItem('playerStats', JSON.stringify(playerStats));
}

export function loadFromStorage(){
    let data = localStorage.getItem('playerStats');
    if(data){
        playerStats = JSON.parse(data);
    }
    else console.log("Couldn't load player stats");
}