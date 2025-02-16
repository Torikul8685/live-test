document.addEventListener("DOMContentLoaded", function () {
    let renderData = document.querySelector(".renderData");
    let dynamic_count = document.querySelector(".dynamic-count");
    let total_price = document.getElementById("total_price");
    let cartItems = [];
    
    async function fetchProducts() {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        
        data.forEach((product) => {
            let productCard = document.createElement("div");
            productCard.classList.add("box-main");
            
            productCard.innerHTML = `
                <img src="${product.image}" alt="Product Image">
                <p class="productTitle">${product.title.slice(0, 30)}...</p>
                <p class="price-element">Price: $${product.price}</p>
                <button class="btn-element">Add To Cart</button>
            `;

            productCard.querySelector(".btn-element").addEventListener("click", () => {
                addToCart(product);
            });

            renderData.appendChild(productCard);
        });
    }

    function addToCart(product) {
        cartItems.push(product);
        updateCart();
    }

    function updateCart() {
        dynamic_count.textContent = cartItems.length;
        let total = cartItems.reduce((acc, item) => acc + item.price, 0);
        total_price.textContent = `Total: $${total.toFixed(2)}`;
    }

    fetchProducts();
});












































































