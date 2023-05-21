function startTimer(duration, display) {
    var timer = duration,
        hours,
        minutes,
        seconds;
    setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + "\xa0\xa0:\xa0\xa0" + minutes + "\xa0\xa0:\xa0\xa0" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var duration = 72605;
    var display = document.querySelector(".time");
    startTimer(duration, display);
};

var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene);

if (window.innerWidth < 576) {
    var timerElement = document.querySelector('.timer');
    timerElement.classList.remove('wow');
}

new WOW().init();