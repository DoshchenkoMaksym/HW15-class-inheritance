let clock = document.querySelector('.clock');

function Clock(clock) {
    this.isFullFormat = true;
    clock.addEventListener('click', () => { this.switchScreen() });
    this.switchScreen = function () {
        this.toggleFormat();
    };
    this.toggleFormat = function () {
        this.isFullFormat = !this.isFullFormat;
    }

}

Clock.prototype.render = function () {
    if (this.isFullFormat) {
        fullTime.render();
        console.log('1');
    } else {
        shortTime.render();
        console.log('2')
    }

};

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
        let seconds = data.getSeconds();
        clock.innerHTML = `${hours}:${minutes}`;
    };
};

ShortFormat.prototype = Object.create(Clock.prototype);
ShortFormat.prototype.constructor = ShortFormat;



let time = new Clock(clock);
let fullTime = new FullFormat(clock);
let shortTime = new ShortFormat(clock)
setInterval(() => time.render(), 250);