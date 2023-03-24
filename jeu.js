console.log('Jeu démarré');

let box = document.querySelector('.box');
let click = 0;
let scoreElement = document.querySelector('#score');
let highScore = 0;
let bestScoreElement = document.querySelector('#bestScore');

let chrono = 10;
let chronoElement = document.querySelector('#chrono');
chronoElement.innerHTML = chrono;

function handleClick() {
  console.log('click sur la box !');
  click += 1;
  scoreElement.innerHTML = click;

  let top = Math.floor(Math.random() * window.innerHeight +100);
  let left = Math.floor(Math.random() * window.innerWidth +100);

  // Limit box movement so that the box will always apeare
  if (top + box.offsetHeight > window.innerHeight +100) {
    top = window.innerHeight +100 - box.offsetHeight;
  }
  if (left + box.offsetWidth > window.innerWidth +100) {
    left = window.innerWidth +100 - box.offsetWidth;
  }


  box.style.top = `${top}px`;
  box.style.left = `${left}px`;
}

box.addEventListener("click", handleClick);

// Check for high score in localStorage and update the best score
if (localStorage.getItem("highScore")) {
  highScore = localStorage.getItem("highScore");
  bestScoreElement.innerHTML = highScore;
}

let timerInterval = setInterval(() => {
  console.log("timer");
  if (chrono != 0) {
    chrono--;
    chronoElement.innerHTML = chrono;
  }

  if (chrono == 0) {
    clearInterval(timerInterval);
    box.removeEventListener("click", handleClick);

    // Check for new high score and update the localStorage and best score 
    if (click > highScore) {
      localStorage.setItem("highScore", click);
      highScore = click;
      bestScoreElement.innerHTML = highScore;
      //MESSAGE DE FELICITATION
      alert("Félicitations, vous avez battu le record !");
    }
  }
  // Show replay button
  let replayBtn = document.querySelector('#replayBtn');
  replayBtn.style.display = "block";

}, 1000);

//replay the game 


let replayBtn = document.querySelector('#replayBtn');
replayBtn.addEventListener('click', () => {
  let box = document.querySelector('.box');
let click = 0;
let scoreElement = document.querySelector('#score');
let highScore = 0;
let bestScoreElement = document.querySelector('#bestScore');

let chrono = 10;
let chronoElement = document.querySelector('#chrono');
chronoElement.innerHTML = chrono;

function handleClick() {
  console.log('click sur la box !');
  click += 1;
  scoreElement.innerHTML = click;

  let top = Math.floor(Math.random() * window.innerHeight +100);
  let left = Math.floor(Math.random() * window.innerWidth +100);

  // Limit box movement so that the box will always apeare
  if (top + box.offsetHeight > window.innerHeight +100) {
    top = window.innerHeight +100 - box.offsetHeight;
  }
  if (left + box.offsetWidth > window.innerWidth +100) {
    left = window.innerWidth +100 - box.offsetWidth;
  }

  box.style.top = `${top}px`;
  box.style.left = `${left}px`;
}

box.addEventListener("click", handleClick);

// Check for high score in localStorage and update the best score 
if (localStorage.getItem("highScore")) {
  highScore = localStorage.getItem("highScore");
  bestScoreElement.innerHTML = highScore;
}

let timerInterval = setInterval(() => {
  console.log("timer");
  if (chrono != 0) {
    chrono--;
    chronoElement.innerHTML = chrono;
  }

  if (chrono == 0) {
    clearInterval(timerInterval);
    box.removeEventListener("click", handleClick);

    // Check for new high score and update the localStorage and best score 
    if (click > highScore) {
      localStorage.setItem("highScore", click);
      highScore = click;
      bestScoreElement.innerHTML = highScore;
      alert("Félicitations, vous avez battu le record !");
    }
  }
  // Show replay button
  let replayBtn = document.querySelector('#replayBtn');
  replayBtn.style.display = "block";

}, 1000);
  return replayBtn;
});