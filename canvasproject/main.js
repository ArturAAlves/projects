var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerWidth;

// //Squares
// c.beginPath();
// c.fillStyle = ("red")
// c.fillRect(40, 80, 50, 50);
// c.fillStyle = ("blue")
// c.fillRect(40, 180, 50, 50);


// //Lines
// c.beginPath()
// c.lineTo(0, 50)
// c.lineTo(300, 50)
// c.lineTo(300, 300)
// c.strokeStyle = "green"
// c.stroke()


// //arc /circle
// c.beginPath()
// c.arc(400, 300, 30, 0, Math.PI * 2, false)
// c.stroke()

// c.beginPath()
// c.arc(600, 400, 30, 0, Math.PI * 2, false)
// c.stroke()


// for (let i = 0; i < 600; i++) {
//     x = Math.floor(Math.random() * window.innerWidth)
//     y = Math.floor(Math.random() * window.innerHeight)
//     z2 = Math.floor(Math.random() * 10)
//     z1 = Math.floor(Math.random() * 10)
//     z3 = Math.floor(Math.random() * 10)
//     console.log(x)

//     c.beginPath()
//     c.arc(x, y, 30, 0, Math.PI * 2, false)
//     c.strokeStyle = `#${z1}${z2}${z3}`
//     c.stroke()
// }

var mouse = {
    x: 0,
    y: 0
}
var maxRaio = 50
var minRaio = 5

var colorArray =
    ["#7FB069", "#FFFBBD", "#E6AA68", "#CA3C25", "#1D1A05"

    ]

window.addEventListener("mousemove", function (event) {
    mouse.x = event.x;
    mouse.y = event.y;

})

window.addEventListener("touchstart", function (event) {
    mouse.x = event.x;
    mouse.y = event.y;


})

window.addEventListener("touchmove", function (event) {
    mouse.x = event.x;
    mouse.y = event.y;


})



function circle(x, y, vX, vY, raio) {
    this.x = x
    this.y = y
    this.vX = vX
    this.vY = vY
    this.raio = raio
    this.minRaio = raio
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)]

    this.draw = function () {
        c.beginPath()
        c.arc(this.x, this.y, this.raio, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()

    }

    this.update = function () {
        if (this.x + this.raio > innerWidth || this.x - this.raio < 0) {

            this.vX = - this.vX
        }
        if (this.y + this.raio > innerHeight || this.y - this.raio < 0) {
            this.vY = -this.vY
        }
        this.x += this.vX
        this.y += this.vY

        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {

            if (this.raio < maxRaio) {
                this.raio += 3
            }
        }

        else if (this.raio > this.minRaio) {
            this.raio -= 1
        }

        this.draw();
    }
}
var circleArray = [];

for (let i = 0; i < 250; i++) {
    var raio = Math.random() * 10 + 1
    var vX = (Math.random() - 0.5) * 2
    var vY = (Math.random() - 0.5) * 2
    var x = Math.random() * (window.innerWidth - raio * 2) + raio
    var y = Math.random() * (window.innerHeight - raio * 2) + raio
    circleArray.push(new circle(x, y, vX, vY, raio));
}


console.log(circleArray)




function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height) // elemina circulos anteriores
    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();

    }
}

animate()
















// var ball = document.querySelector(".ball");

// ball.addEventListener("click", function () {

//     var largura = 10;
//     var altura = 0;

//     var id = setInterval(frame, 40);

//     function frame() {

//         // if (altura < 250) {
//         //     largura++;
//         //     altura++;
//         //     ball.style.left = largura + 'px';
//         //     ball.style.bottom = altura + 'px';
//         //     console.log(largura)
//         // }
//         // if (altura >= 250) {

//         //     largura++;
//         //     altura++;
//         //     ball.style.left = largura + 'px';
//         //     ball.style.top = altura + 'px';
//         //     // console.log (altura)
//         // }
//         // if (altura >= 500) {

//         //     largura++;
//         //     altura++;
//         //     ball.style.left = largura + 'px';
//         //     ball.style.bottom = altura + 'px';
//         //     console.log(largura)
//         // }


//         if (largura < 50) {
//             ball.style.right = largura  + '%';
//             largura++;
//             console.log(largura)
//         }

//         if (largura >= 50) {
//             largura++;
//             ball.style.left = +largura + '%';

//         }

//         if (largura >= 100) {
//             ball.style.right = largura  + '%';
//             largura++;
//             console.log(largura)
//         }








//         // clearInterval(id);
//     }
// })



