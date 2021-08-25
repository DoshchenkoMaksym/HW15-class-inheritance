let clock = document.querySelector('.clock');

function Clock(clock) {
    this.elem = clock;
}

Clock.prototype.render = function () {
    let data = new Date();
    let hours = data.getHours();
    let minutes = data.getMinutes();
    let seconds = data.getSeconds();
    this.elem.innerHTML = `${hours}:${minutes}:${seconds}`;
};
Clock.prototype.interval = function () {
    let ourInterval = setInterval(() => this.render(), 250);
    return ourInterval;
}

function FullFormat() {
    Clock.call(this, clock);
};

FullFormat.prototype = Object.create(Clock.prototype);

FullFormat.prototype.render = function () {
    let data = new Date();
    let hours = data.getHours();
    let minutes = data.getMinutes();
    let seconds = data.getSeconds();
    this.elem.innerHTML = `${hours}:${minutes}:${seconds}`;
};

FullFormat.prototype.constructor = FullFormat;



function ShortFormat() {
    Clock.call(this, clock);
};

ShortFormat.prototype = Object.create(Clock.prototype);

ShortFormat.prototype.render = function () {
    let data = new Date();
    let hours = data.getHours();
    let minutes = data.getMinutes();
    this.elem.innerHTML = `${hours}:${minutes}`;
};

ShortFormat.prototype.constructor = ShortFormat;



let time = new Clock(clock);
let fullTime = new FullFormat();
let shortTime = new ShortFormat();
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
    } else {
        clearInterval(mainTime);
        clearInterval(fullInterval);
        shortInterval = shortTime.interval();
    }

});

let mainTime = time.interval();