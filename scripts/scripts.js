function addProductToCart(productId, buttonId, cartId) {
  const productDiv = document.getElementById(productId);
  const childArray = Array.from(productDiv.children);
  const button_product = document.getElementById(buttonId);
  const cartItem = document.getElementById(cartId);

  button_product.addEventListener("click", () => {
    const cartDiv = document.createElement("div");
    cartItem.appendChild(cartDiv);
    childArray.forEach((element) => {
      const newCartItem = document.createElement("span");
      newCartItem.textContent = element.textContent;
      cartDiv.appendChild(newCartItem);
    });
  });
}
addProductToCart("product1", "button-product1", "cartItem");
addProductToCart("product2", "button-product2", "cartItem");
addProductToCart("product3", "button-product3", "cartItem");
