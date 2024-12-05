let btnDash = document.querySelector(".btnSVG1")
let btnProd = document.querySelector(".btnSVG2")
let btnCategory = document.querySelector(".btnSVG3")

let prod = document.querySelector(".h32")
let dash = document.querySelector(".h31")
let category = document.querySelector(".h33")

btnProd.onclick = () => {
    window.location = "http://127.0.0.1:5500/product/index.html"
}
prod.onclick = () => {
    window.location = "http://127.0.0.1:5500/product/index.html"
}

btnDash.onclick = () => {
    window.location = "http://127.0.0.1:5500/dashboard/index.html"
}
dash.onclick = () => {
    window.location = "http://127.0.0.1:5500/dashboard/index.html"
}

btnCategory.onclick = () => {
    window.location = "http://127.0.0.1:5500/category/index.html"
}
category.onclick = () => {
    window.location = "http://127.0.0.1:5500/category/index.html"
}