let cart = [];

function addToCart(item) {
    cart.push(item);
    document.getElementById("count").innerText = cart.length;

    let list = document.getElementById("cart");
    list.innerHTML = "";

    cart.forEach(i => {
        let li = document.createElement("li");
        li.innerText = i;
        list.appendChild(li);
    });
}

function placeOrder() {
    if (cart.length === 0) {
        alert("Cart is empty");
        return;
    }

    document.getElementById("status").innerHTML =
        "✅ Order Accepted<br>🚴 Delivery Partner: Arun";

    cart = [];
    document.getElementById("cart").innerHTML = "";
    document.getElementById("count").innerText = 0;
}

