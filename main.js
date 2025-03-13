// display instructions
const instructionsModal = new bootstrap.Modal('#staticBackdrop');
instructionsModal.show(this);

let symbolURL = [
    "./sources/images/star.png", 
    "./sources/images/circle.png", 
    "./sources/images/heart.png", 
    "./sources/images/square.png", 
    "./sources/images/triangle.png"
];

let card = {
    variable: 0, //holds the index of the cards array
    reveal: false, //indicates if the card is revealed
    path: "" //path of the image
}

let availableCards = [];

// level of difficulty & card generator
const difficultyLevel = document.querySelectorAll(".difficulty");
difficultyLevel.forEach((difficulty) => {
    difficulty.addEventListener("click", () => {
        initialize(difficulty.id);

        const delay = 2000;

        reveal();

        window.setTimeout(() => {hide();}, delay);

        
    })
})

function initialize(level) {
    if (level == `easy`) {
        console.log(level);
        document.querySelector(`#card-container`).innerHTML = `        
        <div class="row mb-5">
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em; background-color: #818384;">
                    <div class="card-body d-flex justify-content-center align-items-center" style="">
                        <img src="./sources/images/question-mark.png" class="card-icon" alt="question-mark">
                    </div>
                </div>
            </div>
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em; background-color: #818384;">
                    <div class="card-body d-flex justify-content-center align-items-center" style="">
                        <img src="./sources/images/question-mark.png" class="card-icon" alt="question-mark">
                    </div>
                </div>
            </div>
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em; background-color: #818384;">
                    <div class="card-body d-flex justify-content-center align-items-center" style="">
                        <img src="./sources/images/question-mark.png" class="card-icon" alt="question-mark">
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em; background-color: #818384;">
                    <div class="card-body d-flex justify-content-center align-items-center" style="">
                        <img src="./sources/images/question-mark.png" class="card-icon" alt="question-mark">
                    </div>
                </div>
            </div>
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em; background-color: #818384;">
                    <div class="card-body d-flex justify-content-center align-items-center" style="">
                        <img src="./sources/images/question-mark.png" class="card-icon" alt="question-mark">
                    </div>
                </div>
            </div>
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em; background-color: #818384;">
                    <div class="card-body d-flex justify-content-center align-items-center" style="">
                        <img src="./sources/images/question-mark.png" class="card-icon" alt="question-mark">
                    </div>
                </div>
            </div>
        </div>`;

    } else if (level == "medium") {
        console.log(`medium`);
        document.querySelector(`#card-container`).innerHTML = `
        <div class="row mb-5">
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em; background-color: #818384;">
                    <div class="card-body d-flex justify-content-center align-items-center" style="">
                        <img src="./sources/images/question-mark.png" class="card-icon" alt="question-mark">
                    </div>
                </div>
            </div>
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em; background-color: #818384;">
                    <div class="card-body d-flex justify-content-center align-items-center" style="">
                        <img src="./sources/images/question-mark.png" class="card-icon" alt="question-mark">
                    </div>
                </div>
            </div>
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em; background-color: #818384;">
                    <div class="card-body d-flex justify-content-center align-items-center" style="">
                        <img src="./sources/images/question-mark.png" class="card-icon" alt="question-mark">
                    </div>
                </div>
            </div>
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em; background-color: #818384;">
                    <div class="card-body d-flex justify-content-center align-items-center" style="">
                        <img src="./sources/images/question-mark.png" class="card-icon" alt="question-mark">
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em; background-color: #818384;">
                    <div class="card-body d-flex justify-content-center align-items-center" style="">
                        <img src="./sources/images/question-mark.png" class="card-icon" alt="question-mark">
                    </div>
                </div>
            </div>
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em; background-color: #818384;">
                    <div class="card-body d-flex justify-content-center align-items-center" style="">
                        <img src="./sources/images/question-mark.png" class="card-icon" alt="question-mark">
                    </div>
                </div>
            </div>
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em; background-color: #818384;">
                    <div class="card-body d-flex justify-content-center align-items-center" style="">
                        <img src="./sources/images/question-mark.png" class="card-icon" alt="question-mark">
                    </div>
                </div>
            </div>
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em; background-color: #818384;">
                    <div class="card-body d-flex justify-content-center align-items-center" style="">
                        <img src="./sources/images/question-mark.png" class="card-icon" alt="question-mark">
                    </div>
                </div>
            </div>
        </div>`;

    } else if (level == "hard") {
        console.log(`hard`);

        document.querySelector(`#card-container`).innerHTML = `
        <div class="row mb-5">
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em; background-color: #818384;">
                    <div class="card-body d-flex justify-content-center align-items-center" style="">
                        <img src="./sources/images/question-mark.png" class="card-icon" alt="question-mark">
                    </div>
                </div>
            </div>
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em; background-color: #818384;">
                    <div class="card-body d-flex justify-content-center align-items-center" style="">
                        <img src="./sources/images/question-mark.png" class="card-icon" alt="question-mark">
                    </div>
                </div>
            </div>
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em; background-color: #818384;">
                    <div class="card-body d-flex justify-content-center align-items-center" style="">
                        <img src="./sources/images/question-mark.png" class="card-icon" alt="question-mark">
                    </div>
                </div>
            </div>
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em; background-color: #818384;">
                    <div class="card-body d-flex justify-content-center align-items-center" style="">
                        <img src="./sources/images/question-mark.png" class="card-icon" alt="question-mark">
                    </div>
                </div>
            </div>
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em; background-color: #818384;">
                    <div class="card-body d-flex justify-content-center align-items-center" style="">
                        <img src="./sources/images/question-mark.png" class="card-icon" alt="question-mark">
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em; background-color: #818384;">
                    <div class="card-body d-flex justify-content-center align-items-center" style="">
                        <img src="./sources/images/question-mark.png" class="card-icon" alt="question-mark">
                    </div>
                </div>
            </div>
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em; background-color: #818384;">
                    <div class="card-body d-flex justify-content-center align-items-center" style="">
                        <img src="./sources/images/question-mark.png" class="card-icon" alt="question-mark">
                    </div>
                </div>
            </div>
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em; background-color: #818384;">
                    <div class="card-body d-flex justify-content-center align-items-center" style="">
                        <img src="./sources/images/question-mark.png" class="card-icon" alt="question-mark">
                    </div>
                </div>
            </div>
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em; background-color: #818384;">
                    <div class="card-body d-flex justify-content-center align-items-center" style="">
                        <img src="./sources/images/question-mark.png" class="card-icon" alt="question-mark">
                    </div>
                </div>
            </div>
                        <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em; background-color: #818384;">
                    <div class="card-body d-flex justify-content-center align-items-center" style="">
                        <img src="./sources/images/question-mark.png" class="card-icon" alt="question-mark">
                    </div>
                </div>
            </div>
        </div>`;

    } else {
        console.log(`none`);
    }
}

function reveal() {

    const cards = document.querySelectorAll(".card");
    const cardIcon = document.querySelectorAll(".card-icon");

    let arrayLength = cards.length;

    let halfLength = arrayLength/2; //indicate to restart the symbol

    console.log(`halfLength = ${halfLength}`);

    let symbolCounter = 0;


    // cardIcon[3].getAttributeNode("src").value = "https://placehold.co/50x50/png";

    for (let i = 0; i < arrayLength; i++){

        console.log(i);

        console.log(`symbolCounter = ${symbolCounter}`);

        cards[i].style.backgroundColor = "white";
        cards[i].style.borderStyle = "solid";
        cards[i].style.borderWidth = "10px";
        cards[i].style.borderColor = "#818384";

        availableCards.push(
            {
                variable: i,
                reveal: false,
                path: symbolURL[symbolCounter]
            }
        );

        console.log(availableCards[i]);

        cardIcon[i].getAttributeNode("src").value = availableCards[i].path;

        cardIcon[i].style.width = "200px";

        console.log(availableCards[i].path);

        console.log(symbolURL[symbolCounter]);


        if (symbolCounter >= halfLength - 1) {
            symbolCounter = 0;
        } else {
            symbolCounter++;
        }
    }

    // cardIcon[0].getAttributeNode("src").value = "https://placehold.co/50x50";

}

function hide() {
    const cards = document.querySelectorAll(".card");
    const cardIcon = document.querySelectorAll(".card-icon");

    let arrayLength = cards.length;

    for (let i = 0; i < arrayLength; i++){
        cards[i].style.backgroundColor = "#818384";
        cards[i].style.borderStyle = "none";

        cardIcon[i].getAttributeNode("src").value = "./sources/images/question-mark.png";

        cardIcon[i].style.width = "50px";

    }
}

//click a card

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
    card.addEventListener("click", () => {
        //know which card was clicked

        //update reveal attribute

        //reveal clicked

        //check if all is clicked
    })
})

//hide with clicked shown

