const videoContainer = document.querySelector(".video-container")
const btn = document.querySelector(".switch-btn")
const loader = document.querySelector(".preloader")




window.addEventListener("load", function () {
    loader.classList.add("hide")
})



btn.addEventListener("click", function () {
    if (!btn.classList.contains("slide")) {
        btn.classList.add("slide")
        videoContainer.pause()
    } else {
        btn.classList.remove("slide")
        videoContainer.play()
    }
})

