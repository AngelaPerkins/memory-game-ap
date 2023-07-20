//I consulted the tutorial from FreeCode Camp
document.addEventListener('DOMContentLoaded', () => {

//card options
const cardArray = [
    {
        name: 'apple',
        img: 'images/apple.jpg'
    },
    {
        name: 'apple',
        img: 'images/apple.jpg' 
    },
    {
        name: 'bear',
        img: 'images/bear.jpg'
    },
    {
        name: 'bear',
        img: 'images/bear.jpg'
    },
    {
        name: 'cat-head',
        img: 'images/cat head.jpg'
    },
    {
        name: 'cat-head',
        img: 'images/cat head.jpg'
    },
    {
        name: 'Minion',
        img: 'images/Minion resized.jpg'
    },
    {
        name: 'Minion',
        img: 'images/Minion resized.jpg'
    },
    {
        name: 'pumpkin',
        img: 'images/pumpkin.jpg'
    },
    {
        name: 'pumpkin',
        img: 'images/pumpkin.jpg'
    },
    {
        name:'spock',
        img: 'images/spock.jpg'
    },
    {
        name:'spock',
        img: 'images/spock.jpg'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

//gameboard
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/marble.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

//Matches
function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/marble.jpg')
        cards[optionTwoId].setAttribute('src', 'images/marble.jpg')
        alert('You have clicked the same image')
    }

    else if (cardsChosen[0] === cardsChosen [1]) {
        alert ('You found a match')
        cards[optionOneId].setAttribute('src', 'images/white.jpg')
        cards[optionTwoId].setAttribute('src', 'images/white.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/marble.jpg')
        cards[optionTwoId].setAttribute('src', 'images/marble.jpg')
        alert ('Try Again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congrats! You won!'
    }
}

//flip
function flipCard(){
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 750)
    }
}
 createBoard()

 //buttons
var seconds = 00;
var tens = 00;
var outputSeconds = document.getElementById('seconds');
var outputTens = document.getElementById('tens');
var buttonStart = document.getElementById('btn-start');
var buttonStop = document.getElementById('btn-stop');
var buttonReset = document.getElementById('btn-reset');
var Interval;

buttonStart.addEventListener('click', () => {
    clearInterval(Interval);
    Interval = setInterval(startTime, 10);
});

buttonStop.addEventListener('click', () => {
    clearInterval(Interval);
});

buttonReset.addEventListener('click', () => {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    outputSeconds.innerHTML = seconds;
    outputTens.innerHTML = tens;
});

function startTime() {
    tens++;
    if (tens <= 9) {
        outputTens.innerHTML = "0" + tens;

    }
    if (tens > 9) {
        outputTens.innerHTML = tens;
    }
    if (tens > 99) {
        seconds++;
        outputSeconds.innerHTML = "0" + seconds;
        tens = 0;
        outputTens.innerHTML = "0" + tens;
    }
    if (seconds > 9) {
        outputSeconds.innerHTML = seconds;

    }
}

});