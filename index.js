const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
let lastHole;
let timeUp = false;
let score = 0;

function randomTime(min, max) {
    // Let's create the random amount of time the mole shows up
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
        //if the same hole appears twice one after another, we want to avoid that
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

function peep1() {
    const time = randomTime(600, 1000);
    const hole = randomHole(holes);
    hole.classList.add("up");
    setTimeout(() => {
        if (!timeUp) peep1();
        hole.classList.remove("up");
    }, time); //after the time is up we want the moles to disappear and remove the class
}

function peep2() {
    const time = randomTime(200, 700);
    const hole = randomHole(holes);
    hole.classList.add("up");
    setTimeout(() => {
        if (!timeUp) peep2();
        hole.classList.remove("up");
    }, time); //after the time is up we want the moles to disappear and remove the class
}

function peep3() {
    const time = randomTime(200, 350);
    const hole = randomHole(holes);
    hole.classList.add("up");
    setTimeout(() => {
        if (!timeUp) peep3();
        hole.classList.remove("up");
    }, time); //after the time is up we want the moles to disappear and remove the class
}


function playerScore(e) {
    if (!e.isTrusted) return; // close out the fake clicks during the game
    score++;
    this.classList.remove("up");
    scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener("click", playerScore));

function startGame1() {
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    peep1();
    setTimeout(() => {
        timeUp = true;
        setTimeout(() => {
            scoreBoard.textContent = "end";

        }, 2000);
    }, 10000);
}

function startGame2() {
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    peep2();
    setTimeout(() => {
        timeUp = true;
        setTimeout(() => {
            scoreBoard.textContent = "end";

        }, 1000);

    }, 10000);
   
}

function startGame3() {
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    peep3();
    setTimeout(() => {
        timeUp = true;
        setTimeout(() => {
            scoreBoard.textContent = "end";

        }, 2000);
    }, 10000);
}
/*NIVEAUX*/
var speed = 50;

var i = 0;
var txt1 = 'NOVICE';

var j = 0;
var txt2 = "APPRENTI";

var k = 0;
var txt3 = "EXPERT";


function typeWriter1() {

    if (i < txt1.length) {
        document.getElementById("demo1").innerHTML += txt1.charAt(i);
        i++;
        setTimeout(typeWriter1, speed);
    }


}

function typeWriter2() {

    if (j < txt2.length) {
        document.getElementById("demo2").innerHTML += txt2.charAt(j);
        j++;
        setTimeout(typeWriter2, speed);
    }


}

function typeWriter3() {

    if (k < txt3.length) {
        document.getElementById("demo3").innerHTML += txt3.charAt(k);
        k++;
        setTimeout(typeWriter3, speed);
    }


}

$("#morty-play").click(function () {
    typeWriter1();
    typeWriter2();
    typeWriter3();
    myClick();
});

function myClick() {
    for (var i = 1; i <= 3; i++) {
        document.getElementById('demo' + i).addEventListener("click", function () {
            document.getElementById('demo1').style.display = 'none';
            document.getElementById('demo2').style.display = 'none';
            document.getElementById('demo3').style.display = 'none';
        });
    }


}
