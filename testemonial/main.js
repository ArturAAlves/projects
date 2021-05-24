const clients = [
  {
    name: "Maria Inês",
    img: "./img/img1.jpg",
    rating: 4.4,
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque ut quisquam recusandae delectus adipisci iusto.",
  },
  {
    name: "Carlos Morais",
    img: "./img/img2.jpg",
    rating: 1.4,
    text: "Shitty experience",
  },
  {
    name: "Carlota Morais",
    img: "./img/img3.jpg",
    rating: 5,
    text: "Great with great cars",
  },
  {
    name: "Morais Silva",
    img: "./img/img4.jpg",
    rating: 4.6,
    text: "Exellent",
  },
];

const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");
const clientName = document.querySelector(".Costumer-name");
const clientImg = document.querySelector(".costumer-img");
const clientRating = document.querySelector(".costumer-rating");
const clientText = document.querySelector(".costumer-text");
var counter = 0;

btnNext.addEventListener("click", function (e) {
  e.preventDefault();
  clientRating.innerHTML = "";
  counter++;
  if (counter == clients.length) {
    counter = 0;
  }

  clientReview();

});

btnPrev.addEventListener("click", function (e) {
  e.preventDefault();
  clientRating.innerHTML = "";
  if (counter == 0) {
    counter = clients.length - 1;
  } else {
    counter--;
  }
  clientReview();

});

function clientReview() {
  clientName.innerText = clients[counter].name;
  clientText.innerText = clients[counter].text;
  clientImg.src = `${clients[counter].img}`;

  var starCounter = clients[counter].rating;
  var decimialRest = (starCounter % 1);

  starCounter = starCounter - decimialRest;

  if (decimialRest <= 0.3) {
    decimialRest = 0
  } else if (decimialRest >= 0.7) {
    decimialRest = 1
  } else {
    decimialRest = 0.5;
  }

  if (decimialRest == 1) {
    starCounter = starCounter + 1;
  }

  for (let i = 0; starCounter > i; i++) {
    var createDiv = document.createElement("i");
    createDiv.className = "fa fa-star";
    clientRating.appendChild(createDiv);
  }

  if (decimialRest == 0.5) {
    var createDiv = document.createElement("i");
    createDiv.className = "fa fa-star-half-full";
    clientRating.appendChild(createDiv);
  }
}

const btnSubmit = document.querySelector(".btn-submit")
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  let insertName = document.querySelector(".name")
  let insertScore = document.querySelector(".score")
  let insertReview = document.querySelector(".review")
  // console.log(insertName, insertScore, insertReview)
  let cliente = {
    name: insertName.value,
    img: "./img/img1.jpg",
    rating: insertScore.value,
    text: insertReview.value
  }

  clients.push(cliente);
  insertName.value = ""
  insertScore.value = ""
  insertReview.value = ""
  alert("Obrigado pelo seu Review")
})