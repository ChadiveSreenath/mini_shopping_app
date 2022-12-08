
import appendData from "./reusable.js"

let container = document.querySelector(".products")



let cartItems = JSON.parse(localStorage.getItem("cartItems"))||[]


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
    appendData(data,container)
    if(orderBy)sortItems(orderBy,data)
}

getProducts()



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
        appendData(sorted,container)
}

let categoryFilter = document.getElementById("category-filter")
categoryFilter.addEventListener("change",(e)=>{
    let url = getUrl(e.target.value)
    getProducts(false,url)
})



function getUrl(category){
    if(category)return `https://fakestoreapi.com/products/category/${category}`
    
}
