let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
let homeScore = 0;
let guestScore = 0;
let homeEl = document.getElementById("home-el");
let guestEl = document.getElementById("guest-el");

console.log(homeEl)

function add1Home() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
    highlightLeader();    
}

function add2Home() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
    highlightLeader();
}

function add3Home() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
    highlightLeader();
}

function add1Guest() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
    highlightLeader();
}

function add2Guest() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
    highlightLeader();
}

function add3Guest() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
    highlightLeader();
}

function highlightLeader() {
    homeEl.classList.remove("green-text", "white-text");
    guestEl.classList.remove("green-text", "white-text");
    if(homeScore > guestScore){
        homeEl.classList.add("green-text");
        guestEl.classList.add("white-text");
    }else if(guestScore > homeScore){
        guestEl.classList.add("green-text");
        homeEl.classList.add("white-text");
    }else{
        homeEl.classList.add("white-text");
        guestEl.classList.add("white-text");
    }
}



function newGame() {
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;  
    highlightLeader();  
}