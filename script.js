
// ===== APPLICATION STATE =====
let cart = [];
let currentOrder = null;
let isLoggedIn = false;

// ===== MENU DATA =====
const menuItems = [
    { id: 1, name: "Margherita Pizza", price: 12.99, category: "pizza", emoji: "🍕" },
    { id: 2, name: "Pepperoni Pizza", price: 15.99, category: "pizza", emoji: "🍕" },
    { id: 3, name: "Classic Burger", price: 9.99, category: "burger", emoji: "🍔" },
    { id: 4, name: "Cheese Burger", price: 11.99, category: "burger", emoji: "🍔" },
    { id: 5, name: "Chicken Biryani", price: 14.99, category: "Biryani", emoji: "🍛" },
    { id: 6, name: "Butter Chicken", price: 16.99, category: "Biryani", emoji: "🍛" },
    { id: 7, name: "Chocolate Cake", price: 6.99, category: "dessert", emoji: "🍰" },
    { id: 8, name: "Ice Cream", price: 4.99, category: "dessert", emoji: "🍦" }
];

// ===== MENU FUNCTIONS =====
function loadMenu(filter = null) {
    const menuGrid = document.getElementById('menu-grid');
    if (!menuGrid) return;
    
    const filteredItems = filter ? menuItems.filter(item => item.category === filter) : menuItems;
    
    menuGrid.innerHTML = filteredItems.map(item => `
        <div class="food-card">
            <div class="food-image">${item.emoji}</div>
            <div class="food-info">
                <h3>${item.name}</h3>
                <p class="food-price">$${item.price}</p>
                <button class="btn btn-primary" onclick="addToCart(${item.id})" style="margin-top: 1rem;">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// ===== CART FUNCTIONS =====
function addToCart(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    const existingItem = cart.find(i => i.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    
    updateCartCount();
    saveCartToStorage();
    showNotification(`${item.name} added to cart!`);
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartCount();
    saveCartToStorage();
    updateCartDisplay();
}

function updateQuantity(itemId, change) {
    const item = cart.find(i => i.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            updateCartCount();
            saveCartToStorage();
            updateCartDisplay();
        }
    }
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('#cart-count');
    cartCountElements.forEach(element => {
        element.textContent = count;
    });
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    if (!cartItems || !cartTotal) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: var(--text-light); margin: 3rem 0;">Your cart is empty</p>';
        cartTotal.style.display = 'none';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div>
                <h4>${item.name}</h4>
                <p class="food-price">$${item.price}</p>
            </div>
            <div style="display: flex; align-items: center; gap: 1rem;">
                <button onclick="updateQuantity(${item.id}, -1)" style="background: var(--light-orange); border: none; border-radius: 50%; width: 30px; height: 30px; cursor: pointer;">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity(${item.id}, 1)" style="background: var(--primary-orange); color: white; border: none; border-radius: 50%; width: 30px; height: 30px; cursor: pointer;">+</button>
                <button onclick="removeFromCart(${item.id})" style="background: #dc3545; color: white; border: none; border-radius: 5px; padding: 5px 10px; cursor: pointer;">Remove</button>
            </div>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('total-amount').textContent = total.toFixed(2);
    cartTotal.style.display = 'block';
}

function updateCheckoutTotal() {
    const checkoutTotal = document.getElementById('checkout-total');
    if (!checkoutTotal) return;
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    checkoutTotal.textContent = total.toFixed(2);
}

function handleLogin(event) {
  event.preventDefault();
  isLoggedIn = true;

  // Store login success flag in localStorage
  localStorage.setItem('loginSuccess', 'true');

  // Redirect to home page
  window.location.href = 'home.html';
}
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('loginSuccess') === 'true') {
    showNotification('Login successful!');
    localStorage.removeItem('loginSuccess');
  }
});
        
function handleCheckout(event) {
    event.preventDefault();
    
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    
    // Generate order
    currentOrder = {
        id: Math.floor(Math.random() * 100000),
        items: [...cart],
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        status: 'confirmed',
        timestamp: new Date()
    };
    
    // Save order and clear cart
    saveOrderToStorage();
    cart = [];
    updateCartCount();
    saveCartToStorage();
    
    // Redirect to confirmation page
    window.location.href = 'confirmation.html';
}

// ===== ORDER TRACKING =====
function simulateOrderProgress() {
    const steps = ['confirmed', 'preparing', 'cooking', 'ready', 'delivered'];
    let currentStep = 0;
    
    const interval = setInterval(() => {
        currentStep++;
        if (currentStep < steps.length) {
            currentOrder.status = steps[currentStep];
            saveOrderToStorage();
            updateTrackingDisplay();
        } else {
            clearInterval(interval);
        }
    }, 5000);
    
    updateTrackingDisplay();
}

function updateTrackingDisplay() {
    const trackingContent = document.getElementById('tracking-content');
    if (!trackingContent || !currentOrder) return;
    
    const steps = [
        { id: 'confirmed', label: 'Order Confirmed', icon: '✅' },
        { id: 'preparing', label: 'Preparing', icon: '👨‍🍳' },
        { id: 'cooking', label: 'Cooking', icon: '🔥' },
        { id: 'ready', label: 'Ready for Delivery', icon: '📦' },
        { id: 'delivered', label: 'Delivered', icon: '🚚' }
    ];
    
    trackingContent.innerHTML = `
        <div style="background: var(--light-yellow); padding: 2rem; border-radius: 15px; margin-bottom: 2rem;">
            <h3>Order #${currentOrder.id}</h3>
            <p>Total: $${currentOrder.total.toFixed(2)}</p>
        </div>
        <div class="tracking-steps">
            ${steps.map(step => `
                <div class="tracking-step">
                    <div class="step-circle ${getStepClass(step.id)}">
                        ${step.icon}
                    </div>
                    <p>${step.label}</p>
                </div>
            `).join('')}
        </div>
    `;
}

function getStepClass(stepId) {
    if (!currentOrder) return '';
    
    const steps = ['confirmed', 'preparing', 'cooking', 'ready', 'delivered'];
    const currentIndex = steps.indexOf(currentOrder.status);
    const stepIndex = steps.indexOf(stepId);
    
    if (stepIndex < currentIndex) return 'completed';
    if (stepIndex === currentIndex) return 'active';
    return '';
}

// ===== UTILITY FUNCTIONS =====
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--primary-orange);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        z-index: 10000;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function showSignup() {
    showNotification('Signup feature coming soon!');
}

// ===== LOCAL STORAGE FUNCTIONS =====
function saveCartToStorage() {
    localStorage.setItem('tarkaCart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('tarkaCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

function saveOrderToStorage() {
    localStorage.setItem('tarkaCurrentOrder', JSON.stringify(currentOrder));
}

function loadOrderFromStorage() {
    const savedOrder = localStorage.getItem('tarkaCurrentOrder');
    if (savedOrder) {
        currentOrder = JSON.parse(savedOrder);
    }
}

// ===== URL PARAMETER HANDLING =====
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// ===== PAGE INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Load cart from storage
    loadCartFromStorage();
    
    // Load order from storage
    loadOrderFromStorage();
    
    // Initialize page-specific content
    const currentPage = window.location.pathname.split('/').pop();
    
    switch(currentPage) {
        case 'menu.html':
            const category = getUrlParameter('category');
            loadMenu(category);
            break;
            
        case 'cart.html':
            updateCartDisplay();
            break;
            
        case 'checkout.html':
            updateCheckoutTotal();
            break;
            
        case 'tracking.html':
            updateTrackingDisplay();
            break;
            
        case 'confirmation.html':
            if (currentOrder) {
                document.getElementById('order-id').textContent = `#${currentOrder.id}`;
                // Start tracking simulation
                setTimeout(() => {
                    simulateOrderProgress();
                }, 2000);
            }
            break;
            
        default:
            // Home page or other pages
            break;
    }
});