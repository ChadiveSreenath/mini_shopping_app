

const cartItems = JSON.parse(localStorage.getItem("CartItems"))||[]

function appendData(data,container) {

    container.innerHTML = null
    data.forEach(function (item) {

        const isAlreadyInCart = cartItems.findIndex(elem=>elem.id===item.id)

        let image = document.createElement("img")
        image.setAttribute("src", item.image)

        let title = document.createElement("p")
        title.innerText = item.title

        let price = document.createElement("p")
        price.innerText = "$" + " " + item.price

        let cartBtn = document.createElement("button")
        cartBtn.innerText = isAlreadyInCart===-1?"Add to cart":"Remove from cart"

        cartBtn.addEventListener("click", () => {
            isAlreadyInCart===-1?addToCart(item):removeFromCart(item,container)
        })

        let div = document.createElement("div")
        div.classList.add("card")

        div.append(image, title, price, cartBtn)

        container.append(div)
    })

}

export default appendData

function addToCart(item){

    cartItems.push(item)
    localStorage.setItem("CartItems",JSON.stringify(cartItems))
}

function removeFromCart(item,container){
    const updatedItems = cartItems.filter(elem=>elem.id!==item.id)
    localStorage.setItem("CartItems",JSON.stringify(updatedItems))
    appendData(updatedItems,container)
}