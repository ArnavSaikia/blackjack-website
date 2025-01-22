
//writing details of every card in cardsList

let usedCards= [];

const cardsList = [
    // Clubs
    { name: '2OfClubs', img: 'cards/2_of_clubs.svg', value: 2, altValue: 2, number: 14 },
    { name: '3OfClubs', img: 'cards/3_of_clubs.svg', value: 3, altValue: 3, number: 1 },
    { name: '4OfClubs', img: 'cards/4_of_clubs.svg', value: 4, altValue: 4, number: 52 },
    { name: '5OfClubs', img: 'cards/5_of_clubs.svg', value: 5, altValue: 5, number: 11 },
    { name: '6OfClubs', img: 'cards/6_of_clubs.svg', value: 6, altValue: 6, number: 9 },
    { name: '7OfClubs', img: 'cards/7_of_clubs.svg', value: 7, altValue: 7, number: 10 },
    { name: '8OfClubs', img: 'cards/8_of_clubs.svg', value: 8, altValue: 8, number: 50 },
    { name: '9OfClubs', img: 'cards/9_of_clubs.svg', value: 9, altValue: 9, number: 44 },
    { name: '10OfClubs', img: 'cards/10_of_clubs.svg', value: 10, altValue: 10, number: 30 },
    { name: 'JackOfClubs', img: 'cards/jack_of_clubs.svg', value: 10, altValue: 10, number: 25 },
    { name: 'QueenOfClubs', img: 'cards/queen_of_clubs.svg', value: 10, altValue: 10, number: 35 },
    { name: 'KingOfClubs', img: 'cards/king_of_clubs.svg', value: 10, altValue: 10, number: 47 },
    { name: 'AceOfClubs', img: 'cards/ace_of_clubs.svg', value: 11, altValue: 1, number: 13 },

    // Diamonds
    { name: '2OfDiamonds', img: 'cards/2_of_diamonds.svg', value: 2, altValue: 2, number: 37 },
    { name: '3OfDiamonds', img: 'cards/3_of_diamonds.svg', value: 3, altValue: 3, number: 39 },
    { name: '4OfDiamonds', img: 'cards/4_of_diamonds.svg', value: 4, altValue: 4, number: 21 },
    { name: '5OfDiamonds', img: 'cards/5_of_diamonds.svg', value: 5, altValue: 5, number: 22 },
    { name: '6OfDiamonds', img: 'cards/6_of_diamonds.svg', value: 6, altValue: 6, number: 8 },
    { name: '7OfDiamonds', img: 'cards/7_of_diamonds.svg', value: 7, altValue: 7, number: 19 },
    { name: '8OfDiamonds', img: 'cards/8_of_diamonds.svg', value: 8, altValue: 8, number: 32 },
    { name: '9OfDiamonds', img: 'cards/9_of_diamonds.svg', value: 9, altValue: 9, number: 6 },
    { name: '10OfDiamonds', img: 'cards/10_of_diamonds.svg', value: 10, altValue: 10, number: 40 },
    { name: 'JackOfDiamonds', img: 'cards/jack_of_diamonds.svg', value: 10, altValue: 10, number: 26 },
    { name: 'QueenOfDiamonds', img: 'cards/queen_of_diamonds.svg', value: 10, altValue: 10, number: 12 },
    { name: 'KingOfDiamonds', img: 'cards/king_of_diamonds.svg', value: 10, altValue: 10, number: 42 },
    { name: 'AceOfDiamonds', img: 'cards/ace_of_diamonds.svg', value: 11, altValue: 1, number: 49 },

    // Hearts
    { name: '2OfHearts', img: 'cards/2_of_hearts.svg', value: 2, altValue: 2, number: 31 },
    { name: '3OfHearts', img: 'cards/3_of_hearts.svg', value: 3, altValue: 3, number: 4 },
    { name: '4OfHearts', img: 'cards/4_of_hearts.svg', value: 4, altValue: 4, number: 45 },
    { name: '5OfHearts', img: 'cards/5_of_hearts.svg', value: 5, altValue: 5, number: 24 },
    { name: '6OfHearts', img: 'cards/6_of_hearts.svg', value: 6, altValue: 6, number: 41 },
    { name: '7OfHearts', img: 'cards/7_of_hearts.svg', value: 7, altValue: 7, number: 28 },
    { name: '8OfHearts', img: 'cards/8_of_hearts.svg', value: 8, altValue: 8, number: 15 },
    { name: '9OfHearts', img: 'cards/9_of_hearts.svg', value: 9, altValue: 9, number: 33 },
    { name: '10OfHearts', img: 'cards/10_of_hearts.svg', value: 10, altValue: 10, number: 23 },
    { name: 'JackOfHearts', img: 'cards/jack_of_hearts.svg', value: 10, altValue: 10, number: 43 },
    { name: 'QueenOfHearts', img: 'cards/queen_of_hearts.svg', value: 10, altValue: 10, number: 34 },
    { name: 'KingOfHearts', img: 'cards/king_of_hearts.svg', value: 10, altValue: 10, number: 29 },
    { name: 'AceOfHearts', img: 'cards/ace_of_hearts.svg', value: 11, altValue: 1, number: 16 },

    // Spades
    { name: '2OfSpades', img: 'cards/2_of_spades.svg', value: 2, altValue: 2, number: 36 },
    { name: '3OfSpades', img: 'cards/3_of_spades.svg', value: 3, altValue: 3, number: 48 },
    { name: '4OfSpades', img: 'cards/4_of_spades.svg', value: 4, altValue: 4, number: 5 },
    { name: '5OfSpades', img: 'cards/5_of_spades.svg', value: 5, altValue: 5, number: 51 },
    { name: '6OfSpades', img: 'cards/6_of_spades.svg', value: 6, altValue: 6, number: 38 },
    { name: '7OfSpades', img: 'cards/7_of_spades.svg', value: 7, altValue: 7, number: 27 },
    { name: '8OfSpades', img: 'cards/8_of_spades.svg', value: 8, altValue: 8, number: 46 },
    { name: '9OfSpades', img: 'cards/9_of_spades.svg', value: 9, altValue: 9, number: 18 },
    { name: '10OfSpades', img: 'cards/10_of_spades.svg', value: 10, altValue: 10, number: 17 },
    { name: 'JackOfSpades', img: 'cards/jack_of_spades.svg', value: 10, altValue: 10, number: 7 },
    { name: 'QueenOfSpades', img: 'cards/queen_of_spades.svg', value: 10, altValue: 10, number: 20 },
    { name: 'KingOfSpades', img: 'cards/king_of_spades.svg', value: 10, altValue: 10, number: 2 },
    { name: 'AceOfSpades', img: 'cards/ace_of_spades.svg', value: 11, altValue: 1, number: 3 }
];

let pCard=[]; let dCard=[];
let pSum=0; let dSum=0;
initializeCard();
renderCardValue('player');
renderCardValue('dealer');

function isAlreadySelected(chosen){
    for(let i=0;i<usedCards.length;i++){
        if(usedCards[i]===chosen){
            return true;
        }
    }
}


function generateRandom(){
    let selected = Math.floor(Math.random() * 52) + 1;  // Random number between 1 and 52
    while(isAlreadySelected(selected)){
        selected = Math.floor(Math.random() * 52) + 1
    }
    usedCards.push(selected);

    return selected;   
}

function returnCard(cardNumber){
    for(let i=0;i<cardsList.length;i++){
        if(cardsList[i].number===cardNumber){
            return cardsList[i];
        }
    }
}

function initializeCard(){
    pCard = [returnCard(generateRandom()),returnCard(generateRandom())];
    dCard = [returnCard(generateRandom()),returnCard(generateRandom())];

    let pCardHTML = `
            <img class="card" src="${pCard[0].img}">
            <img class="card" src="${pCard[1].img}">
        `;

    document.querySelector('.player-cards-area').innerHTML = pCardHTML;

    let dCardHTML = `
        <img class ="card back-of-card" src="cards/download1.jpg">
        <img class ="card" src="${dCard[0].img}">
    `
    document.querySelector('.dealer-cards-area').innerHTML = dCardHTML;
    assignValue('player');
    assignValue('dealer');
}

function dealAnotherCard(toWho){
    if(toWho==='player'){
        let card = returnCard(generateRandom());
        pCard.push(card);
        document.querySelector('.player-cards-area').innerHTML += `
            <img class ="card" src="${pCard[pCard.length-1].img}">
        `;
    }

    if(toWho==='dealer'){
        let card = returnCard(generateRandom());
        dCard.push(card);
        document.querySelector('.dealer-cards-area').innerHTML += `
            <img class ="card" src="${dCard[dCard.length-1].img}">
        `;
    }
}

function getTotalValue(ofWho){
    let sum=0;
    if(ofWho==='player'){
        pCard.forEach((curr) => {
            sum += curr.value;
        });
    }

    if(ofWho==='dealer'){
        dCard.forEach((curr) => {
            sum += curr.value;
        });
    }
    
    return sum;
}

function assignValue(toWho){
    toWho==='dealer'?dSum=getTotalValue('dealer'):pSum=getTotalValue('player');
}

function renderCardValue(ofWho){
    document.querySelector(`.${ofWho}-card-value`).innerHTML = `${ofWho==='player'?'Your Hand Value: ':"House's Hand Value: "}${getTotalValue(ofWho)}`;
}

function checkWinAfterStand(){
    if(dSum>21){
        assignValue('dealer');
        renderCardValue('dealer');
        alert('House Busted! You Win');
    }
    else if(pSum>dSum){
        assignValue('dealer');
        renderCardValue('dealer');
        alert('You Win');
    }
    else if(pSum===dSum){
        assignValue('dealer');
        renderCardValue('dealer');
        alert('It\'s a Draw');
    }
    else{
        assignValue('dealer');
        renderCardValue('dealer');
        alert('House Wins');
    }

}


document.querySelector('.hit-button').addEventListener('click',() => {
    dealAnotherCard('player');
    renderCardValue('player');
    assignValue('player');
    if(pSum>21){
        alert('Bust! You Lose');
    }
}); //addivng event listener to buttons

document.querySelector('.stand-button').addEventListener('click',() => {
    document.querySelector('.back-of-card').src = dCard[1].img;
    while(dSum<=17){
        dealAnotherCard('dealer');
        assignValue('dealer');
        renderCardValue('dealer');
    }
    checkWinAfterStand();
});