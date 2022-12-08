
import appendData from "./reusable.js";

let container = document.querySelector(".products")


const cartData = JSON.parse(localStorage.getItem("CartItems"))

appendData(cartData,container)

