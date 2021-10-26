
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i= 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;

        make_sound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    });
}


document.addEventListener("keypress", function(event) {

    make_sound(event.key);

    buttonAnimation(event.key);

});


function make_sound (key) {
    switch (key) {
        case "w":
            const music_tom1 = new Audio("sounds/tom-1.mp3");
            music_tom1.play();
            break;

        case "a":
            const music_tom2 = new Audio("sounds/tom-2.mp3");
            music_tom2.play();
            break;

        case "s":
            const music_tom3 = new Audio("sounds/tom-3.mp3");
            music_tom3.play();
            break;

        case "d":
            const music_tom4 = new Audio("sounds/tom-4.mp3");
            music_tom4.play();
            break;

        case "j":
            const music_snare = new Audio("sounds/snare.mp3");
            music_snare.play();
            break;

        case "k":
            const music_crash = new Audio("sounds/crash.mp3");
            music_crash.play();
            break;

        case "l":
            const music_kick = new Audio("sounds/kick-bass.mp3");
            music_kick.play();
            break;

        default:
            console.log(key);
    }
}

function buttonAnimation(key) {
    var activeButton = document.querySelector("." + key);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}