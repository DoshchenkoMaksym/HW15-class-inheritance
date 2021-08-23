let clock = document.querySelector('.clock');

function Clock(clock) {
}

Clock.prototype.render = function () {
    let data = new Date();
    let hours = data.getHours();
    clock.innerHTML = `${hours}`;
};
Clock.prototype.interval = function () {
    let ourInterval = setInterval(() => this.render(), 250);
    return ourInterval;
}
function FullFormat(clock) {
    Clock.call(this, clock)
    this.render = function () {
        let data = new Date();
        let hours = data.getHours();
        let minutes = data.getMinutes();
        let seconds = data.getSeconds();
        clock.innerHTML = `${hours}:${minutes}:${seconds}`;
    };
};

FullFormat.prototype = Object.create(Clock.prototype);
FullFormat.prototype.constructor = FullFormat;


function ShortFormat(clock) {
    Clock.call(this, clock)
    this.render = function () {
        let data = new Date();
        let hours = data.getHours();
        let minutes = data.getMinutes();
        clock.innerHTML = `${hours}:${minutes}`;
    };
};

ShortFormat.prototype = Object.create(Clock.prototype);
ShortFormat.prototype.constructor = ShortFormat;



let time = new Clock(clock);
let fullTime = new FullFormat(clock);
let shortTime = new ShortFormat(clock);
let isFullFormat = true;
let fullInterval;
let shortInterval;

function toggleFormat() {
    return isFullFormat = !isFullFormat;
};

clock.addEventListener('click', () => {
    
    if (toggleFormat()) {
        clearInterval(mainTime);
        clearInterval(shortInterval);
        fullInterval = fullTime.interval();
        console.log('1');
    } else {
        clearInterval(mainTime);
        clearInterval(fullInterval);
        shortInterval = shortTime.interval();
        console.log('2');
    }
});

let mainTime = time.interval();