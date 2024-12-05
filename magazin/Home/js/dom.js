let category = document.querySelector(".cats")
let products = document.querySelector(".products")


export function get(data) {
    products.innerHTML = ""
    data.forEach(el => {
        let div = document.createElement("div")
        div.classList.add("divs")

        let image = document.createElement("img")
        image.src = el.image

        image.onclick = () =>{
            window.location = "http://127.0.0.1:5500/info/index.html"
            localStorage.setItem("info",JSON.stringify(el))
        }

        image.classList.add("img")

        let name = document.createElement("h4")
        name.innerHTML = el.name


        let price = document.createElement("p")
        price.innerHTML = el.price

        let addToCard = document.createElement("button")
        addToCard.classList.add("btnAdd")
        addToCard.textContent = "Add To Card"
        div.append(image, name, price, addToCard)

        products.append(div)
    });
}






export function gets(data) {
    // category.innerHTML = ""
    data.forEach(el => {
        let cont = document.createElement("div")

        let catName = document.createElement("h3")
        catName.innerHTML = el.name

        let imgCat = document.createElement("img")
        imgCat.src = el.avatar

        console.log(catName);
        

        cont.append(imgCat, catName)
        category.append(cont)
    });
}







let sliders = document.querySelectorAll(".imgSlide")
let abos = document.querySelector(".abos")
let array = Array.from(sliders)
let cnt = 0
function sliding() {
    array[cnt].style.display = 'none';
    cnt++;
    if (cnt === array.length) {
        cnt = 0;
    }
    array[cnt].style.display = 'block';
    abos.src = array[cnt].src;
}
setInterval(sliding, 2000)




let totalTimeInSeconds = 86399;
const timeDisplay = document.querySelector('.time');

function updateClock() {
    const hours = Math.floor(totalTimeInSeconds / 3600);
    const minutes = Math.floor((totalTimeInSeconds % 3600) / 60);
    const seconds = totalTimeInSeconds % 60;

    timeDisplay.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

    if (totalTimeInSeconds > 0) {
        totalTimeInSeconds--;
    }
}

function pad(num) {
    return num < 10 ? `0${num}` : num;
}

setInterval(updateClock, 1000);

updateClock();

