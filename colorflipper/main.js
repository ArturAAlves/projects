const background = document.querySelector(".main-container")
const colorBtn = document.querySelector(".click-btn")
const display = document.querySelector(".display")
const simple = document.querySelector(".simple-btn")
const hex = document.querySelector(".hex-btn")

const letterColor = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]
const fixedColors = ["red", "blue", "green", "yellow", "orange", "black", "white", "gray"]


let counter = 0


simple.addEventListener("click", function () {
    counter = 1
    hex.classList.remove("selected")
    simple.classList.add("selected")
})

hex.addEventListener("click", function () {
    counter = 0
    hex.classList.add("selected")
    simple.classList.remove("selected")
})




colorBtn.addEventListener("click", function () {

    if (counter == 0) {
        let finalColor = "#"
        for (let i = 0; i < 6; i++) {
            let color = Math.floor(Math.random() * letterColor.length)
            let result = letterColor[color]
            finalColor += result
        }
        background.style.backgroundColor = `${finalColor}`
        display.innerText = `${finalColor}`

    } else {
        let color = Math.floor(Math.random() * fixedColors.length)
        let result = fixedColors[color]
        background.style.backgroundColor = `${result}`
        display.innerText = `${result}`
    }
})


