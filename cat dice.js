let instructionEl = document.getElementById("instruction-el")
let imageEl = document.querySelector("cat0")

function rollDice() {
    let randomInt = Math.floor(Math.random()*6 + 1)
    instructionEl.textContent = "You got "+ randomInt
    for (let i = 0; i <= 6; i++) {
        document.getElementById("cat" + i).style.display = "none";
    }
    document.getElementById("cat" + randomInt).style.display = "block";
}