const coffeeMenu = [
  { name: "Espresso", price: 120, img: "https://i.imgur.com/sR1D3WJ.png" },
  { name: "Cappuccino", price: 150, img: "https://i.imgur.com/jR9O9F7.png" },
  { name: "Latte", price: 170, img: "https://i.imgur.com/DmLZmKz.png" },
  { name: "Mocha", price: 180, img: "https://i.imgur.com/8Xutg9G.png" },
  { name: "Cold Brew", price: 200, img: "https://i.imgur.com/63cdFJ7.png" }
];

const coffeeList = document.getElementById("coffeeList");
const cartItems = document.getElementById("cartItems");
const totalPriceElem = document.getElementById("totalPrice");
const checkoutBtn = document.getElementById("checkoutBtn");

let cart = [];
let total = 0;

// Display coffee items
coffeeMenu.forEach((coffee, index) => {
  const div = document.createElement("div");
  div.className = "coffee-item";
  div.innerHTML = `
    <img src="${coffee.img}" alt="${coffee.name}">
    <h3>${coffee.name}</h3>
    <p>₹${coffee.price}</p>
    <button onclick="addToCart(${index})">Add to Cart</button>
  `;
  coffeeList.appendChild(div);
});

// Add to cart
function addToCart(index) {
  const coffee = coffeeMenu[index];
  cart.push(coffee);
  total += coffee.price;

  updateCart();
}

// Update cart display
function updateCart() {
  cartItems.innerHTML = "";
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
  });

  totalPriceElem.textContent = total;
}

// Checkout button
checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Thank you for your order! ☕");
    cart = [];
    total = 0;
    updateCart();
  }
});
