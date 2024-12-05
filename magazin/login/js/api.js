let LoginForm = document.querySelector(".login")
import { uniques } from "../../const.js"
let { urlLogin } = uniques

LoginForm.onsubmit = async (e) => {
    e.preventDefault()
    let { data } = await axios.get(urlLogin)
    get(data)
    data.forEach(el => {
        if (LoginForm["name"].value == el.name && LoginForm["password"].value == el.password) {
            window.location = "http://127.0.0.1:5500/dashboard/index.html"
        }
        else {
            alert("Parolt xatohay!!!")
        }
    });
}

// newUser.onclick = () => {
//     window.location.href = "http://127.0.0.1:5500/addLogin/index.html"
// }