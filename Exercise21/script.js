let cart = [];
function addItem(name, price) {
    cart.push({ name, price });
    renderCart();
}
function renderCart() {
    const list = document.getElementById("cart");
    list.innerHTML = "";
    let total = 0;
    cart.forEach((item, i) => {
        total += item.price;
        const li = document.createElement("li");
        li.innerHTML = `${item.name} - $${item.price} <button onclick="removeItem(${i})">Remove</button>`;
        list.appendChild(li);
    });
    document.getElementById("total").innerText = `Total: $${total}`;
}
function removeItem(index) {
    cart.splice(index, 1);
    renderCart();
}
