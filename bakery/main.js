const nav = document.querySelector(".nav-center")
const navToggle = document.querySelector(".mobile-btn")
const containerLinks = document.querySelector(".links-container")
const links = document.querySelector(".links")
const scrollLinks = document.querySelectorAll(".scroll-link")



window.addEventListener("DOMContentLoaded", function () {
    Toggle()
    windowListner()
    scrolls()
})


function Toggle() {
    navToggle.addEventListener("click", function () {
        let height = containerLinks.style.height
        if (height != "auto") {
            containerLinks.style.height = "auto"
        }
        else {
            containerLinks.style.height = "0px"
        }
    })
}

function windowListner() {
    window.addEventListener("scroll", function () {
        let pageHeight = window.pageYOffset
        let navHeight = nav.getBoundingClientRect().height
        if (pageHeight > navHeight) {
            nav.classList.add("fixed")
            if (nav.classList.contains("fixed")) {
                containerLinks.classList.add("background-links")
            }
        } else {
            nav.classList.remove("fixed")
            containerLinks.classList.remove("background-links")
        }
    })

}

function scrolls() {
    scrollLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault()
            let navHeight = nav.getBoundingClientRect().height
            const id = e.currentTarget.getAttribute("href")
            const element = document.querySelector(id)
            let position = element.offsetTop
            window.scrollTo({
                top: position - navHeight
            })
            containerLinks.style.height = "0"
        })
    });
}

