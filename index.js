let homeBtnOne = document.getElementById("home-btn1")
let homeBtnTwo = document.getElementById("home-btn2")
let homeBtnThree = document.getElementById("home-btn3")

let guestBtnOne = document.getElementById("guest-btn1")
let guestBtnTwo = document.getElementById("guest-btn2")
let guestBtnThree = document.getElementById("guest-btn3")

let clear = document.getElementById("clear-btn")
let save = document.getElementById("save-btn")

let homeScoreEl = document.getElementById("home")
let guestScoreEl = document.getElementById("guest")


let homeScore = 0
let guestScore = 0

function increaseHomeOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function increaseHomeTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function increaseHomeThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function increaseGuestOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function increaseGuestTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function increaseGuestThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function clearScores() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
}

function saveScores() {
    
}


