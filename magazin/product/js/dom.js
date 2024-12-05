let checkboxAll = document.querySelector(".checkboxAll")
let btnDash = document.querySelector(".btnSVG1")
let btnProd = document.querySelector(".btnSVG2")
let btnCategory = document.querySelector(".btnSVG3")
let btnAdd = document.querySelector(".add")
let prod = document.querySelector(".h32")
let dash = document.querySelector(".h31")
let category = document.querySelector(".h33")
import { deleteProd } from "./api.js"


let tbody = document.querySelector(".tbody")

export function get(data) {
    tbody.innerHTML = ""
    data.forEach(el => {
        let div = document.createElement("td")
        div.style.display = "flex"
        div.style.textAlign = "center"
        div.classList.add("div")
        
        
        let tr = document.createElement("tr")
        
        let img = document.createElement("img")
        img.src = el.image
        img.classList.add("imgs")
        
        let name = document.createElement("h3")
        name.innerHTML = el.name
        
        let td = document.createElement("td")
        td.style.textAlign = "center"
        
        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.classList.add("chek")
        
        let price = document.createElement("td")
        price.innerHTML = el.price
        price.style.textAlign = "center"
        
        let inventory = document.createElement("td")
        inventory.innerHTML = el.inventory > 0? "IN STOCK":"OUT OF STOCK";
        inventory.classList.add("inv")
        
        let category = document.createElement("div")
        category.innerHTML = el.category;
        category.classList.add("cats")
        
        let btnEdit = document.createElement("button")
        btnEdit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size">
        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg>
        `
        
        
        let btnDel = document.createElement("button")
        btnDel.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
        `

        btnDel.onclick = () =>{
            deleteProd(el.id)
        }
        td.append(checkbox)
        
        div.append(img,name)
        tr.append(td,div,inventory,category,price,btnEdit,btnDel)
        tbody.appendChild(tr)
    });
}


btnProd.onclick = () => {
    window.location.href = "http://127.0.0.1:5500/product/index.html"
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

btnAdd.onclick = () =>{
    window.location = "../../add/index.html"
}

