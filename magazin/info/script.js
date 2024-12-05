let prod = JSON.parse(localStorage.getItem('info'))
console.log(prod);


let name1= document.querySelector('.name1')
name1.textContent = prod.name

let img = document.querySelector('.img')
img.src=prod.image

let name2 = document.querySelector('.name2')
name2.innerHTML = prod.name

let stat = document.querySelector('.status')
if(prod.status){
    stat.innerHTML = 'In Stock'
    stat.style.color = 'green'
} else{
    stat.innerHTML = 'Out of Stock'
    stat.style.color = 'red'
}

// let quantity = document.querySelector('#quantity')
// quantity.innerHTML = prod.quant>0 ? `(${prod.quant})` : ''

let price = document.querySelector('.price')
price.innerHTML = `$${prod.price}`
let text = document.querySelector('.about')
text.innerHTML = prod.Description

text.classList.add("desc")

let col = document.querySelector('.col')
