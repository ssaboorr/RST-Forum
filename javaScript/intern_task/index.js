// Create a 2 player shooting game.
// Each player has a health of 100.
// Players can shoot at each other with a random power (0-5) which will reduce the opponent's health.
// The Player whose health reaches 0, dies and the game ends.

// There are 5 such rounds, the player with the most game wins, wins the match/tournament.

console.log("working")

const startBtn = document.querySelector('.start-btn')
const shoot = document.querySelector('.shoot')
const again = document.querySelector('.play-again')
const restart = document.querySelector('.restart')
const spanOne = document.querySelector('.spanOne')
const spanTwo = document.querySelector('.spanTwo')




function game() {
    let playerOneHealth = 100;
    let playerTwoHealth = 100;

    let playerOneScore = 0;
    let playertwoScore = 0;

    let rounds = 0

    spanOne.innerText = "Player One: Health: " + playerOneHealth

    shootBtn.addEventListener('click', () => {
        let shoot_power_one = Math.floor(Math.random() * 5)
        let shoot_power_two = Math.floor(Math.random() * 5)
        playerOneHealth = playerOneHealth - shoot_power_two
        playerTwoHealth = playerTwoHealth - shoot_power_one






    })


}

startBtn.addEventListener('click', game())