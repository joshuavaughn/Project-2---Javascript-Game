const card = {
    ID: "",
    iconID: "",
    icon: "",
    reveal: false,
}

let cards = [];

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
const difficultyLevel = document.querySelectorAll(`.difficulty`);
difficultyLevel.forEach((difficulty) => {
    difficulty.addEventListener("click", () => {
        switch (difficulty.id) {
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

        reveal(3);
        reveal(7);

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
                <div class="card" style="height: 20em; width: 15em; background-color: #818384;" id = "card${i}">
                    <div class="card-body d-flex justify-content-center align-items-center" style="">
                        <img src="./sources/images/question-mark.png" class="card-icon" alt="question-mark" id = "icon${i}">
                    </div>
                </div>
            </div>`;
            console.log (`first half ${i}`);
        } else {
            document.querySelector(`#row2`).innerHTML += `
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em; background-color: #818384;" id = "card${i}">
                    <div class="card-body d-flex justify-content-center align-items-center" style="">
                        <img src="./sources/images/question-mark.png" class="card-icon" alt="question-mark" id = "icon${i}">
                    </div>
                </div>
            </div>`;
            console.log (`second half ${i}`);
        }

        //initialize an object with card id
        cards.push({
            ID: `card${i}`,
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

    console.log(cards);
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
    let card = document.querySelector(`#card${index}`);
    let icon = document.querySelector(`#icon${index}`);

    card.style.backgroundColor = "white";
    card.style.borderStyle = "solid";
    card.style.borderWidth = "10px";
    card.style.borderColor = "#818384";

    icon.getAttributeNode("src").value = cards[index].icon;
    icon.style.width = "200px";
}

//make a reveal function, that reveals each card if clicked