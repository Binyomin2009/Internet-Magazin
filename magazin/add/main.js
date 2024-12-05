let btnBack = document.querySelector('.btnBack');
let addForm = document.querySelector(".addForm")
import { uniques } from "../const.js";

let {urlProduct} = uniques

btnBack.onclick = () => {
    window.location = "../product/index.html"
}

let file = null
addForm["inpfile"].onchange = () => {
    let files = addForm["inpfile"].files[0]
    let reader = new FileReader(files)
    reader.readAsDataURL(files)
    reader.onload = () => {
        file = reader.result
    }
}
addForm.onsubmit = async (event) => {
    event.preventDefault()
    let addProduct = {
        name: addForm["prodName"].value,
        Description: addForm["descipt"].value,
        category: addForm["selCategory"].value,
        price: addForm["price"].value,
        inventory: addForm["count"].value,
        Size: addForm["size"].value,
        weigt: addForm["selvazn"].value,
        color: addForm["color"].value,
        image: file
    }
    try {
        await axios.post(urlProduct, addProduct)
        window.location = "../product/index.html"
    } catch (error) {
        console.error(error);
    }
}

