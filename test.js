
for (var i = 0; i < 7; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick)
}


function handleClick() {
    var tom1 = new Audio(audioList[this.innerHTML])
    tom1.play();
}

const audioList = {
    "w" : "./sounds/tom-1.mp3",
    "a" : "./sounds/tom-2.mp3",
    "s" : "./sounds/tom-3.mp3",
    "d" : "./sounds/tom-4.mp3",
    "j" : "./sounds/snare.mp3",
    "k" : "./sounds/crash.mp3",
    "l" : "./sounds/kick-bass.mp3"
}

