
// ===== APPLICATION STATE =====
let cart = [];
let currentOrder = null;
let isLoggedIn = false;

 // ===== MENU DATA =====
        const menuItems = [
            // Pizza Category
            { id: 1, name: "Chicken Tikka Pizza", price: 1899, category: "pizza", emoji: "🍕" },
            { id: 2, name: "Fajita Pizza", price: 1799, category: "pizza", emoji: "🍕" },
            { id: 3, name: "Margherita Pizza", price: 1499, category: "pizza", emoji: "🍕" },
            { id: 4, name: "Pepperoni Pizza", price: 1699, category: "pizza", emoji: "🍕" },
            
            // Burger Category
            { id: 5, name: "Zinger Burger", price: 899, category: "burger", emoji: "🍔" },
            { id: 6, name: "Beef Burger", price: 1199, category: "burger", emoji: "🍔" },
            { id: 7, name: "Chicken Burger", price: 799, category: "burger", emoji: "🍔" },
            { id: 8, name: "Fish Burger", price: 999, category: "burger", emoji: "🍔" },
            
            // Biryani & Rice Category
            { id: 9, name: "Chicken Biryani", price: 1299, category: "biryani", emoji: "🍛" },
            { id: 10, name: "Mutton Biryani", price: 1899, category: "biryani", emoji: "🍛" },
            { id: 11, name: "Beef Biryani", price: 1599, category: "biryani", emoji: "🍛" },
            { id: 12, name: "Vegetable Biryani", price: 999, category: "biryani", emoji: "🍛" },
            { id: 13, name: "Plain Rice", price: 299, category: "biryani", emoji: "🍚" },
            { id: 14, name: "Pulao", price: 599, category: "biryani", emoji: "🍚" },
            
            // Karahi Category
            { id: 15, name: "Chicken Karahi", price: 1499, category: "karahi", emoji: "🍲" },
            { id: 16, name: "Mutton Karahi", price: 1999, category: "karahi", emoji: "🍲" },
            { id: 17, name: "Fish Karahi", price: 1699, category: "karahi", emoji: "🍲" },
            
            // Nehari Category
            { id: 18, name: "Beef Nehari", price: 1599, category: "nehari", emoji: "🍲" },
            { id: 19, name: "Mutton Nehari", price: 1799, category: "nehari", emoji: "🍲" },
            { id: 20, name: "Chicken Nehari", price: 1399, category: "nehari", emoji: "🍲" },
            
            // Veg & Paneer Category
            { id: 21, name: "Palak Paneer", price: 899, category: "veg-paneer", emoji: "🥬" },
            { id: 22, name: "Paneer Tikka", price: 999, category: "veg-paneer", emoji: "🧀" },
            { id: 23, name: "Dal Makhani", price: 699, category: "veg-paneer", emoji: "🍛" },
            { id: 24, name: "Mixed Vegetables", price: 599, category: "veg-paneer", emoji: "🥕" },
            
            // Curry & Gravies Category
            { id: 25, name: "Butter Chicken", price: 1299, category: "curry", emoji: "🍛" },
            { id: 26, name: "Chicken Curry", price: 1199, category: "curry", emoji: "🍛" },
            { id: 27, name: "Mutton Curry", price: 1599, category: "curry", emoji: "🍛" },
            { id: 28, name: "Fish Curry", price: 1399, category: "curry", emoji: "🐟" },
            
            // Naan & Bread Category
            { id: 29, name: "Garlic Naan", price: 199, category: "naan", emoji: "🫓" },
            { id: 30, name: "Butter Naan", price: 149, category: "naan", emoji: "🫓" },
            { id: 31, name: "Tandoori Roti", price: 99, category: "naan", emoji: "🫓" },
            { id: 32, name: "Cheese Naan", price: 249, category: "naan", emoji: "🫓" },
            
            // BBQ & Grills
            { id: 33, name: "Chicken Tikka", price: 1299, category: "bbq", emoji: "🍖" },
            { id: 34, name: "Seekh Kebab", price: 999, category: "bbq", emoji: "🍖" },
            { id: 35, name: "Malai Boti", price: 1499, category: "bbq", emoji: "🍖" },
            { id: 36, name: "Beef Boti", price: 1599, category: "bbq", emoji: "🍖" },
            
            // Lassi & Drinks Category
            { id: 37, name: "Sweet Lassi", price: 299, category: "drinks", emoji: "🥛" },
            { id: 38, name: "Mango Lassi", price: 399, category: "drinks", emoji: "🥭" },
            { id: 39, name: "Fresh Lime", price: 199, category: "drinks", emoji: "🍋" },
            { id: 40, name: "Rooh Afza", price: 249, category: "drinks", emoji: "🥤" },
            
            // Desserts & Sweets
            { id: 41, name: "Gulab Jamun", price: 399, category: "dessert", emoji: "🍰" },
            { id: 42, name: "Kheer", price: 349, category: "dessert", emoji: "🍮" },
            { id: 43, name: "Ras Malai", price: 449, category: "dessert", emoji: "🍰" },
            { id: 44, name: "Kulfi", price: 299, category: "dessert", emoji: "🍦" },
            { id: 45, name: "Jalebi", price: 349, category: "dessert", emoji: "🍯" },
            
            // Desi Specials Category
            { id: 46, name: "Haleem", price: 899, category: "desi-specials", emoji: "🍲" },
            { id: 47, name: "Paya", price: 1199, category: "desi-specials", emoji: "🍖" },
            { id: 48, name: "Nihari", price: 1499, category: "desi-specials", emoji: "🍲" },
            { id: 49, name: "Sajji", price: 1999, category: "desi-specials", emoji: "🍗" }
        ];
           const categoryNames = {
            "pizza": "Pizza",
            "burger": "Burgers", 
            "biryani": "Biryani & Rice",
            "karahi": "Karahi",
            "nehari": "Nehari",
            "veg-paneer": "Veg & Paneer",
            "curry": "Curry & Gravies",
            "naan": "Naan & Bread",
            "bbq": "BBQ & Grills",
            "drinks": "Lassi & Drinks",
            "dessert": "Desserts & Sweets",
            "desi-specials": "Desi Specials"
        };
          // ===== MENU FUNCTIONS =====
        function loadMenu(filter = null) {
            const menuContainer = document.getElementById('menu-container');
            if (!menuContainer) return;
            
            if (filter) {
                // Show specific category
                const filteredItems = menuItems.filter(item => item.category === filter);
                const categoryName = categoryNames[filter] || filter;
                
                menuContainer.innerHTML = `
                    <div class="menu-category">
                        <h2 class="category-heading">${categoryName}</h2>
                        <div class="menu-items-row">
                            ${filteredItems.map(item => createFoodItemHTML(item)).join('')}
                        </div>
                    </div>
                `;
            } else {
                // Show all categories
                const categories = [...new Set(menuItems.map(item => item.category))];
                
                menuContainer.innerHTML = categories.map(category => {
                    const categoryItems = menuItems.filter(item => item.category === category);
                    const categoryName = categoryNames[category] || category;
                    
                    return `
                        <div class="menu-category">
                            <h2 class="category-heading">${categoryName}</h2>
                            <div class="menu-items-row">
                                ${categoryItems.map(item => createFoodItemHTML(item)).join('')}
                            </div>
                        </div>
                    `;
                }).join('');
            }
        }
        function createFoodItemHTML(item) {
            return `
                <div class="food-item">
                    <div class="food-image">${item.emoji}</div>
                    <div class="food-info">
                        <div class="food-details">
                            <div class="food-name">${item.name}</div>
                        </div>
                        <div class="food-price">Rs${item.price}</div>
                        <button class="add-to-cart-btn" onclick="addToCart(${item.id})">Add to Cart</button>
                    </div>
                </div>
            `;
        }
document.addEventListener('DOMContentLoaded', function() {
            loadMenu(); // Show all categories by default
        });

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
