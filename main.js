// display instructions
const instructionsModal = new bootstrap.Modal('#staticBackdrop')
instructionsModal.show(this);
  

// level of difficulty & card generator
const difficultyLevel = document.querySelectorAll(".difficulty");
difficultyLevel.forEach((difficulty) => {
    difficulty.addEventListener("click", () => {
        initialize(difficulty.id);
    })
})

function initialize(level) {
    if (level == `easy`) {
        console.log(level);

        document.querySelector(`#card-container`).innerHTML = `        
        <div class="row mb-5">
            <div class="col-4 d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em">
                    <div class="card-body d-flex justify-content-center align-items-center" style="background-color: #818384;">
                        <img src="./sources/images/question-mark.png" alt="question-mark">
                    </div>
                </div>
            </div>
            <div class="col-4 d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em">
                    <div class="card-body d-flex justify-content-center align-items-center" style="background-color: #818384;">
                        <img src="./sources/images/question-mark.png" alt="question-mark">
                    </div>
                </div>
            </div>
            <div class="col-4 d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em">
                    <div class="card-body d-flex justify-content-center align-items-center" style="background-color: #818384;">
                        <img src="./sources/images/question-mark.png" alt="question-mark">
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-4 d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em">
                    <div class="card-body d-flex justify-content-center align-items-center" style="background-color: #818384;">
                        <img src="./sources/images/question-mark.png" alt="question-mark">
                    </div>
                </div>
            </div>
            <div class="col-4 d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em">
                    <div class="card-body d-flex justify-content-center align-items-center" style="background-color: #818384;">
                        <img src="./sources/images/question-mark.png" alt="question-mark">
                    </div>
                </div>
            </div>
            <div class="col-4 d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em">
                    <div class="card-body d-flex justify-content-center align-items-center" style="background-color: #818384;">
                        <img src="./sources/images/question-mark.png" alt="question-mark">
                    </div>
                </div>
            </div>
        </div>`;

    } else if (level == "medium") {
        console.log(`medium`);

        document.querySelector(`#card-container`).innerHTML = `        <div class="row mb-5">
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em">
                    <div class="card-body d-flex justify-content-center align-items-center" style="background-color: #818384;">
                        <img src="./sources/images/question-mark.png" alt="question-mark">
                    </div>
                </div>
            </div>
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em">
                    <div class="card-body d-flex justify-content-center align-items-center" style="background-color: #818384;">
                        <img src="./sources/images/question-mark.png" alt="question-mark">
                    </div>
                </div>
            </div>
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em">
                    <div class="card-body d-flex justify-content-center align-items-center" style="background-color: #818384;">
                        <img src="./sources/images/question-mark.png" alt="question-mark">
                    </div>
                </div>
            </div>
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em">
                    <div class="card-body d-flex justify-content-center align-items-center" style="background-color: #818384;">
                        <img src="./sources/images/question-mark.png" alt="question-mark">
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em">
                    <div class="card-body d-flex justify-content-center align-items-center" style="background-color: #818384;">
                        <img src="./sources/images/question-mark.png" alt="question-mark">
                    </div>
                </div>
            </div>
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em">
                    <div class="card-body d-flex justify-content-center align-items-center" style="background-color: #818384;">
                        <img src="./sources/images/question-mark.png" alt="question-mark">
                    </div>
                </div>
            </div>
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em">
                    <div class="card-body d-flex justify-content-center align-items-center" style="background-color: #818384;">
                        <img src="./sources/images/question-mark.png" alt="question-mark">
                    </div>
                </div>
            </div>
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em">
                    <div class="card-body d-flex justify-content-center align-items-center" style="background-color: #818384;">
                        <img src="./sources/images/question-mark.png" alt="question-mark">
                    </div>
                </div>
            </div>
        </div>`;

    } else if (level == "hard") {
        console.log(`hard`);

        document.querySelector(`#card-container`).innerHTML = `
        <div class="row mb-5">
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em">
                    <div class="card-body d-flex justify-content-center align-items-center" style="background-color: #818384;">
                        <img src="./sources/images/question-mark.png" alt="question-mark">
                    </div>
                </div>
            </div>
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em">
                    <div class="card-body d-flex justify-content-center align-items-center" style="background-color: #818384;">
                        <img src="./sources/images/question-mark.png" alt="question-mark">
                    </div>
                </div>
            </div>
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em">
                    <div class="card-body d-flex justify-content-center align-items-center" style="background-color: #818384;">
                        <img src="./sources/images/question-mark.png" alt="question-mark">
                    </div>
                </div>
            </div>
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em">
                    <div class="card-body d-flex justify-content-center align-items-center" style="background-color: #818384;">
                        <img src="./sources/images/question-mark.png" alt="question-mark">
                    </div>
                </div>
            </div>
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em">
                    <div class="card-body d-flex justify-content-center align-items-center" style="background-color: #818384;">
                        <img src="./sources/images/question-mark.png" alt="question-mark">
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em">
                    <div class="card-body d-flex justify-content-center align-items-center" style="background-color: #818384;">
                        <img src="./sources/images/question-mark.png" alt="question-mark">
                    </div>
                </div>
            </div>
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em">
                    <div class="card-body d-flex justify-content-center align-items-center" style="background-color: #818384;">
                        <img src="./sources/images/question-mark.png" alt="question-mark">
                    </div>
                </div>
            </div>
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em">
                    <div class="card-body d-flex justify-content-center align-items-center" style="background-color: #818384;">
                        <img src="./sources/images/question-mark.png" alt="question-mark">
                    </div>
                </div>
            </div>
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em">
                    <div class="card-body d-flex justify-content-center align-items-center" style="background-color: #818384;">
                        <img src="./sources/images/question-mark.png" alt="question-mark">
                    </div>
                </div>
            </div>
            <div class="col d-flex justify-content-center">
                <div class="card" style="height: 20em; width: 15em">
                    <div class="card-body d-flex justify-content-center align-items-center" style="background-color: #818384;">
                        <img src="./sources/images/question-mark.png" alt="question-mark">
                    </div>
                </div>
            </div>
        </div>`;

    } else {
        console.log(`none`);
    }
}


