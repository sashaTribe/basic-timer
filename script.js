const startingMins = 10;
let time = startingMins * 60;
var isPaused = false;
const countdownValue = document.getElementById("clock");
setInterval(updateCounter, 1000);

function updateCounter() {
    const mins = Math.floor(time/60);
    let seconds = time%60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownValue.innerHTML=`${mins}:${seconds}`;
    if(!isPaused){
      time--;
    }else {
      countdownValue.innerHTML=`${mins}:${seconds}`;
    }
    
}

var timeLeft;

function pause () {
    if(!isPaused) {
      isPaused = true;
      alert("Timer paused.");
    }
  
}

function resume () {
   if(isPaused) {
     isPaused = false;
     updateCounter();
   }
}