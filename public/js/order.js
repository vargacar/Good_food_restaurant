const selectedItems = []
const cartBtn = document.getElementById('cart')
const cart_items_container = document.querySelector('.cart_items_container')
const totalPrice = document.querySelector('#total_price')
const confirmBtn = document.querySelector('.confirm')
let totalItemPrice = 0

function addToOrder(event, name, price, imageurl, id) {
    event.disabled = true
    let item = { name, price, imageurl, id, quantity: 1 }
    selectedItems.push(item)
    printSelectedCount()
}
function printSelectedCount() {
    cartBtn.innerText = 'Cart ' + selectedItems.length
}

function renderCartItems(){
    let itemsHTML = ''
    for (let item of selectedItems) {
        itemsHTML += `
        <div class="cart_item">
        <img src="${item.imageurl}" alt="">
        <p>${item.name}</p>
        <p>
            <button onclick="addquantity(${item.id})" class="add">+</button>
            <span class="quantity">${item.quantity}</span>
            <button onclick="reducequantity(${item.id})" class="add">-</button>
        </p>
        <p>$${item.price}</p>
    </div>`
    }
    cart_items_container.innerHTML = itemsHTML
    printPrice()

}
cartBtn.addEventListener('click',()=>{
    const cartItems = document.querySelector('.cart_items')
    cartItems.classList.toggle('active');
    renderCartItems()
})
function printPrice() {
    let total = selectedItems.reduce((t, item) => {
        return t + (+item.price*item.quantity)
    }, 0)
    totalPrice.innerHTML = '$' + total
    totalItemPrice = total
}
function addquantity(id){
    let item = selectedItems.find((i)=>{
        
        return i.id == id
    })
    item.quantity++

    renderCartItems()
}
function reducequantity(id){
    let item = selectedItems.find((i)=>{
        return i.id == id
    })
    item.quantity--

    renderCartItems()
}


async function createOrder(){
    const login = document.getElementById('login')
    if(login){
        alert('Login required')
        return
    }
    const response = await fetch('/api/orders', {
        method: 'POST',
        body: JSON.stringify({ items: selectedItems, totalPrice: totalItemPrice }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        const data = await response.json()
        alert(data.message)
        document.location.replace('/account');
      } else {
        alert(response.statusText);
      }
}

confirmBtn.addEventListener('click',createOrder)
