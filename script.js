let cart = [];function addToCart(item, price) {cart.push({item, price});alert(item + " added to cart!");}function checkout() {let message = "Hello, I want to order:
";cart.forEach(c => {message += `${c.item} - Rs ${c.price}
`;});let url = "https://wa.me/923001234567?text=" + encodeURIComponent(message);window.open(url, "_blank");}