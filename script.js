// products.js
const params = new URLSearchParams(window.location.search);
const category = params.get("category");

const allCategories = data.products[0];
const products = allCategories[category];

const title = document.getElementById("categoryTitle");
const container = document.getElementById("productContainer");

if (!category) {
  title.innerText = "No category selected.";
  container.innerHTML = "<p>Please choose a category.</p>";
} else if (!products) {
  title.innerText = "Category not found.";
  container.innerHTML = "<p>No products available in this category.</p>";
} else {
  title.innerText = `Showing: ${category.toUpperCase()}`;
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}" width="150">
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <p><strong>\u20B9${product.price}</strong></p>
      <button>Add to Cart</button>
    `;
    div.querySelector("button").addEventListener("click", () => {
      alert(`Added ${product.title} to cart.`);
    });
    container.appendChild(div);
  });
}

function goToCart() {
  window.location.href = "cart.html";
}
