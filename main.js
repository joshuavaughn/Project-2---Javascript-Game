const card = {
    ID: -1,
    iconID: "",
    icon: "",
    reveal: false,
}

const CARDS = document.querySelectorAll(`.card`);

let cardsArray = [];

let pair = [];

const iconArray = [
    "./sources/images/star.png", 
    "./sources/images/circle.png", 
    "./sources/images/heart.png", 
    "./sources/images/square.png", 
    "./sources/images/triangle.png"
]

let gameScore = 0;

window.addEventListener('resize', checkOrientation);
window.addEventListener('load', checkOrientation);

// set level
const LEVEL = document.querySelectorAll(`.difficulty`);
LEVEL.forEach((level) => {
    level.addEventListener("click", async () => {
        switch (level.id) {
            case `easy`: 
                initialize(6);
                break;
            case `medium`: 
                initialize(8);
                break;
            case `hard`: 
                initialize(10);
                break;
        }

        const toReveal = await revealAll();
        console.log(toReveal);

        const toShuffle = await shuffle();
        console.log(toShuffle);

        checkCard ();
    })
})

async function initialize (numberOfCards) {
    const halfCards = numberOfCards / 2;
    let iconCounter = 0;

    // empty containers
    document.querySelector(`#row1`).innerHTML = ``;
    document.querySelector(`#row2`).innerHTML = ``;

    // populate container
    for (let i = 0; i < numberOfCards; i++){
        if (i < halfCards) {
            //make card
            document.querySelector(`#row1`).innerHTML += `
            <div class="col d-flex justify-content-center">
                <button class="card" style="height: 15vw; width: 12vw; max-width: 200px; max-height: 300px; background-color: #818384;" id = "card${i}">
                    <div class="card-body d-flex justify-content-center align-items-center">
                        <img src="./sources/images/question-mark.png" class="card-icon" alt="question-mark" id = "icon${i}"  style="max-width: 15vw; height: auto;">
                    </div>
                </button>
            </div>`;
        } else {
            document.querySelector(`#row2`).innerHTML += `
            <div class="col d-flex justify-content-center">
                <button class="card" style="height: 15vw; width: 12vw; max-width: 200px; max-height: 300px; background-color: #818384;" id = "card${i}">
                    <div class="card-body d-flex justify-content-center align-items-center">
                        <img src="./sources/images/question-mark.png" class="card-icon" alt="question-mark" id = "icon${i}"  style="max-width: 15vw; height: auto;">
                    </div>
                </button>
            </div>`;
        }

        //initialize an object with card id
        cardsArray.push({
            ID: i,
            iconID: `icon${i}`,
            icon: iconArray[iconCounter],
            reveal: false
        })
        
        // repeat icon indicator
        if (i == halfCards - 1) {
            iconCounter = 0;
        } else {
            iconCounter++;
        }
    }
}

function revealAll() {
    const displayCards = document.querySelectorAll(`.card`);
    displayCards.forEach((display) => {
        display.style.backgroundColor = "white";
        display.style.borderStyle = "solid";
        display.style.borderWidth = "0.3em";
        display.style.borderColor = "#818384";

        let displayIcon = document.querySelector(`#icon${display.id[4]}`);
        displayIcon.getAttributeNode("src").value = cardsArray[display.id[4]].icon;
        displayIcon.style.width = "15vw";
    });

    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const thisCards = document.querySelectorAll(`.card`);
            thisCards.forEach((hideCard) => {
                hideCard.style.backgroundColor = "#818384";
                hideCard.style.borderStyle = "none";
    
                let displayIcon = document.querySelector(`#icon${hideCard.id[4]}`);
                displayIcon.getAttributeNode("src").value = "./sources/images/question-mark.png";
                displayIcon.style.width = "10vw";    // ✅ Responsive width
                displayIcon.style.maxWidth = "50px"; // ✅ Limits max width
                displayIcon.style.height = "auto";   // ✅ Correct way to maintain aspect ratio
            })

            let toReturn = true;

            if (toReturn) {
                resolve(`yay done revealAll`);
            } else {
                reject(`naur`);
            }
        }, 2000);
    })
}

function shuffle() {
    const shufflingModal = new bootstrap.Modal('#shuffleModal');
    shufflingModal.show(this);

    return new Promise((resolve, reject) => {
        const delay = 3500;
        window.setTimeout(() => {

            document.getElementById("closeShuffleModal").click();
            
            let currentIndex = cardsArray.length;

            // While there remain elements to shuffle...
            while (currentIndex != 0) {
                // Pick a remaining element...
                let randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                
                // And swap it with the current element.
                [cardsArray[currentIndex], cardsArray[randomIndex]] = [cardsArray[randomIndex], cardsArray[currentIndex]];
            }

            let toReturn = true;
            if (toReturn) {
                resolve(`yay done shuffling`);
            } else {
                reject(`naur`);
            }
        }, delay);

        
    })
}

function checkCard() {
    // reveal cards when clicked
    const displayCards = document.querySelectorAll(`.card`);
    displayCards.forEach((display) => {
    display.addEventListener ("click", () => {
        switch (display.id) {
            case `card0`: 
                reveal(0);
                break;
            case `card1`: 
                reveal(1);
                break;
            case `card2`: 
                reveal(2);
                break;
            case `card3`: 
                reveal(3);
                break;
            case `card4`: 
                reveal(4);
                break;
            case `card5`: 
                reveal(5);
                break;
            case `card6`: 
                reveal(6);
                break;
            case `card7`: 
                reveal(7);
                break;
            case `card8`: 
                reveal(8);
                break;
            case `card9`: 
                reveal(9);
                break;
        }  
    })
})
}

function reveal (index) {
    if (cardsArray[index].reveal == false) {
        let card = document.querySelector(`#card${index}`);
        let icon = document.querySelector(`#icon${index}`);
    
        card.style.backgroundColor = "white";
        card.style.borderStyle = "solid";
        card.style.borderWidth = "0.3em";
        card.style.borderColor = "#818384";
    
        icon.getAttributeNode("src").value = cardsArray[index].icon;
        icon.style.width = "12vw";

        cardsArray[index].reveal = true;

        pair.push(index);

        isFinished();
    } else {
        console.log(`card revealed already`);
    }
}

function isFinished() {
    if (pair.length == 2) {
        let card1 = document.querySelector(`#card${pair[0]}`);
        let card2 = document.querySelector(`#card${pair[1]}`);

        if (cardsArray[pair[0]].icon == cardsArray[pair[1]].icon) {
            console.log (`match found!`);
            card1.style.backgroundColor = "#E7F4D8";
            card1.style.borderStyle = "solid";
            card1.style.borderWidth = "0.3em";
            card1.style.borderColor = "#00B050";

            card2.style.backgroundColor = "#E7F4D8";
            card2.style.borderStyle = "solid";
            card2.style.borderWidth = "0.3em";
            card2.style.borderColor = "#00B050";

            gameScore++;
        } else {
            console.log (`try again`);
            card1.style.backgroundColor = "#FFB7B7";
            card1.style.borderStyle = "solid";
            card1.style.borderWidth = "0.3em";
            card1.style.borderColor = "#FF0000";

            card2.style.backgroundColor = "#FFB7B7";
            card2.style.borderStyle = "solid";
            card2.style.borderWidth = "0.3em";
            card2.style.borderColor = "#FF0000";
        }
        pair = [];

    } 

    for (let i = 0; i < cardsArray.length; i++) {
        if (cardsArray[i].reveal == false) {
            return;
        }
    }
    const endGameModal = new bootstrap.Modal('#endGameModal');
    endGameModal.show(this);

    let gameMessage = document.querySelector(`#gameScore`);
    if (gameScore >= (cardsArray.length / 2)) {
        gameMessage.innerHTML = `Congratulations you had ${gameScore}/${cardsArray.length/2}! 🎉`;
    } else {
        gameMessage.innerHTML = `Your score is ${gameScore}/${cardsArray.length/2}, try again!`;
    }

    document.querySelector(`#playAgain`).addEventListener("click", () =>{
        location.reload();
    })
}

function checkOrientation() {
    console.log(window.innerWidth);
    if (window.innerWidth <= 430) {
        console.log(`You are on mobile`);
    }

    if (window.innerHeight > window.innerWidth) {
        const resizeModal = new bootstrap.Modal('#resizeModal');
        resizeModal.show(this);
    } else {
        document.getElementById("closeResizeModal").click();
        const instructionsModal = new bootstrap.Modal('#staticBackdrop');
        instructionsModal.show(this);
    }
}
