const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const giveAwayContainer = document.querySelector(".text-container h5")
const countDownContainer = document.querySelectorAll(".mini-container h2")

const tempDate = new Date()

const tempYear = tempDate.getFullYear()
const tempMonth = tempDate.getMonth()

const tempDay = tempDate.getDate()

const giveAwayDate = new Date(tempYear, tempMonth, tempDay + 10, 23, 59, 59)

// const giveAwayDate = new Date(2020, 11, 30, 10, 24,)
const futureTime = giveAwayDate.getTime()
const year = giveAwayDate.getFullYear()
const month = monthList[giveAwayDate.getMonth()]
const day = dayList[giveAwayDate.getDay()]
const hours = giveAwayDate.getHours()
const minutes = giveAwayDate.getMinutes()

giveAwayContainer.innerText = `The give away, will happen ${month},  ${day} at  ${hours}:${minutes}`

function getRemaindingTime() {
    const currentDate = new Date()
    const currentTime = currentDate.getTime()
    const remaing = futureTime - currentTime
    //1s = 1000s
    //1m = 60s
    //1hr = 60min
    //1d = 24hr
    const oneDay = 24 * 60 * 60 * 1000
    const oneHour = 60 * 60 * 1000
    const oneMin = 60 * 1000
    let days = Math.floor(remaing / oneDay)
    let hours = Math.floor((remaing % oneDay) / oneHour)
    let min = Math.floor((remaing % oneHour) / oneMin)
    let seconds = Math.floor((remaing % oneMin) / 1000)
    const values = [days, hours, min, seconds]
    countDownContainer.forEach(function (item, index) {
        item.innerHTML = values[index]
        if (currentTime >= futureTime) {
            clearInterval(countdown)
            item.innerHTML = `00`
        }
    })
}

 setInterval(getRemaindingTime, 1000);




