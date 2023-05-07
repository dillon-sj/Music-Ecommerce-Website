// cart
const cartIcon = document.getElementById("cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#close-cart");

cartIcon.addEventListener("click", () => {
  cart.classList.add("active");
});

closeCart.addEventListener("click", () => {
  cart.classList.remove("active");
});

// add function
document.addEventListener("DOMContentLoaded", () => {
  // remove items from cart
  const removeCartButtons =
    document.getElementsByClassName("cart-remove");
  Array.from(removeCartButtons).forEach((button) => {
    button.addEventListener("click", () => {
      button.parentElement.remove();
      updateTotal();
    });
  });
});

// Quantity changes
const quantityInputs = document.getElementsByClassName("cart-quantity");
Array.from(quantityInputs).forEach((input) => {
  input.addEventListener("change", () => {
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updateTotal();
  });
});

// add to cart
const addCart = document.getElementsByClassName("add-cart");
Array.from(addCart).forEach((button) => {
  button.addEventListener("click", () => {
    const shopProducts = button.parentElement;
    const title = shopProducts.querySelector(".product-title").innerText;
    const price = shopProducts.querySelector(".price").innerText;
    const productImg = shopProducts.querySelector(".product-img").src;
    addProductToCart(title, price, productImg);
  });
});



// remove items from cart
function removeCartItems() {
  this.parentElement.remove();
  updateTotal();
}

// add to cart
function addProductToCart(title, price, productImg) {
  const cartContent = document.querySelector(".cart-content");
  const cartItemsName = cartContent.querySelectorAll(
    ".cart-product-title"
  );
  for (let i = 0; i < cartItemsName.length; i++) {
    if (cartItemsName[i].innerText === title) {
      alert("You have already added this item to cart");
      return;
    }
  }

  const cartBoxContent = `
<img src="${productImg}" alt="" class="cart-img" />
<div class="detail-box">
<div class="cart-product-title">${title}</div>
<div class="cart-price">${price}</div>
<input type="number" value="1" class="cart-quantity" />
</div>
<i class="bx bx-trash cart-remove"></i>
`;
  const cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");
  cartShopBox.innerHTML = cartBoxContent;
  cartContent.appendChild(cartShopBox);

  cartShopBox
    .querySelector(".cart-remove")
    .addEventListener("click", removeCartItems);
  cartShopBox
    .querySelector(".cart-quantity")
    .addEventListener("change", () => {
      updateTotal();
    });

  updateTotal();
}

// update total
function updateTotal() {
  const cartBoxes = document.querySelectorAll(".cart-box");
  let total = 0;
  Array.from(cartBoxes).forEach((cartBox) => {
    const priceElement = cartBox.querySelector(".cart-price");
    const quantityElement = cartBox.querySelector(".cart-quantity");
    const price = parseFloat(priceElement.innerText.replace("$", ""));
    const quantity = quantityElement.value;
    total += price * quantity;
    total = Math.round(total * 100) / 100;
  });

  document.querySelector(".total-price").innerText = `$${total}`;
}

const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const placeOrderBtn = document.getElementById("place-order-btn");


// Disable the "Place Order" button by default
placeOrderBtn.disabled = true;

// Listen for changes in the input fields
nameInput.addEventListener("input", updatePlaceOrderButton);
emailInput.addEventListener("input", updatePlaceOrderButton);

// Update the "Place Order" button based on the input fields
function updatePlaceOrderButton() {
  if (nameInput.value && emailInput.value) {
    placeOrderBtn.disabled = false;
  } else {
    placeOrderBtn.disabled = true;
  }
}


function proceedToCheckout() {
  const cartBoxes = document.querySelectorAll(".cart-box");
  const numItemsInCart = cartBoxes.length;
  if (numItemsInCart < 1) {
    alert("There are less than 1 items in the cart. Please add more.");
    return;
  }
  
  // const name = nameInput.value;
  // const email = emailInput.value;
const nameInput = document.getElementById("name-input").value;
  const emailInput = document.getElementById("email-input").value;
  const totalPrice = document.querySelector(".total-price").innerText;

  localStorage.setItem("name", nameInput);
  localStorage.setItem("email", emailInput);
  localStorage.setItem("totalPrice", totalPrice);

  window.location.href = "checkout.html";
}

placeOrderBtn.addEventListener("click", proceedToCheckout);

