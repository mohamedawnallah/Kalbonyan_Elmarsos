
const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart() {
        console.log("Timer Started Emited Event");
    },
    onTick() {
        console.log("Timer Ticked Emited Event");

    },
    onComplete() {
        console.log("Timer Completed Emited Event");

    }
});