const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");

let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingSeconds =0;
let leadingMinutes = 0;
let leadingHours = 0;

let timerInterval = null;
let timerStatus = "stopped";

function stopWatch(){
    seconds++

    if(seconds >= 60){
        seconds = 0;
        minutes ++;

        if(minutes >= 60){
            minutes = 0;
            hours++;
        }
    }
    // Formatting with leading zeros
    leadingSeconds = seconds < 10 ? "0" + seconds : seconds;
    leadingMinutes = minutes < 10 ? "0" + minutes : minutes;
    leadingHours = hours < 10 ? "0" + hours : hours;

    let displayTimer = document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

startStopBtn.addEventListener('click',function(){

    if(timerStatus === "stopped"){
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML = `<i class = "fa fa-pause" id="pause"></i>`;
        timerStatus = "started";
    }else{
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = `<i class = "fa fa-play" id="play"></i>`;
        timerStatus = "stopped";
    }
});
resetBtn.addEventListener('click',function(){
    clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('timer').innerHTML = "00:00:00";
        // Ensure start button resets to play state
    startStopBtn.innerHTML = `<i class="fa fa-play" id="play"></i>`;

        // Reset timer status
    timerStatus = "stopped";
    
});