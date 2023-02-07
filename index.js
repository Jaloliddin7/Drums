const drums = document.querySelectorAll(".drum")

drums.forEach((item) => {
    item.addEventListener("click", () => {
        sounds(item.classList[0])
        pressFunk(item)
    })
});

document.addEventListener("keypress", (e) => {
    sounds(e.key)
    pressFunk(document.querySelector(`.${e.key}`))
})

function pressFunk(e) {
    e.classList.add('pressed')
    setTimeout(()=>{
        e.classList.remove('pressed')
    } ,100)
}

function sounds(param) {
    let audio;
    switch (param) {
        case "w":
            audio = new Audio("sounds/crash.mp3")
            break;
        case "a":
            audio = new Audio("sounds/kick-bass.mp3")
            break;
        case "s":
            audio = new Audio("sounds/snare.mp3")
            break;
        case "d":
            audio = new Audio("sounds/tom-1.mp3")
            break;
        case "j":
            audio = new Audio("sounds/tom-2.mp3")
            break;
        case "k":
            audio = new Audio("sounds/tom-3.mp3")
            break;
        case "l":
            audio = new Audio("sounds/tom-4.mp3")
            break;

        default:
            break;
    }
    audio.play()

}