const products = [
    {
        id: 1,
        name: "Laptop",
        price: 50000,
        image: "https://via.placeholder.com/150"
    },
    {
        id: 2,
        name: "Headphones",
        price: 2000,
        image: "https://via.placeholder.com/150"
    },
    {
        id: 3,
        name: "Smartphone",
        price: 25000,
        image: "https://via.placeholder.com/150"
    },
    {
        id: 4,
        name: "Shoes",
        price: 1500,
        image: "https://via.placeholder.com/150"
    }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayProducts() {
    const productList = document.getElementById("product-list");

    products.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product");

        div.innerHTML = `
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;

        productList.appendChild(div);
    });
}

function addToCart(id) {
    const item = products.find(product => product.id === id);
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    document.getElementById("cart-count").innerText = cart.length;
}

displayProducts();
updateCartCount();
