const form = document.querySelector(".todolist-form")
const alertBox = document.querySelector(".alert")
const submit = document.querySelector(".submit-btn")
const inputBox = document.querySelector(".input")
const listContainer = document.querySelector(".todolist-container")
const clearBtn = document.querySelector(".clear-list")


const todoList = []

//* Edit
let editElement
let editFlag = false
let editId = ""


window.addEventListener("DOMContentLoaded", setUpItems)



clearBtn.addEventListener("click", clearItems)
form.addEventListener("submit", addItem)
function addItem(e) {
    e.preventDefault()
    let inputValue = inputBox.value
    const id = new Date().getTime().toString()
    if (inputValue && !editFlag) {
        createListItem(id, inputValue)
        diplayAlert(`Item Added to the List`, `success`)
        clearBtn.classList.add("show")
    }
    else if (inputValue && editFlag) {
        editElement.innerHTML = inputValue
        diplayAlert(`Edited`, `success`)
        //eddit local storage
        editLocalStorage(editId, inputValue)
        setBacktoDefault()
    }
    else {
        diplayAlert(`Plase enter value`, `danger`)
    }
    addTolocalStorage(id, inputValue)
    setBacktoDefault()
}

//clear items
function clearItems() {
    const items = document.querySelectorAll(".todo-item")
    if (items.length > 0) {
        items.forEach(function (item) {
            listContainer.removeChild(item)
        });
    }
    localStorage.clear();
    diplayAlert(`items removed`, `danger`)
    clearBtn.classList.remove("show")
    // localStorage.removeItem(`list`)
    setBacktoDefault()
}

//set back to default
function setBacktoDefault() {
    inputBox.value = ""
    editFlag = false
    let editId = ""
    submit.textContent = "Submit"
}

function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement
    const id = element.dataset.id
    listContainer.removeChild(element)
    if (listContainer.children.length === 0) {
        clearBtn.classList.remove("show")
    }
    diplayAlert(`item removed`, "danger")
    setBacktoDefault(id)
    removeFromLocalStorage(id)
}

function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement
    //    editElement =
    editElement = e.currentTarget.parentElement.previousElementSibling
    inputBox.value = editElement.innerText
    editFlag = true
    editId = element.dataset.id
    diplayAlert(`Edit the item`, "success")
    submit.textContent = "Edit"
    console.log(editId)
}




//local storage
function addTolocalStorage(id, value) {
    // const item = { id:id, value:value }
    //Short Hand Version when items have the same name
    const item = { id, value }
    let items = getLocalStorage()
    items.push(item)
    localStorage.setItem("list", JSON.stringify(items))
}

function editLocalStorage(id, value) {
    let items = getLocalStorage()
    items = items.map(function (item) {
        if (item.id === id) {
            item.value = value
        }
        return item
    })
}

function removeFromLocalStorage(id) {
    let items = getLocalStorage()
    items = items.filter(function (item) {
        if (item.id !== id) {
            return item
        }
    })
    localStorage.setItem("list", JSON.stringify(items))
}


function getLocalStorage() {
    return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : []
}


function setUpItems() {
    let items = getLocalStorage()
    if (items.length > 0) {
        items.forEach(function (item) {
            createListItem(item.id, item.value)
        })
    }
}

function createListItem(id, inputValue) {
    const element = document.createElement(`div`)
    element.classList.add("todo-item")
    const attr = document.createAttribute(`data-id`)
    attr.value = id
    element.setAttributeNode(attr)
    element.innerHTML =
        `<div class="todo">
            <p class="todo-text">${inputValue}</p>
          </div>
          <div class="todolist-btn-container">
            <button type="submit" class="btn edit-btn"> <i class="fas fa-edit"></i> </button>
            <button type="submit" class="btn delete-btn"> <i class="fas fa-trash"></i> </button>
          </div>`
    const editBtn = element.querySelector(".edit-btn")
    const deleteBtn = element.querySelector(".delete-btn")
    editBtn.addEventListener("click", editItem)
    deleteBtn.addEventListener("click", deleteItem)
    listContainer.appendChild(element)
}



//Displaying Allert
function diplayAlert(text, action) {
    alertBox.textContent = text
    alertBox.classList.add(`alert-${action}`)
    // Removing Alert 
    setTimeout(function () {
        alertBox.textContent = ""
        alertBox.classList.remove(`alert-${action}`)
    }, 2000)
}