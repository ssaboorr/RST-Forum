const startGame = document.querySelector('.start-game')

function gameStart() {
    let player_one_life = 100;
    let player_two_life = 100;
    const span_one = document.querySelector('.spanOne')
    const span_two = document.querySelector('.spanTwo')
    span_one.innerText = "Heatlh: " + player_one_life
    span_two.innerText = "Heatlh: " + player_two_life

    const box = document.querySelector('.box')


    const shoot_one = document.querySelector('.shootOne')
    const shoot_two = document.querySelector('.shootTwo')

    let score_one = document.querySelector('.score-one')
    let score_two = document.querySelector('.score-two')


    shoot_one.addEventListener('click', (e) => {
        const result = document.querySelector('.result')
        let player_one_score = 0

        let shoot_power = Math.floor(Math.random() * 5)
        player_two_life = player_two_life - shoot_power

        if (player_two_life >= 0) {
            span_two.innerText = "Heatlh: " + player_two_life


        } else {
            span_two.innerText = "Heatlh: 0"
            result.innerText = "Player One Wins"

            player_one_score++

            score_one.innerText = "Player One: " + player_one_score;

            const again = document.createElement('button')
            again.innerText = 'play again'


            box.append(again)

            return player_one_score



        }


    })


    shoot_two.addEventListener('click', () => {
        const result = document.querySelector('.result')
        let player_two_score = 0


        let shoot_power = Math.floor(Math.random() * 5)
        player_one_life = player_one_life - shoot_power
        span_one.innerText = "Heatlh: " + player_one_life

        if (player_one_life >= 0) {
            span_one.innerText = "Heatlh: " + player_one_life

        } else {
            span_one.innerText = "Heatlh: 0"
            result.innerText = "Player Two Wins"

            player_two_score++

            score_two.innerText = "Player Two: " + player_two_score;

            const again = document.createElement('button')
            again.innerText = 'play again'

            box.append(again)

            return player_two_score


        }

    })



}










startGame.addEventListener('click', gameStart())