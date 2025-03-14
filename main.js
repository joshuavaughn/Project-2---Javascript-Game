const card = {
    ID: -1,
    iconID: "",
    icon: "",
    reveal: false,
}

let cardsArray = [];

const iconArray = [
    "./sources/images/star.png", 
    "./sources/images/circle.png", 
    "./sources/images/heart.png", 
    "./sources/images/square.png", 
    "./sources/images/triangle.png"
]

//display instructions
const instructionsModal = new bootstrap.Modal('#staticBackdrop');
instructionsModal.show(this);

// set level
const LEVEL = document.querySelectorAll(`.difficulty`);
LEVEL.forEach((level) => {
    level.addEventListener("click", () => {
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

        // reveal(3);
        // reveal(4);



    })
})

function initialize (numberOfCards) {
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
                <div class="card" style="height: 20em; width: 15em; background-color: #818384;" id = "${i}">
                    <div class="card-body d-flex justify-content-center align-items-center" style="">
                        <img src="./sources/images/question-mark.png" class="card-icon" alt="question-mark" id = "icon${i}">
                    </div>
                </div>
            </div>`;
            console.log (`first half ${i}`);
        } else {
            document.querySelector(`#row2`).innerHTML += `
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em; background-color: #818384;" id = "${i}">
                    <div class="card-body d-flex justify-content-center align-items-center" style="">
                        <img src="./sources/images/question-mark.png" class="card-icon" alt="question-mark" id = "icon${i}">
                    </div>
                </div>
            </div>`;
            console.log (`second half ${i}`);
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
            console.log (`iconCounter = ${iconCounter}`);
        } else {
            iconCounter++;
        }
    }

    revealAll();

    const delay = 2000;

    window.setTimeout(() => {
        const hideCards = document.querySelectorAll(`.card`);
        hideCards.forEach((hideCard) => {
            hideCard.style.backgroundColor = "#818384";
            hideCard.style.borderStyle = "none";

            let displayIcon = document.querySelector(`#icon${hideCard.id}`);

            displayIcon.getAttributeNode("src").value = "./sources/images/question-mark.png";

            displayIcon.style.width = "50px";
        })

        shuffle();
    }, delay);

    console.log(cardsArray);


}

function revealAll() {
    const displayCards = document.querySelectorAll(`.card`);
    displayCards.forEach((display) => {
        display.style.backgroundColor = "white";
        display.style.borderStyle = "solid";
        display.style.borderWidth = "10px";
        display.style.borderColor = "#818384";

        console.log(`display `);
        console.log(display.id);

        let displayIcon = document.querySelector(`#icon${display.id}`);

        displayIcon.getAttributeNode("src").value = cardsArray[display.id].icon;

        displayIcon.style.width = "200px";

        // cardIcon[i].style.width = "200px";

        // cards[display.id]
         
        // cardIcon[display.id].getAttributeNode("src").value = availableCards[i].path;

    });

    console.log(`reveal done`);
}

function shuffle() {
    let cards = document.querySelectorAll(`.card`);

    console.log(`shuffling`);

    console.log(cardsArray);
    
    let array = [1, 2, 3, 4, 5];

    let currentIndex = cardsArray.length;
      
    console.log(currentIndex);

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      
        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        console.log(randomIndex);
        
            // And swap it with the current element.
        [cardsArray[currentIndex], cardsArray[randomIndex]] = [
            cardsArray[randomIndex], cardsArray[currentIndex]];


        
        console.log(currentIndex);
    }

    console.log(`done shuffling`);
    console.log(cardsArray);


    revealAll();

    // reveal(0);
    // reveal(3);
}

// reveal cards when clicked
const displayCards = document.querySelectorAll(`.card`);
displayCards.forEach((display) => {
    display.addEventListener ("click", () => {
        switch (display) {
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

function reveal (index) {
    let card = document.querySelector(`#${index}`);
    let icon = document.querySelector(`#icon${index}`);

    card.style.backgroundColor = "white";
    card.style.borderStyle = "solid";
    card.style.borderWidth = "10px";
    card.style.borderColor = "#818384";

    icon.getAttributeNode("src").value = cards[index].icon;
    icon.style.width = "200px";
}

//make a reveal function, that reveals each card if clicked