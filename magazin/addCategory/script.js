// JSON.parse(localStorage.getItem("edituser"))
let close = document.querySelector(".close")
let cancel = document.querySelector(".cancel")
// let create = document.querySelector(".create")
let addCategory = document.querySelector(".addCat")
import { uniques } from "../const.js"

let { url } = uniques

let files = null

addCategory['file'].onchange = (event) => {
    let file = event.target.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (event) => {
        files = event.target.result
    }
}

addCategory.onsubmit = (event) => {
    event.preventDefault()
    let newCategory = {
        name: addCategory["name"].value,
        avatar: files
    }
    addUser(newCategory)
    addCategory.reset()
    window.location.href = 'http://127.0.0.1:5500/category/index.html'
}

export async function addUser(user) {
    try {
        await axios.post(url, user)
        getData()
    } catch (error) {
        console.error(error);
    }
}




close.onclick = () => {
    window.location = "http://127.0.0.1:5500/category/index.html"
}
cancel.onclick = () => {
    window.location = "http://127.0.0.1:5500/category/index.html"
}
