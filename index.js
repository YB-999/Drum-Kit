
var numberOfDrumButton = document.querySelectorAll(".drum").length;

//detecting button pressed
for(let i = 0; i<numberOfDrumButton;i++){
    //you can add class " .drum " to spcify which button to select
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        //to get the buttom pressed
        var buttonClicked = this.innerHTML;
        keyPressed(buttonClicked);

        buttonAnimation(buttonClicked);
    });
    
}


//detecting keyboard press
document.addEventListener("keypress", function(event){
    keyPressed(event.key);
    buttonAnimation(event.key);
});

//sound acording to key or button pressed
function keyPressed(key_pressed){
    switch (key_pressed) {
        case "w":
            var crash = new Audio('./sounds/crash.mp3')
            crash.play();
            break;
        case "a":
            var kick = new Audio('./sounds/kick-bass.mp3')
            kick.play();
            break;

        case "s":
            var snare = new Audio('./sounds/snare.mp3')
            snare.play();
            break;

        case "d":
            var tom1 = new Audio('./sounds/tom-1.mp3')
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio('./sounds/tom-2.mp3')
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio('./sounds/tom-3.mp3')
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio('./sounds/tom-4.mp3')
            tom4.play();
            break;
        
        default:
            console.log();
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}