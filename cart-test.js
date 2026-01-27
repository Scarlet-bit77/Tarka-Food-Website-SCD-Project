const { addToCart, removeFromCart, updateQuantity, calculateTotals } = require('../cart');

// Initial state
let cart = [];

const tests = [
    {
        name: "Add item",
        action: () => {
            cart = addToCart(cart, { id: 1, name: "Burger", price: 500, quantity: 2 });
            return cart.length === 1 && cart[0].quantity === 2;
        }
    },
    {
        name: "Add same item increases quantity",
        action: () => {
            cart = addToCart(cart, { id: 1, name: "Burger", price: 500, quantity: 1 });
            return cart[0].quantity === 3;
        }
    },
    {
        name: "Add new item",
        action: () => {
            cart = addToCart(cart, { id: 2, name: "Fries", price: 200, quantity: 1 });
            return cart.length === 2;
        }
    },
    {
        name: "Update quantity",
        action: () => {
            cart = updateQuantity(cart, 1, 5);
            return cart[0].quantity === 5;
        }
    },
    {
        name: "Remove item",
        action: () => {
            cart = removeFromCart(cart, 2);
            return cart.length === 1;
        }
    },
{
    name: "Calculate totals including tax, delivery, promo",
    action: () => {
        const totals = calculateTotals(cart, 'PROMO10'); // pass promo code if needed

        const expectedSubtotal = 500 * 5;
        const expectedDelivery = 150; // whatever your logic gives
        const expectedTax = Math.round(expectedSubtotal * 0.05);
        const expectedPromoDiscount = 50; // example promo value
        const expectedTotal = expectedSubtotal + expectedDelivery + expectedTax - expectedPromoDiscount;

        return totals.subtotal === expectedSubtotal &&
               totals.deliveryFee === expectedDelivery &&
               totals.tax === expectedTax &&
               totals.promoDiscount === expectedPromoDiscount &&
               totals.total === expectedTotal;
    }
}



];

// Run tests
tests.forEach((t, i) => {
    const result = t.action();
    console.log(`${i + 1}. ${t.name}: ${result ? "PASS ✅" : "FAIL ❌"}`);
});
