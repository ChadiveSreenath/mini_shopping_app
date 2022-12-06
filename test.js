

const url = "https://fakestoreapi.com/products"

const getProducts = async () => {

    const response = await fetch(url)
    const data = await response.json()
    console.table(data)
    appendData(data)
}

getProducts()


function appendData(data) {

    let container = document.querySelector(".container")
    container.innerHTML=null
    data.forEach(function (item){
        
        let image = document.createElement("img")
        image.setAttribute("src", item.image)
    
        let title = document.createElement("p")
        title.innerText=item.title
    
        let price = document.createElement("p")
        price.innerText=item.price
    
        let div = document.createElement("div")
        div.classList.add("card")
        div.append(image,title,price)
    
        container.append(div)
    })

}



