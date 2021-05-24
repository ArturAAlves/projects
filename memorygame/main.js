const card = document.querySelectorAll(".card")
const images = [{ id: 0, img: "./img/img1.png" }, { id: 1, img: "./img/img2.png" }, { id: 2, img: "./img/img3.png" }, { id: 3, img: "./img/img4.png" }, { id: 4, img: "./img/img5.png" }, { id: 5, img: "./img/img1.png" }, { id: 6, img: "./img/img2.png" }, { id: 7, img: "./img/img3.png" }, { id: 8, img: "./img/img4.png" }]
const cardBack = document.querySelectorAll(".card-back")
let cartaUm;
let cartaDois;
let clicks = 0
const moves = document.querySelector(".moves")

for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", function () {
        clicks += 1;
        moves.innerHTML = clicks
        debugger
        console.log(clicks)
        card[i].classList.add('flipped');

        if (cartaUm != undefined && cartaDois == undefined)
            cartaDois = cardBack[i].style.backgroundImage

        if (cartaUm == undefined)
            cartaUm = cardBack[i].style.backgroundImage

        if (cartaUm == cartaDois) {
            for (let u = 0; u < card.length; u++) {
                if (hasClass(card[u], 'flipped')) {
                    card[u].classList.add('locked')
                }
            }
        } else if (cartaDois != undefined) {
            for (let u = 0; u < card.length; u++) {
                if (!hasClass(card[u], 'locked'))
                    setTimeout(function () {
                        card[u].classList.remove('flipped')
                    }, 1000);
            }
        }
        clearCards();

    })
}


function clearCards() {
    if (cartaDois != undefined) {
        cartaUm = undefined;
        cartaDois = undefined;
    }
}


function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}

function randomize() {
    var numberStore = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    var novoArray = []

    for (let i = numberStore.length; i >= 0; i--) {
        var copyArray = numberStore

        var randomNumber = Math.floor(Math.random() * i);
        novoArray.push(copyArray[randomNumber])
        copyArray.splice(randomNumber, 1)
    }

    for (let i = 0; i < cardBack.length; i++) {
        cardBack[i].style.backgroundImage = `url("${images[novoArray[i]].img}")`
        setTimeout(function () {
            card[i].classList.add('flipped')
        }, 500);

        setTimeout(function () {
            card[i].classList.remove('flipped')
        }, 2000);
    }


}

randomize()

const novojogo = document.querySelector(".novojogo")
novojogo.addEventListener("click", function () {
    location.reload();

})







