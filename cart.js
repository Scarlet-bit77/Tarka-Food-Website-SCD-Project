function addToCart(cart, item) {
    const existing = cart.find(x => x.id === item.id);
    if (existing) {
        existing.quantity += item.quantity;
    } else {
        cart.push({ ...item });
    }
    return cart;
}

function removeFromCart(cart, id) {
    return cart.filter(x => x.id !== id);
}

function updateQuantity(cart, id, quantity) {
    const item = cart.find(x => x.id === id);
    if (item) item.quantity = quantity;
    return cart;
}

function calculateTotals(cart, promoCode) {
    const subtotal = cart.reduce((sum, x) => sum + x.price * x.quantity, 0);

    // Delivery fee logic
    const deliveryFee = subtotal > 0 ? 150 : 0;

    // Tax
    const tax = Math.round(subtotal * 0.05);

    // Promo code
    let promoDiscount = 0;
    if (promoCode === 'PROMO10') {
        promoDiscount = 50; // example fixed discount
    }

    // Total
    const total = subtotal + tax + deliveryFee - promoDiscount;

    return { subtotal, tax, deliveryFee, promoDiscount, total };
}

module.exports = { addToCart, removeFromCart, updateQuantity, calculateTotals };
