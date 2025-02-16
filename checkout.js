let place_order = document.getElementById("place_order");
let nam = document.getElementById("nam");
let city = document.getElementById("city");
let number = document.getElementById("number");
let email = document.getElementById("email");
let address = document.getElementById("address");

let promo_code = document.getElementById("promo_code");
let apply_promo = document.getElementById("apply_promo");
let discount_amount = document.getElementById("discount_amount");
let final_total = document.getElementById("final_total");

let total = 100;  // Example total price before discount

apply_promo.addEventListener("click", function () {
    let discount = 0;
    if (promo_code.value === "ostad10") {
        discount = total * 0.10;
    } else if (promo_code.value === "ostad5") {
        discount = total * 0.05;
    } else {
        alert("Invalid promo code!");
        return;
    }

    discount_amount.textContent = `Discount: -$${discount.toFixed(2)}`;
    final_total.textContent = `Final Total: $${(total - discount).toFixed(2)}`;
});

place_order.addEventListener("click", function () {
    alert("Order Placed Successfully!");
    window.location.href = "index.html";
});



