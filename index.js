let scoreElHome = document.getElementById("home-score")
let scoreElGuest = document.getElementById("guest-score")
let restetEl = document.getElementById("reset-btn")

let scoreHome = 0
let scoreGuest = 0

let newGame = 0

function addOneH() {
    scoreHome += 1
    scoreElHome.innerText = scoreHome
}

function addTwoH() {
    scoreHome += 2
    scoreElHome.innerText = scoreHome
}

function addThreeH() {
    scoreHome += 3
    scoreElHome.innerText = scoreHome
}

function addOneG() {
    scoreGuest += 1
    scoreElGuest.innerText = scoreGuest
}

function addTwoG() {
    scoreGuest += 2
    scoreElGuest.innerText = scoreGuest
}

function addThreeG() {
    scoreGuest += 3
    scoreElGuest.innerText = scoreGuest
}

function reset() {
    scoreElHome.innerText = newGame
    scoreHome = 0
    scoreElGuest.innerText = newGame
    scoreGuest = 0
}
