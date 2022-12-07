
const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
]


const getProducts = async (orderBy,url="https://fakestoreapi.com/products") => {

    const response = await fetch(url)
    const data = await response.json()
    // console.table(data)
    appendData(data)
    if(orderBy)sortItems(orderBy,data)
}

getProducts()


function appendData(data) {

    let container = document.querySelector(".products")
    container.innerHTML = null
    data.forEach(function (item) {

        let image = document.createElement("img")
        image.setAttribute("src", item.image)

        let title = document.createElement("p")
        title.innerText = item.title

        let price = document.createElement("p")
        price.innerText = "$" + " " + item.price

        let div = document.createElement("div")
        div.classList.add("card")
        div.append(image, title, price)

        container.append(div)
    })

}


let btnSort = document.getElementsByClassName("sort")

for(let btn of btnSort){
    btn.addEventListener("click",()=>{
        for(let button of btnSort){
        btn.classList.add("active-filter")
            button.classList.remove("active-filter")
        }
        btn.classList.add("active-filter")
    })
}

let sortItems = (orderBy,data)=>{
    let sorted ;
    if(orderBy==='price'){
         sorted = data.sort((a,b)=>a.price>b.price?1:-1)
    }
    if(orderBy==='-price'){
         sorted = data.sort((a,b)=>b.price>a.price?1:-1)
    }
    if(orderBy==='name'){
         sorted = data.sort((a,b)=>a.title>b.title?1:-1)
    }
    if(orderBy==='-name'){
         sorted = data.sort((a,b)=>b.title>a.title?1:-1)
        }
        appendData(sorted)
}

let categoryFilter = document.getElementById("category-filter")
categoryFilter.addEventListener("change",(e)=>{
    let url = getUrl(e.target.value)
    getProducts(false,url)
})



function getUrl(category){
    if(category)return `https://fakestoreapi.com/products/category/${category}`
    
}
