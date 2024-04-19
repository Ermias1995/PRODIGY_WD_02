const display = document.querySelector('.counter');
const play = document.querySelector('#play');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');

let hours = 0;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let interval=null;

function counting(){
    miliseconds++;
    if(miliseconds==100){
        miliseconds = 0;
        seconds++;
    if(seconds==60){
        seconds = 0;
        minutes++;
        if(minutes==60){
            minutes = 0;
            hours++;
        }
    }
    }
    let h = hours<10?"0"+hours : hours;
    let m = minutes<10?"0"+minutes:minutes;
    let s = seconds<10?"0"+seconds:seconds;
    let ms = miliseconds<10?"0"+miliseconds:miliseconds;
    display.innerHTML = h +":"+ m +":"+ s +":"+ ms;
}
play.addEventListener("click",()=>{
    if(interval!==null){
        clearInterval(interval);
    }
    interval = setInterval(counting,10);
});

stop.addEventListener("click",()=>{
    clearInterval(interval);
});
reset.addEventListener("click",()=>{
    clearInterval(interval);
    display.innerHTML = "00:00:00:00";
    hours = 0;
    minutes = 0;
    seconds = 0;
    miliseconds = 0;
});


