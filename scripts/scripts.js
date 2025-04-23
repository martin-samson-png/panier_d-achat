const productDiv = document.getElementById("product1");
const childArray = Array.from(productDiv.children)
const button_product = document.getElementById("button-product");
const cartItem = document.getElementById("cartItem")
button_product.addEventListener("click", () => {
    const cartDiv = document.createElement("div")
    cartItem.appendChild(cartDiv)
    childArray.forEach(element => {
        const newCartItem = document.createElement("span");
        newCartItem.textContent = element.textContent;
        cartDiv.appendChild(newCartItem);
    })    
    
})