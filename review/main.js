const people = [{
    photo: "img/1.jpg",
    name: "Sara Jones",
    profession: "designer",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo tempora odio molestia  sint,odit quia. Unde id adipisci vitae nihil?"
}, {
    photo: "img/2.jpg",
    name: "Ruan Pepe",
    profession: "programmer",
    review: "Lorem ipsum dolor sit ametora odio molestia  sint,odit quia. Unde id adipisci vitae nihil?"
}
    , {
    photo: "img/3.jpg",
    name: "Lila Marina",
    profession: "singer",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.molestia  sint,odit quia. Unde id adipisci vitae nihil?"
}
    , {
    photo: "img/4.jpg",
    name: "Bob Sponge",
    profession: "CEO",
    review: "Lorem ipsum dolor sit adipisci vit nihil?"
}

    , {
    photo: "img/5.jpg",
    name: "Lula Lipa",
    profession: "Writer",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo tempora odio molestia  sint,odit quia. Unde id adipisci vitae nihil?"
}
]

const photo = document.querySelector(".photo")
const personName = document.querySelector(".card-name")
const profession = document.querySelector(".card-profession")
const review = document.querySelector(".card-info")
const btns = document.querySelectorAll(".btn")
const random = document.querySelector(".random")

let posicao = 0

btns.forEach(function (btn) {
    btn.addEventListener("click", function (butao) {
        const btnTarget = butao.currentTarget
        if (btnTarget.classList.contains("next-btn")) {
            posicao++
            counterValidator()


        } else {
            counterValidator()
            posicao--
        }
        insertContent()
    })
});

function counterValidator() {
    if (posicao >= people.length) {
        posicao = 0
    } else if (posicao <= 0) {
        posicao = people.length
    }
}

random.addEventListener("click", function () {
    let randomNumber = Math.floor(Math.random() * people.length)
    while (randomNumber === posicao) {
        randomNumber = Math.floor(Math.random() * people.length)
    }
    posicao = randomNumber
    insertContent()

})


function insertContent() {
    const item = people[posicao]
    photo.src = item.photo
    personName.innerText = item.name
    profession.innerText = item.profession
    review.innerText = item.review
}

// window.addEventListener("DOMContentLoaded", insertContent)
