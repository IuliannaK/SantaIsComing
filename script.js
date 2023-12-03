function christmasCountdown() { 
    const christmasDate = new Date("January, 01, 2024, 00:00");
    const now = new Date();
    const diff = christmasDate - now;
    console.log(diff);

    const msInSecond = 1000; //сколько миллисекунд в секунде - 1 000;
    const msInMinute = 60*1000; // сколько миллисекунд в минуте - 60 000;
    const msInHour = 60*60*1000; //сколько миллисекунд в часе - 3 600 000;
    const msInDay = 24*60*60*1000; //сколько миллисекунд в дне - 3 600 000;

const displayDay = Math.floor(diff/msInDay);
document.querySelector('.days').textContent = displayDay;

const displayHour = Math.floor((diff%msInDay)/msInHour);
document.querySelector('.hours').textContent = displayHour;


const displayMinute = Math.floor((diff%msInHour)/msInMinute);
document.querySelector('.minutes').textContent = displayMinute;

const displaySecond = Math.floor((diff%msInMinute)/msInSecond);
document.querySelector('.seconds').textContent = displaySecond;

if (diff <=0) {
    document.querySelector('.days').textContent = 0;
    document.querySelector('.hours').textContent = 0;
    document.querySelector('.minutes').textContent = 0;
    document.querySelector('.seconds').textContent = 0;
    clearInterval(timerID);
    merryChristmas();
}

}

let timerID=setInterval(christmasCountdown, 1000);

function merryChristmas (){
    const heading = document.querySelector('h1');
    heading.textContent = 'Merry Christmas! HO-HO-HO!!!';
    heading.classList.add('red');
    }

    const button = document.querySelector('#myButton');
    button.addEventListener('click',function(){
        document.querySelector('#myAudio').play();
    })
