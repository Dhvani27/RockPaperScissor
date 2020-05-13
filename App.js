// JavaScript source code

const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playButton = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playButton.addEventListener("click", () => {

            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };


    const playGame = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player_hand");
        const computerHand = document.querySelector(".computer_hand");

        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {

            hand.addEventListener("animationend", function () {
                this.style.animation = "";
            });
        });


        // computer options

        const computerOptions = ["rock", "paper", "scissors"];


        options.forEach(option => {
            option.addEventListener("click", function () {


                // computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerchoice = computerOptions[computerNumber];


                setTimeout(() => {
                    compareHands(this.textContent, computerchoice);


                    // Update Images
                    playerHand.src = `../assets/${this.textContent}.png`;
                    computerHand.src = `../assets/${computerchoice}.png`;
                }, 2000);

                


                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";

            });
        });

        

    };


    const updateScore = () => {
        const playerscore = document.querySelector(".player_score p");
        const computerscore = document.querySelector(".computer_score p");
        playerscore.textContent = pScore;
        computerscore.textContent = cScore;


    }


    const compareHands = (playerChoice, computerchoice) => {

        const winner = document.querySelector(".winner");


        // Checking for a tie

        if (playerChoice === computerchoice) {
            winner.textContent = "Its a Tie";
            return;
        }

        //Check for Rock

        if (playerChoice === "rock") {
            if (computerchoice === "scissors") {
                winner.textContent = "Player Wins..!!";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer Wins..!!";
                cScore++;
                updateScore();
                return;
            }
        }

        //Check for paper

        if (playerChoice === "paper") {
            if (computerchoice === "scissors") {
                winner.textContent = "Computer Wins..!!";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Player Wins..!!";
                pScore++
                updateScore();
                return;
            }
        }

        // Check for scissors

        if (playerChoice === "scissors") {
            if (computerchoice === "rock") {
                winner.textContent = "Computer Wins..!!";
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Player Wins..!!";
                pScore++;
                updateScore();
                return;
            }
        }


    };






    startGame();
    playGame();

};


game();
