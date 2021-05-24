const btnsList = document.querySelectorAll(".btn")
const textBox = document.querySelectorAll(".display-inactive")
const btnContainer = document.querySelector(".text-button-container")

btnContainer.addEventListener("click", function (btns) {
    const btn = btns.target.dataset.id
    btnsList.forEach(function (e) {
        e.classList.remove("active")
        btns.target.classList.add("active")
    });
    textBox.forEach(function (texBox) {
        if (texBox.id != btn) {
            texBox.classList.remove("display-active")
        }
        else {
            texBox.classList.add("display-active")
        }
    });
})