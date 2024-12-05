let close = document.querySelector(".close")
let cancel = document.querySelector(".cancel")
let editCategory = document.querySelector(".editCat")
let user = JSON.parse(localStorage.getItem("editUser"))
let image = document.querySelector(".image")
import { uniques } from "../const.js"

let { url } = uniques

let files = null

editCategory["name"].value = user.name
image.src = user.avatar


editCategory['file'].onchange = (event) => {
    let file = event.target.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (event) => {
        files = event.target.result
    }
}


editCategory.onsubmit = async (e) => {
    e.preventDefault()
    let edit = {
        name: editCategory["name"].value,
        avatar: files
    }
    try {
        await axios.put(`${url}/${user.id}`,edit)
        window.location = "../category/index.html"
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



