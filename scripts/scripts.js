function addProductToCart(productId, buttonId, cartId) {
  const productDiv = document.getElementById(productId);
  const childArray = Array.from(productDiv.children);
  const button_product = document.getElementById(buttonId);
  const cartItem = document.getElementById(cartId);

  button_product.addEventListener("click", () => {
    const cartDiv = document.createElement("div");
    cartDiv.setAttribute("data-id", productId);
    cartItem.appendChild(cartDiv);
    childArray.forEach((element) => {
      const newCartItem = document.createElement("span");
      newCartItem.textContent = element.textContent;
      cartDiv.appendChild(newCartItem);
    });
    const delete_button = document.createElement("button");
    delete_button.setAttribute("data-id", productId);
    delete_button.textContent = "Supprimer";
    cartDiv.appendChild(delete_button);
    delete_button.addEventListener("click", () => {
      deleteCart(productId);
      console.log(cartDiv.getAttribute("data-id"));
      if (
        cartDiv.getAttribute("data-id") ===
        delete_button.getAttribute("data-id")
      ) {
        cartDiv.remove();
      }
    });
  });
}
addProductToCart("product1", "button-product1", "cartItem");
addProductToCart("product2", "button-product2", "cartItem");
addProductToCart("product3", "button-product3", "cartItem");
