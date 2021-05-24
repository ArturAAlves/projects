const menuList = [
    {
        id: 1,
        name: "IceCream  Popstickle",
        price: 0.99,
        imgUrl: `"./img/1.jpg"`,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit
        Magnam porro vel earum animi cupiditate debitis nesciunt similique reprehenderit.`,
        type: `sweets`
    },
    {
        id: 2,
        name: "Raisens",
        price: 1.99,
        imgUrl: `"./img/2.jpg"`,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit
        Magnam porro vel earum animi cupiditate debitis nesciunt similique reprehenderit.` ,
        type: `sweets`
    },
    {
        id: 3,
        name: "Honey Pancakes",
        price: 2.99,
        imgUrl: `"./img/3.jpg"`,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit
        Magnam porro vel earum animi cupiditate debitis nesciunt similique reprehenderit.` ,
        type: `pancakes`
    },
    {
        id: 4,
        name: "Buiscuits with syrope",
        price: 2.99,
        imgUrl: `"./img/4.jpg"`,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit
        Magnam porro vel earum animi cupiditate debitis nesciunt similique reprehenderit.`,
        type: `sweets`
    },
    {
        id: 5,
        name: "Roasted Almons",
        price: 2.99,
        imgUrl: `"./img/5.jpg"`,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit
        Magnam porro vel earum animi cupiditate debitis nesciunt similique reprehenderit.` ,
        type: `fruits`
    },
    {
        id: 6,
        name: "Sweet PopCorn",
        price: 1.99,
        imgUrl: `"./img/6.jpg"`,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit
        Magnam porro vel earum animi cupiditate debitis nesciunt similique reprehenderit.`,
        type: `sweets`
    },
    {
        id: 7,
        name: "Pancakes with Fruit",
        price: 4.99,
        imgUrl: `"./img/7.jpg"`,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit
        Magnam porro vel earum animi cupiditate debitis nesciunt similique reprehenderit.`,
        type: `pancakes`
    },
    {
        id: 8,
        name: "Vegetable Soup",
        price: 2.99,
        imgUrl: `"./img/8.jpg"`,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit
        Magnam porro vel earum animi cupiditate debitis nesciunt similique reprehenderit.`,
        type: `food`
    }
]

const menuContainer = document.querySelector(".menu-container")
const btnContainer = document.querySelector(".btn-container")

window.addEventListener("DOMContentLoaded", function () {
    createMenu(menuList)
    createBtn()
    filter()


})

function createMenu(menuList) {
    const printMenu = menuList.map(function (item) {
        return `<div class="menu-item-container">
            <div class="menu-img-container">
            <img class="menu-item-img" src=${item.imgUrl} alt="">
            </div>
            <div class="menu-content-container">
            <div class="menu-item-text">
                <div class="menu-item-tittle-container">
                <p class="menu-item-tittle"><span>${item.name}</span> <span class="menu-item-price">$${item.price}</span>
                </p>
                <div class="menu-item-tittle-underline"></div>
                </div>
                <div class="menu-item-description">
                <p>${item.description}</p>
                </div>
            </div>
            </div>
        </div>`
    }).join("")

    menuContainer.innerHTML = printMenu
}



function filter() {
    btnContainer.addEventListener("click", function (btn) {
        const button = btn.target.dataset.id
        if (button != undefined) {
            const filter = menuList.filter(function (item) {
                if (item.type == button) {
                    return item
                }
                else if (button == "all") {
                    return item
                }
            })
            createMenu(filter)
        }
    })
}


function createBtn() {
    const newBtnList = menuList.reduce(function (newList, items) {
        if (!newList.includes(items.type)) {
            newList.push(items.type)
        }
        return newList
    }, ["all"])
    const printBtns = newBtnList.map(function (item) {
        return `<button class="btn" data-id=${item}>${item}</button>`
    }).join("")

    btnContainer.innerHTML = printBtns
    console.log()
}



// function createBtn() {
//     const list = menuList.reduce(function (nList, item) {
//         if (!nList.includes(item.type)) {
//             nList.push(item.type)
//         }
//         return nList
//     }, ["all"])
//     const newPrint = list.map(function (btn) {
//         return ` <button class="btn" data-id=${btn}>${btn}</button>`
//     }).join("")
//     btnContainer.innerHTML = newPrint
// }


// function filter() {
//     btnContainer.addEventListener("click", function (btns) {
//         const btn = btns.target.dataset.id
//         if (btn != undefined) {
//             const filter = menuList.filter(function (item) {
//                 if (item.type == btn) {
//                     return item
//                 } else if (btn == "all") {
//                     return item
//                 }
//             })
//             createMenu(filter)
//         }
//     })

// }


// function createMenu(menu) {
//     const outputMenu = menu.map(function (item) {
//         return `<div class="menu-item-container">
//             <div class="menu-img-container">
//             <img class="menu-item-img" src=${item.imgUrl} alt="">
//             </div>
//             <div class="menu-content-container">
//             <div class="menu-item-text">
//                 <div class="menu-item-tittle-container">
//                 <p class="menu-item-tittle"><span>${item.name}</span> <span class="menu-item-price">$${item.price}</span>
//                 </p>
//                 <div class="menu-item-tittle-underline"></div>
//                 </div>
//                 <div class="menu-item-description">
//                 <p>${item.description}</p>
//                 </div>
//             </div>
//             </div>
//         </div>`
//     }).join("")
//     menuContainer.innerHTML = outputMenu
// }






// // Utilizamos o metodo map para "correr" os items do array e para cada interaçao ou "volta", fazer um print dentro da template string , criando depois a atribuiçao
// // ao container de html
// function createMenu(list) {
//     const menu = list.map(function (item) {
//         return `<div class="menu-item-container">
//             <div class="menu-img-container">
//             <img class="menu-item-img" src=${item.imgUrl} alt="">
//             </div>
//             <div class="menu-content-container">
//             <div class="menu-item-text">
//                 <div class="menu-item-tittle-container">
//                 <p class="menu-item-tittle"><span>${item.name}</span> <span class="menu-item-price">$${item.price}</span>
//                 </p>
//                 <div class="menu-item-tittle-underline"></div>
//                 </div>
//                 <div class="menu-item-description">
//                 <p>${item.description}</p>
//                 </div>
//             </div>
//             </div>
//         </div>`
//     })
//     menuContainer.innerHTML = menu.join("")
// }


// // Reduzimos o array e retiramos os elementos do .type unicos e criamos um novo array utlizando o metodo reduce, de seguida fazemos o print , utlizando o metodo map
// function createBtn() {
//     const btns = menuList.reduce(function (btnList, items) {
//         if (!btnList.includes(items.type)) {
//             btnList.push(items.type)
//         }
//         return btnList
//     }, ["all"])
//     const printBtn = btns.map(function (item) {
//         return `<button class="btn" data-id=${item}>${item}</button>`
//     })
//     btnContainer.innerHTML = printBtn.join("")
// }


// //adicionamos um listner aos butoes que foram criados dinamicamente na funçao anteriores, 
// //este listener vai ter um target ao dataset que foi atribuido e este servirá para "filtrar" elmentos do array que contem o "type" igual ao dataset do butao.
// //Caso o butao selecionado seja "all", faz o print de todos os items do array
// function filter() {
//     const btnList = document.querySelectorAll(".btn")
//     btnList.forEach(function (btns) {
//         btns.addEventListener("click", function (btn) {
//             let button = btn.currentTarget.dataset.id
//             const filter = menuList.filter(function (item) {
//                 if (item.type == button) {
//                     return item
//                 }
//                 else if (button == "all") {
//                     return item
//                 }
//             })
//             createMenu(filter)
//         })
//     });
// }







// window.addEventListener("DOMContentLoaded", function () {
//     outputdata(menuList)
//     createBtns()
//     filter()
// })

// function createBtns() {
//     const type = menuList.reduce(function (btnList, items) {
//         if (!btnList.includes(items.type)) {
//             btnList.push(items.type)
//         }
//         return btnList
//     }, ["all"])
//     const btnNewList = type.map(function (btn) {
//         return `<button class="btn" data-id=${btn}>${btn}</button>`
//     }).join("")
//     btnContainer.innerHTML = btnNewList
// }

// function filter() {
//     const btnList = document.querySelectorAll(".btn")
//     btnList.forEach(function (buttons) {
//         buttons.addEventListener("click", function (btns) {
//             let btn = btns.currentTarget.dataset.id
//             const filter = menuList.filter(function (item) {
//                 if (btn == "all") {
//                     return item
//                 }
//                 if (item.type == btn) {
//                     return item
//                 }
//             })
//             outputdata(filter)
//         })
//     });
// }

// function outputdata(menu) {
//     const output = menu.map(function (items) {
//         return `<div class="menu-item-container">
//     <div class="menu-img-container">
//       <img class="menu-item-img" src=${items.imgUrl} alt="">
//     </div>
//     <div class="menu-content-container">
//       <div class="menu-item-text">
//         <div class="menu-item-tittle-container">
//           <p class="menu-item-tittle"><span>${items.name}</span> <span class="menu-item-price">$${items.price}</span>
//           </p>
//           <div class="menu-item-tittle-underline"></div>
//         </div>
//         <div class="menu-item-description">
//           <p>${items.description}</p>
//         </div>
//       </div>
//     </div>
//   </div>`
//     }).join("")
//     menuContainer.innerHTML = output



// }






// // // // // // // // // // // // // Working
// // DOMContentLoaded - The document has finished loading(but not its dependent resources).
// window.addEventListener("DOMContentLoaded", function () {
//     outData(menu)
//     displayButtons()
//     btnFilter()
// })

// function displayButtons() {
//     const reducer = menu.reduce(function (newList, item) {
//         if (!newList.includes(item.type)) {
//             newList.push(item.type)
//         }
//         return newList
//     }, ["all"])
//     console.log(reducer)
//     const categoryBtns = reducer.map(function (type) {
//         return `<button class="btn" data-id=${type}>${type}</button>`
//     }).join("")
//     buttonStore.innerHTML = categoryBtns
// }


// function btnFilter() {
//     const btn = document.querySelectorAll(".btn")
//     btn.forEach(function (btns) {
//         btns.addEventListener("click", function (btn) {
//             const buttonType = btn.currentTarget.dataset.id
//             const filter = menu.filter(function (items) {
//                 if (buttonType == "all") {
//                     return items
//                 }
//                 if (items.type == buttonType) {
//                     return items
//                 }
//             })
//             outData(filter)
//             // if (buttonType == "all") {
//             //     outData(menu)
//             // } else {
//             //     outData(filter)
//             // }
//         })
//     });
// }
// // // // // // // // // // // // // // // working




// function outData(menu) {
//     const dataOutput = menu.map(function (items) {
//         return `<div class="menu-item-container">
//     <div class="menu-img-container">
//       <img class="menu-item-img" src=${items.imgUrl} alt="">
//     </div>
//     <div class="menu-content-container">
//       <div class="menu-item-text">
//         <div class="menu-item-tittle-container">
//           <p class="menu-item-tittle"><span>${items.name}</span> <span class="menu-item-price">$${items.price}</span>
//           </p>
//           <div class="menu-item-tittle-underline"></div>
//         </div>
//         <div class="menu-item-description">
//           <p>${items.description}</p>
//         </div>
//       </div>
//     </div>
//   </div>`
//     }).join("")
//     menuContainer.innerHTML = dataOutput
// }





// btn.forEach(function (btns) {
//     btns.addEventListener("click", function (btn) {
//         let btnType = btn.currentTarget.dataset.id
//         let filtrar = menu.filter(function (menuItem) {
//             if (btnType == "all") {
//                 return menuItem
//             } else if (menuItem.type == btnType) {
//                 return menuItem
//             }
//         })
//         outPutInfo(filtrar)
//     })
// });


// function outPutInfo(menuItems) {
//     let outPut = menuItems.map(function (items) {
//         return `<div class="menu-item-container">
//     <div class="menu-img-container">
//       <img class="menu-item-img" src=${items.imgUrl} alt="">
//     </div>
//     <div class="menu-content-container">
//       <div class="menu-item-text">
//         <div class="menu-item-tittle-container">
//           <p class="menu-item-tittle"><span>${items.name}</span> <span class="menu-item-price">$${items.price}</span>
//           </p>
//           <div class="menu-item-tittle-underline"></div>
//         </div>
//         <div class="menu-item-description">
//           <p>${items.description}</p>
//         </div>
//       </div>
//     </div>
//   </div>`
//     })
//     menuContainer.innerHTML = outPut.join("")
// }






// btn.forEach(function (e) {
//     e.addEventListener("click", function (btn) {
//         const category = btn.currentTarget.dataset.id
//         const menu = menuItems.filter(function (type) {
//             if (type.type === category) {
//                 return menuItem

//             }


//             if (category == "all") {
//                 displayItems(menuItems)

//             }
//             else {
//                 displayItems(menu)
//                 console.log(menu)
//             }

//             // console.log(btn.currentTarget.dataset.id)
//         })


//     })
// });




// function displayItems(menuItems) {
//     let displayItems = menuItems.map(function (menuItems) {
//         return `<div class="menu-item-container">
//     <div class="menu-img-container">
//       <img class="menu-item-img" src=${menuItems.imgUrl} alt="">
//     </div>
//     <div class="menu-content-container">
//       <div class="menu-item-text">
//         <div class="menu-item-tittle-container">
//           <p class="menu-item-tittle"><span>${menuItems.name}</span> <span class="menu-item-price">$${menuItems.price}</span>
//           </p>
//           <div class="menu-item-tittle-underline"></div>
//         </div>
//         <div class="menu-item-description">
//           <p>${menuItems.description}</p>
//         </div>
//       </div>
//     </div>
//   </div>`
//     })
//     // console.log(displayItems)

//     //join() - O método join() junta todos os elementos de uma array (ou um array-like object) em uma string e retorna esta string.
//     displayItems = displayItems.join("")
//     menuContainer.innerHTML = displayItems
// }



// btnPancakes.addEventListener("click", function () {
//     filter("pancake")
// })

// btnSweets.addEventListener("click", function () {
//     filter("sweet")
// })

// btnFruit.addEventListener("click", function () {
//     filter("fruit")
// })


// btnAll.addEventListener("click", function () {
//     loadContent(menuItems)
// })


// function filter(item) {
//     menuContainer.innerHTML = ""
//     menuItems.filter(function (menuItems) {
//         if (menuItems.type == `${item}`)
//             output(menuItems)
//         console.log(menuItems.price)
//     })
// }

// function loadContent(menuItems) {
//     menuContainer.innerHTML = ""
//     menuItems.map(function (menuItems) {
//         output(menuItems)
//         console.log(menuItems.price)
//     })
// }


// function output(menuItems) {
//     content =
//         `<div class="menu-item-container">
//     <div class="menu-img-container">
//       <img class="menu-item-img" src=${menuItems.imgUrl} alt="">
//     </div>
//     <div class="menu-content-container">
//       <div class="menu-item-text">
//         <div class="menu-item-tittle-container">
//           <p class="menu-item-tittle"><span>${menuItems.name}</span> <span class="menu-item-price">$${menuItems.price}</span>
//           </p>
//           <div class="menu-item-tittle-underline"></div>
//         </div>
//         <div class="menu-item-description">
//           <p>${menuItems.description}</p>
//         </div>
//       </div>
//     </div>
//   </div>`
//     let createDiv = document.createElement("div")
//     createDiv.classList.add("menu-item-container")
//     createDiv.innerHTML = content
//     menuContainer.appendChild(createDiv)
// }


// loadContent(menuItems)


// menuItems.forEach(function (menuItems) {
//     // console.log(menuItems)
//     // console.log(1)
//     let content =
//         `
//         <div class="menu-img-container">
//           <img class="menu-item-img" src=${menuItems.imgUrl} alt="">
//         </div>
//         <div class="menu-content-container">
//           <div class="menu-item-text">
//             <div class="menu-item-tittle-container">
//               <p class="menu-item-tittle"><span>${menuItems.name}</span> <span class="menu-item-price">$${menuItems.price}</span>
//               </p>
//               <div class="menu-item-tittle-underline"></div>
//             </div>
//             <div class="menu-item-description">
//               <p>${menuItems.description}</p>
//             </div>
//           </div>

//         </div>`
//     let createDiv = document.createElement("div")
//     createDiv.classList.add("menu-item-container")
//     createDiv.innerHTML = content
//     menuContainer.appendChild(createDiv)

// });







// menuItems.forEach({
//     console.log(element)
// });




// function output() {
//     for (let i = 0; i < menuItems.length; i++) {
//         items(i)
//         let createDiv = document.createElement("div")
//         createDiv.classList.add("menu-item-container")
//         createDiv.innerHTML = itemOutput
//         menuContainer.appendChild(createDiv)
//     }
// }
// output()



// // `<div class="menu-item-container">
// //     <div class="menu-img-container">
// //       <img class="menu-item-img" src=${menuItems[x].imgUrl} alt="">
// //     </div>
// //     <div class="menu-content-container">
// //       <div class="menu-item-text">
// //         <div class="menu-item-tittle-container">
// //           <p class="menu-item-tittle"><span>${menuItems[x].name}</span> <span class="menu-item-price">$${menuItems[x].price}</span>
// //           </p>
// //           <div class="menu-item-tittle-underline"></div>
// //         </div>
// //         <div class="menu-item-description">
// //           <p>${menuItems[x].description}</p>
// //         </div>
// //       </div>
// //     </div>
// //   </div>`


// function items(i) {

//     itemOutput = `<div class="menu-item-container">
//         <div class="menu-img-container">
//           <img class="menu-item-img" src=${menuItems[i].imgUrl} alt="">
//         </div>
//         <div class="menu-content-container">
//           <div class="menu-item-text">
//             <div class="menu-item-tittle-container">
//               <p class="menu-item-tittle"><span>${menuItems[i].name}</span> <span class="menu-item-price">$${menuItems[i].price}</span>
//               </p>
//               <div class="menu-item-tittle-underline"></div>
//             </div>
//             <div class="menu-item-description">
//               <p>${menuItems[i].description}</p>
//             </div>
//           </div>
//         </div>
//         </div>`
//     return
// }



// function tarde(x) {
//     let result = x * x
//     return `o dia? sao ${result} da tarde`
// }

// function greeting(name, horaDodia, number) {
//     console.log(`Hello ${name}, como está a correr ${horaDodia(number)}?`)
// }

// greeting("rui", tarde, 5)



// function ingrentes(item1, item2, item3, item4) {
//     return `${item1},${item2},${item3},${item4}`
// }

// function pizza(molho, base, ingrentes) {
//     console.log(`A sua pizza tem ${base}, com ${molho}, leva ${ingrentes}`)
// }

// let item1 = "cenoura"

// pizza("marinara classica", "alta e fofa", ingrentes(item1, "leite", "cenoura", "manteiga", "fiambre"))