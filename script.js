let doTouch = document.querySelector("#do");
console.log(doTouch);

let réTouch = document.querySelector("#ré");
console.log(réTouch);

let miTouch = document.querySelector("#mi");
console.log(miTouch);

let faTouch = document.querySelector("#fa");
console.log(faTouch);

let solTouch = document.querySelector("#sol");
console.log(solTouch);

let laTouch = document.querySelector("#la");
console.log(laTouch);

let siTouch = document.querySelector("#si");
console.log(siTouch);

function doSound() {
    let audio = document.getElementById('doAudio');
    audio.play();
}

function réSound() {
    let audio = document.getElementById('réAudio');
    audio.play();
}

function miSound() {
    let audio = document.getElementById('miAudio');
    audio.play();
}

function faSound() {
    let audio = document.getElementById('faAudio');
    audio.play();
}

function solSound() {
    let audio = document.getElementById('solAudio');
    audio.play();
}

function laSound() {
    let audio = document.getElementById('laAudio');
    audio.play();
}

function siSound() {
    let audio = document.getElementById('siAudio');
    audio.play();
}