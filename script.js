// credit: https://github.com/mdn/learning-area/blob/master/javascript/asynchronous/loops-and-intervals/setinterval-stopwatch.html

const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');
const record = document.querySelector('.record');

let time = 0;
let recordOrder = 1;

let stopWatch;
let minute;
let second;
let decimalSecond;

function displayTime() {
    minute = Math.floor(time / 6000);
    second = Math.floor((time / 100) % 60);
    decimalSecond = Math.floor(time % 100);

    if (minute < 10) {
        minute = "0" + minute;
    }

    if (second < 10) {
        second = "0" + second;
    }

    if (decimalSecond < 10) {
        decimalSecond = "0" + decimalSecond;
    }

    document.querySelector('.clock').textContent = minute + ":" + second + "." + decimalSecond;
    time++;
}

start.addEventListener('click', () => {
    stopWatch = setInterval(displayTime, 10);
    start.disabled = true;
});

stop.addEventListener('click', () => {
    clearInterval(stopWatch);
    start.disabled = false;
    record.innerHTML +=  recordOrder + ". " + minute + ":" + second + "." + decimalSecond;
    record.appendChild(document.createElement("br"));
    recordOrder++;
});

reset.addEventListener('click', () => {
    clearInterval(stopWatch);
    start.disabled = false;
    time = 0;
    recordOrder = 1;
    record.textContent = "";
    displayTime();
});

displayTime();