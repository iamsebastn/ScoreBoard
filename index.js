let scoreElHome = document.getElementById("home-score")
let scoreElGuest = document.getElementById("guest-score")

let scoreHome = 0
let scoreAway = 0

let newGame = 0

function addOneH() {
    scoreHome += 1
    scoreElHome.textContent = scoreHome
}

function addTwoH() {
    scoreHome += 2
    scoreElHome.textContent = scoreHome
}

function addThreeH() {
    scoreHome += 3
    scoreElHome.textContent = scoreHome
}

function addOneG() {
    scoreAway += 1
    scoreElGuest.textContent = scoreAway
}

function addTwoG() {
    scoreAway += 2
    scoreElGuest.textContent = scoreAway
}

function addThreeG() {
    scoreAway += 3
    scoreElGuest.textContent = scoreAway
}

function reset() {
    scoreElHome.textContent = 0
    scoreElGuest.textContent = 0
    scoreHome = 0
    scoreAway = 0
}