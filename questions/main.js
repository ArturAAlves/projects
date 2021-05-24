const question = document.querySelectorAll(".q-box")
const counter = 0

question.forEach(function (question) {
    const btn = question.querySelectorAll(".question-btn")
    btn.forEach(function (e) {
        e.addEventListener("click", function (i) {
            const text = i.currentTarget.parentElement.nextElementSibling
            const btn1 = i.currentTarget.children[0].children[0]
            const btn2 = i.currentTarget.children[1].children[0]
            text.classList.toggle("hide-content")
            btn1.classList.toggle("hide-icon")
            btn2.classList.toggle("hide-icon")
        })
    });
});




// const btns = document.querySelectorAll(".question-btn")


// btns.forEach(function (btn) {
//     btn.addEventListener("click", function (e) {
//         const box = e.target.parentElement.parentElement.parentElement.nextElementSibling
//         box.classList.toggle("hide-content")
//     }
//     )
// });



