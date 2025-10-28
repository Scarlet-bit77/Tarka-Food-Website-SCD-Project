
// ===== APPLICATION STATE =====
let cart = [];
let currentOrder = null;
let appliedPromo = null;
let userLoggedIn = false; // Changed variable name to avoid conflict
// ===== MENU DATA =====
const menuItems = [
    // Pizza Category
    { id: 1, name: "Chicken Tikka Pizza", price: 1900, category: "pizza", image: "chicken tikka pizza 1.jpg", rating: 4.8, description: "Delicious pizza topped with marinated chicken tikka, onions, bell peppers, and our special sauce. Baked to perfection with mozzarella cheese." },
    { id: 2, name: "Fajita Pizza", price: 1700, category: "pizza", image: "Fatija Pizza.jpg", rating: 4.6, description: "Mexican-style pizza with seasoned chicken, colorful bell peppers, onions, and jalapeños. Topped with cheese and our signature fajita sauce." },
    { id: 3, name: "Margherita Pizza", price: 1550, category: "pizza", image: "Margherita pizza.jpeg", rating: 4.5, description: "Classic Italian pizza with fresh tomato sauce, mozzarella cheese, and fresh basil leaves. Simple yet incredibly flavorful." },
    { id: 4, name: "Pepperoni Pizza", price: 2100, category: "pizza", image: "Pepperoni pizza.jpeg", rating: 4.7, description: "Traditional pepperoni pizza with spicy pepperoni slices, mozzarella cheese, and our homemade tomato sauce." },
    
    // Burger Category
    { id: 5, name: "Zinger Burger", price: 650, category: "burger", image: "zinger burger.jpeg", rating: 4.9, description: "Crispy fried chicken breast with spicy coating, fresh lettuce, tomatoes, and our special zinger sauce in a soft bun." },
    { id: 6, name: "Beef Burger", price: 870, category: "burger", image: "beef burger.jpg", rating: 4.7, description: "Juicy beef patty grilled to perfection, served with lettuce, tomatoes, onions, pickles, and our signature burger sauce." },
    { id: 7, name: "Chicken Burger", price: 600, category: "burger", image: "chicken burger.jpeg", rating: 4.4, description: "Tender grilled chicken breast with fresh vegetables and creamy mayo sauce in a toasted bun." },
    { id: 8, name: "Fish Burger", price: 800, category: "burger", image: "fish burger.jpg", rating: 4.3, description: "Crispy fish fillet with tartar sauce, lettuce, and tomatoes in a soft burger bun." },
    
    // Biryani & Rice Category
    { id: 9, name: "Chicken Biryani", price: 600, category: "biryani", image: "biryani.png", rating: 4.9, description: "Aromatic basmati rice cooked with tender chicken pieces, traditional spices, and saffron. Served with raita and shorba." },
    { id: 10, name: "Mutton Biryani", price: 900, category: "biryani", image: "mutton biryani.jpg", rating: 4.8, description: "Premium mutton pieces cooked with fragrant basmati rice, exotic spices, and garnished with fried onions and fresh herbs." },
    { id: 11, name: "Beef Biryani", price: 820, category: "biryani", image: "beef biryani.jpg", rating: 4.6, description: "Succulent beef chunks layered with spiced basmati rice, cooked in traditional dum style for authentic flavors." },
    { id: 12, name: "Vegetable Biryani", price: 580, category: "biryani", image: "vegetable birayni.jpg", rating: 4.2, description: "Mixed vegetables and paneer cooked with aromatic basmati rice and traditional biryani spices." },
    { id: 13, name: "Plain Rice", price: 250, category: "biryani", image: "plain rice.jpg", rating: 4.0, description: "Steamed basmati rice, perfect as a side dish with curries and gravies." },
    { id: 14, name: "Pulao", price: 500, category: "biryani", image: "pulao.jpg", rating: 4.3, description: "Fragrant rice cooked with whole spices, creating a mildly flavored and aromatic dish." },
    
    // Karahi Category
    { id: 15, name: "Chicken Karahi", price: 1300, category: "karahi", image: "Chicken-Karahi.jpg", rating: 4.8, description: "Traditional Pakistani dish with chicken cooked in a wok with tomatoes, ginger, garlic, and aromatic spices." },
    { id: 16, name: "Mutton Karahi", price: 1900, category: "karahi", image: "mutton karahi2.jpg", rating: 4.9, description: "Tender mutton pieces cooked in traditional karahi style with fresh tomatoes, green chilies, and ginger." },
    { id: 17, name: "Fish Karahi", price: 1550, category: "karahi", image: "fish-kherhai.jpg", rating: 4.5, description: "Fresh fish cooked in karahi with onions, tomatoes, and special coastal spices for a unique flavor." },
    { id: 18, name: "Seekh Kabab Karahi", price: 1400, category: "karahi", image: "seekh kabab karahi.jpg", rating: 4.7, description: "Delicious seekh kababs cooked in spicy karahi masala with rich tomato and ginger flavors." },

    // Nehari Category
    { id: 19, name: "Beef Nehari", price: 1000, category: "nehari", image: "beef nehari1.jpeg", rating: 4.7, description: "Slow-cooked beef in rich, spicy gravy with traditional nehari spices. Garnished with ginger and green chilies." },
    { id: 20, name: "Mutton Nehari", price: 1450, category: "nehari", image: "mutton nehari.jpg", rating: 4.8, description: "Tender mutton simmered overnight in aromatic spices, creating a rich and flavorful traditional dish." },
    { id: 21, name: "Chicken Nehari", price: 880, category: "nehari", image: "chicken nehari.jpeg", rating: 4.6, description: "Chicken cooked in traditional nehari style with a blend of aromatic spices and rich gravy." },
    { id: 22, name: "Special Nalli Nehari", price: 1700, category: "nehari", image: "nalli nahari.jpg", rating: 4.9, description: "Rich and flavorful bone marrow cooked slowly in traditional nehari gravy for a melt-in-mouth experience." },

    // Veg & Paneer Category
    { id: 23, name: "Palak Paneer", price: 850, category: "veg-paneer", image: "palak paneer.jpeg", rating: 4.4, description: "Fresh cottage cheese cubes cooked in creamy spinach gravy with aromatic spices." },
    { id: 24, name: "Paneer Tikka", price: 950, category: "veg-paneer", image: "paneer tikka.jpg", rating: 4.6, description: "Marinated paneer cubes grilled to perfection with bell peppers and onions." },
    { id: 25, name: "Dal Makhani", price: 700, category: "veg-paneer", image: "Daal makhani.jpg", rating: 4.5, description: "Creamy black lentils slow-cooked with butter, cream, and aromatic spices." },
    { id: 26, name: "Mixed Vegetables", price: 580, category: "veg-paneer", image: "Mix-Vegetables.jpg", rating: 4.1, description: "Seasonal vegetables cooked with onions, tomatoes, and traditional spices." },
    
    // Curry & Gravies Category
    { id: 27, name: "Butter Chicken", price: 1050, category: "curry", image: "Butter Chicken.jpg", rating: 4.9, description: "Tender chicken pieces in rich, creamy tomato-based sauce with butter and aromatic spices." },
    { id: 28, name: "Chicken Curry", price: 900, category: "curry", image: "chicken curry.jpg", rating: 4.6, description: "Traditional chicken curry cooked with onions, tomatoes, and a blend of Pakistani spices." },
    { id: 29, name: "Mutton Curry", price: 1450, category: "curry", image: "mutton curry.jpg", rating: 4.7, description: "Succulent mutton pieces in spicy curry gravy with traditional herbs and spices." },
    { id: 30, name: "Fish Curry", price: 1200, category: "curry", image: "fish curry.jpg", rating: 4.4, description: "Fresh fish cooked in coconut-based curry with coastal spices and herbs." },
    
    // Naan & Bread Category
    { id: 31, name: "Garlic Naan", price: 180, category: "naan", image: "naan.png", rating: 4.7, description: "Soft, fluffy naan bread topped with fresh garlic and herbs, baked in tandoor." },
    { id: 32, name: "Butter Naan", price: 145, category: "naan", image: "butter naan.jpg", rating: 4.5, description: "Classic naan bread brushed with butter, soft and perfect for curries." },
    { id: 33, name: "Tandoori Roti", price: 50, category: "naan", image: "Tandoori-Roti.png", rating: 4.2, description: "Whole wheat bread cooked in tandoor, healthy and delicious." },
    { id: 34, name: "Cheese Naan", price: 250, category: "naan", image: "cheese naan2.jpeg", rating: 4.8, description: "Naan stuffed with cheese and baked until golden, crispy outside and gooey inside." },
    
    // BBQ & Grills
    { id: 35, name: "Chicken Tikka", price: 700, category: "bbq", image: "chicken tikka.jpg", rating: 4.8, description: "Marinated chicken pieces grilled to perfection with traditional spices and yogurt." },
    { id: 36, name: "Seekh Kebab", price: 880, category: "bbq", image: "seekh kabab.jpg", rating: 4.7, description: "Minced meat seasoned with spices, shaped on skewers and grilled over charcoal." },
    { id: 37, name: "Malai Boti", price: 950, category: "bbq", image: "malai-boti.jpg", rating: 4.9, description: "Tender chicken pieces marinated in cream and mild spices, grilled to perfection." },
    { id: 38, name: "Beef Boti", price: 1000, category: "bbq", image: "beef boti.jpg", rating: 4.6, description: "Succulent beef cubes marinated in spices and grilled over open flame." },
    
    // Lassi & Drinks Category
    { id: 39, name: "Sweet Lassi", price: 250, category: "drinks", image: "sweet lassi1.jpg", rating: 4.3, description: "Traditional yogurt-based drink sweetened with sugar, refreshing and creamy." },
    { id: 40, name: "Mango Lassi", price: 380, category: "drinks", image: "mango lassi.jpg", rating: 4.8, description: "Creamy yogurt drink blended with fresh mango pulp, sweet and tropical." },
    { id: 41, name: "Mint Mojito", price: 430, category: "drinks", image: "mint mojito].jpg", rating: 4.4, description: "Refreshing mint and lime cooler served with soda, the ultimate summer refresher" },
    { id: 42, name: "Cold Drink", price: 120, category: "drinks", image: "cold drink1.png", rating: 4.2, description: "Chilled fizzy soft drink (Pepsi, 7Up, Marinda) served in bottles, perfect with any meal!" },
    
    // Desserts & Sweets
    { id: 43, name: "Gulab Jamun", price: 250, category: "dessert", image: "gulab jamun.jpeg", rating: 4.9, description: "Soft, spongy milk balls soaked in rose-flavored sugar syrup, served warm." },
    { id: 44, name: "Kheer", price: 400, category: "dessert", image: "Kheer-2.jpg", rating: 4.6, description: "Creamy rice pudding cooked with milk, sugar, and garnished with nuts and cardamom." },
    { id: 45, name: "Ras Malai", price: 550, category: "dessert", image: "ras malai.png", rating: 4.8, description: "Soft cottage cheese dumplings in sweetened, thickened milk flavored with cardamom." },
    { id: 46, name: "Kulfi", price: 190, category: "dessert", image: "kulfi-1.jpg", rating: 4.5, description: "Traditional frozen dessert made with thickened milk, nuts, and cardamom." },
    { id: 47, name: "Shahi Tukra", price: 600, category: "dessert", image: "shahi tukda1.jpeg", rating: 4.7, description: "Rich Mughlai dessert made with fried bread soaked in sweet milk and garnished with nuts." },
    { id: 48, name: "Jalebi", price: 200, category: "dessert", image: "jalebi.jpg", rating: 4.4, description: "Crispy, spiral-shaped sweet soaked in sugar syrup, served hot and crunchy." },
   
    // Desi Specials Category
    { id: 49, name: "Haleem", price: 400, category: "desi-specials", image: "haleem.jpg", rating: 4.7, description: "Slow-cooked lentils and meat blend, rich in protein and traditional flavors." },
    { id: 50, name: "Paye", price: 600, category: "desi-specials", image: "paye.jpg", rating: 4.5, description: "Traditional trotters curry cooked overnight with aromatic spices, very nutritious." },
    { id: 51, name: "Chicken Qorma", price: 550, category: "desi-specials", image: "chicken-Qorma.jpg", rating: 4.8, description: "Rich and flavorful chicken curry slow-cooked with aromatic spices, yogurt, and ghee for a royal taste." },
    { id: 52, name: "Sajji", price: 1200, category: "desi-specials", image: "sajji.jpg", rating: 4.9, description: "Whole chicken marinated with spices and roasted to perfection, served with rice and salad." }
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
   // ===== LOGIN CHECK FOR ALL PAGES =====
const isLoggedIn = () => {
    return localStorage.getItem('isLoggedIn') === 'true';
};

// ===== LOGOUT FUNCTIONALITY =====
function updateNavigation() {
    const authButton = document.getElementById('auth-button');
    if (!authButton) return;
    
    if (isLoggedIn()) {
        authButton.textContent = 'Logout';
        authButton.href = '#';
        authButton.onclick = function(e) {
            e.preventDefault();
            // Perform logout
            localStorage.setItem('isLoggedIn', 'false');
            localStorage.removeItem('tarkaCart');
            localStorage.removeItem('tarkaCurrentOrder');
            window.location.href = 'welcome.html';
        };
    } else {
        authButton.textContent = 'Login';
        authButton.href = 'login.html';
        authButton.onclick = null;
    }
}

// Check login status when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Login restriction check
    if (!isLoggedIn() && !window.location.pathname.includes('login.html')) {
        // Show login required notification
        showLoginRequired();
    }
    
    // ADD THIS LINE: Update the login/logout button
    updateNavigation();

    // Optional: Add click event listeners to nav links to check login status
    const navLinks = document.querySelectorAll('.nav-links a:not([href="login.html"])');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (!isLoggedIn()) {
                e.preventDefault();
                showLoginRequired();
            }
        });
    });
});

// Show login required notification
function showLoginRequired() {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        backdrop-filter: blur(10px);
    `;
    
    // Create notification box
    const notification = document.createElement('div');
    notification.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 20px;
        text-align: center;
        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        max-width: 400px;
        width: 90%;
        border: 2px solid #F55B23;
    `;
    
    notification.innerHTML = `
        <h3 style="color: #F55B23; margin-bottom: 1rem;">🔐 Login Required</h3>
        <p style="margin-bottom: 1.5rem; color: #2C3E50;">Please login or sign up to access this page.</p>
        <button onclick="redirectToLogin()" style="
            background: linear-gradient(135deg, #F55B23, #FF7A47);
            color: white;
            border: none;
            padding: 12px 30px;
            border-radius: 25px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        ">Go to Login</button>
    `;
    
    overlay.appendChild(notification);
    document.body.appendChild(overlay);
    
    // Prevent scrolling
    document.body.style.overflow = 'hidden';
}

// Redirect to login page
function redirectToLogin() {
    window.location.href = 'login.html';
}
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

function createStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let starsHTML = '<div style="display: inline-flex; align-items: center;">';
    
    // Add full stars (yellow)
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<span style="color: #FFD700; font-size: 1rem;">★</span>';
    }
    
    // Add half star if needed (half yellow, half white)
    if (hasHalfStar) {
        starsHTML += `
            <span style="position: relative; display: inline-block; font-size: 1rem;">
                <span style="color: #E5E5E5;">★</span>
                <span style="position: absolute; left: 0; top: 0; width: 50%; overflow: hidden; color: #FFD700;">★</span>
            </span>
        `;
    }
    
    // Add empty stars (gray)
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<span style="color: #E5E5E5; font-size: 1rem;">★</span>';
    }
    
    starsHTML += '</div>';
    return starsHTML;
}

function createFoodItemHTML(item) {
    return `
        <div class="food-item" onclick="openItemDetail(${item.id})" style="cursor: pointer;">
            <div class="food-image">
                <img src="${item.image}" alt="${item.name}" style="width: 120px; height: 85px; object-fit: cover; border-radius: 10px;">
            </div>  
            <div class="food-info">
                <div class="food-details">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                        <div class="food-name">${item.name}</div>
                        <div style="color: var(--primary-orange); font-weight: 600; font-size: 0.9rem; display: flex; align-items: center; gap: 0.3rem;">
                            ${createStarRating(item.rating)} <span>${item.rating}</span>
                        </div>
                    </div>
                    <div class="food-price">Rs ${item.price}</div>
                </div>
            </div>
        </div>
    `;
}

// ===== ITEM DETAIL FUNCTIONS =====
function openItemDetail(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;

    // 👇 First, instantly move the page view to the top before showing content
    window.scrollTo(0, 0);

    const detailContent = document.getElementById('item-detail-content');
    detailContent.innerHTML = `
        <div style="text-align: center; margin-bottom: 2rem;">
            <img src="${item.image}" alt="${item.name}" style="width: 460px; height: 350px; border-radius: 15px; object-fit: cover; margin-bottom: 1rem;">
            <h1 style="font-size: 2.5rem; color: var(--text-dark); margin-bottom: 0.5rem;">${item.name}</h1>
            <p style="font-size: 2rem; color: var(--primary-orange); font-weight: bold;">Rs ${item.price}</p>
        </div>
        
        <div style="margin-bottom: 2rem;">
            <h3 style="color: var(--text-dark); margin-bottom: 1rem; font-size: 1.5rem;">Description</h3>
            <p style="color: var(--text-light); line-height: 1.6; font-size: 1.1rem;">${item.description}</p>
        </div>
        
        <div style="text-align: center;">
            <button onclick="addToCart(${item.id})" style="background: linear-gradient(45deg, var(--primary-orange), var(--primary-yellow)); color: white; border: none; padding: 1rem 2rem; border-radius: 25px; font-size: 1.2rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease;">
                Add to Cart
            </button>
        </div>
    `;

    // Hide menu page and show detail page
    document.getElementById('menu-page').style.display = 'none';
    document.getElementById('detail-page').style.display = 'block';
}

function goBackToMenu() {
    document.getElementById('detail-page').style.display = 'none';
    document.getElementById('menu-page').style.display = 'block';
}

// ===== CART FUNCTIONS =====
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('tarkaCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

function saveCartToStorage() {
    localStorage.setItem('tarkaCart', JSON.stringify(cart));
}

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
    updateCartDisplay();
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartCount();
    saveCartToStorage();
    updateCartDisplay();
    showNotification('Item removed from cart');
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
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyCart = document.getElementById('empty-cart');
    const cartSummary = document.getElementById('cart-summary');
    const promoSection = document.getElementById('promo-section');
    const cartCount = document.getElementById('cart-count');

    // Update cart count in navbar
    if (cartCount) {
        cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    }

    if (cart.length === 0) {
        if (emptyCart) emptyCart.style.display = 'block';
        if (cartSummary) cartSummary.style.display = 'none';
        if (promoSection) promoSection.style.display = 'none';
        if (cartItemsContainer) cartItemsContainer.innerHTML = '';
        return;
    }

    if (emptyCart) emptyCart.style.display = 'none';
    if (cartSummary) cartSummary.style.display = 'block';
    if (promoSection) promoSection.style.display = 'block';

    if (cartItemsContainer) {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <!-- Item Image -->
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                
                <!-- Item Details -->
                <div class="cart-item-details">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <p class="cart-item-price">Rs ${item.price}</p>
                </div>
                
                <!-- Quantity Controls -->
                <div class="quantity-controls">
                    <div class="quantity-selector">
                        <button onclick="updateQuantity(${item.id}, -1)" class="quantity-btn">-</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, 1)" class="quantity-btn">+</button>
                    </div>
                    
                    <!-- Professional Dustbin Icon -->
                    <button onclick="removeFromCart(${item.id})" class="delete-btn" title="Remove from cart">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="3,6 5,6 21,6"></polyline>
                            <path d="m19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                    </button>
                </div>
            </div>
        `).join('');
    }

    updateCartTotals();
}

function applyPromoCode() {
    const promoInput = document.getElementById('promo-input');
    const promoMessage = document.getElementById('promo-message');
    if (!promoInput || !promoMessage) return;
    
    const promoCode = promoInput.value.trim().toUpperCase();
    
    // Define available promo codes
    const promoCodes = {
        'SAVE10': { discount: 10, type: 'percentage', description: '10% off' },
        'SAVE20': { discount: 20, type: 'percentage', description: '20% off' },
        'FLAT100': { discount: 100, type: 'fixed', description: 'Rs 100 off' },
        'FLAT200': { discount: 200, type: 'fixed', description: 'Rs 200 off' },
        'WELCOME15': { discount: 15, type: 'percentage', description: '15% off for new customers' },
        'STUDENT': { discount: 150, type: 'fixed', description: 'Student discount Rs 150 off' }
    };
    
    if (!promoCode) {
        showPromoMessage('Please enter a promo code', 'error');
        return;
    }
    
    if (promoCodes[promoCode]) {
        appliedPromo = {
            code: promoCode,
            ...promoCodes[promoCode]
        };
         showPromoMessage(`✅ Promo code applied! ${appliedPromo.description}`, 'success');
        promoInput.disabled = true;
        updateCartTotals();
    } else {
        showPromoMessage('❌ Invalid promo code', 'error');
    }
}

function showPromoMessage(message, type) {
    const promoMessage = document.getElementById('promo-message');
    if (!promoMessage) return;
    
    promoMessage.textContent = message;
    promoMessage.style.display = 'block';
    promoMessage.style.color = type === 'success' ? '#28a745' : '#dc3545';
}

function updateCartTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = subtotal > 0 ? 150 : 0;
    
    // Calculate discount
    let discountAmount = 0;
    if (appliedPromo) {
        if (appliedPromo.type === 'percentage') {
            discountAmount = Math.round(subtotal * (appliedPromo.discount / 100));
        } else {
            discountAmount = appliedPromo.discount;
        }
        
        // Show discount line
        const discountLine = document.getElementById('discount-line');
        const discountCode = document.getElementById('discount-code');
        const discountAmountElement = document.getElementById('discount-amount');
        
        if (discountLine) discountLine.style.display = 'flex';
        if (discountCode) discountCode.textContent = appliedPromo.code;
        if (discountAmountElement) discountAmountElement.textContent = discountAmount;
    } else {
        const discountLine = document.getElementById('discount-line');
        if (discountLine) discountLine.style.display = 'none';
    }
    
    const discountedSubtotal = Math.max(0, subtotal - discountAmount);
    const tax = Math.round(discountedSubtotal * 0.05);
    const total = discountedSubtotal + deliveryFee + tax;

    const subtotalElement = document.getElementById('subtotal');
    const deliveryFeeElement = document.getElementById('delivery-fee');
    const taxElement = document.getElementById('tax');
    const totalElement = document.getElementById('total-amount');
    
    if (subtotalElement) subtotalElement.textContent = subtotal;
    if (deliveryFeeElement) deliveryFeeElement.textContent = deliveryFee;
    if (taxElement) taxElement.textContent = tax;
    if (totalElement) totalElement.textContent = total;
}


function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    
    // Save the current cart state with applied promo to localStorage
    const checkoutState = {
        cart: cart,
        appliedPromo: appliedPromo,
        subtotal: calculateSubtotal(),
        discount: calculateDiscount(),
        total: calculateTotal()
    };
    
    localStorage.setItem('tarkaCheckoutState', JSON.stringify(checkoutState));
    
    // Redirect to checkout page
    window.location.href = 'checkout.html';
}
function handleCheckout(event) {
    event.preventDefault();
    
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }

    // Get delivery time selection
    const deliveryTimeRadio = document.querySelector('input[name="deliveryTime"]:checked');
    const deliveryTime = deliveryTimeRadio ? deliveryTimeRadio.value : 'asap';
    
    // Calculate estimated delivery time
    let estimatedTime = '';
    if (deliveryTime === 'asap') {
        estimatedTime = '25-35 minutes';
    } else {
        estimatedTime = '35-45 minutes';
    }
    
    // Calculate final totals with promo
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = subtotal > 0 ? 150 : 0;
    
    let discountAmount = 0;
    if (appliedPromo) {
        if (appliedPromo.type === 'percentage') {
            discountAmount = Math.round(subtotal * (appliedPromo.discount / 100));
        } else {
            discountAmount = appliedPromo.discount;
        }
    }
    
    const discountedSubtotal = Math.max(0, subtotal - discountAmount);
    const tax = Math.round(discountedSubtotal * 0.05);
    const total = discountedSubtotal + deliveryFee + tax;
    
    // Save order details with discounted total - FIX: Add initial status
    const orderDetails = {
        id: Math.floor(Math.random() * 100000),
        items: [...cart],
        deliveryTime: deliveryTime,
        estimatedDelivery: estimatedTime,
        timestamp: new Date().toISOString(),
        customerName: document.getElementById('fullName')?.value || '',
        phone: document.getElementById('phone')?.value || '',
        address: document.getElementById('address')?.value || '',
        subtotal: subtotal,
        discount: discountAmount,
        deliveryFee: deliveryFee,
        tax: tax,
        total: total,
        appliedPromo: appliedPromo,
        status: 'confirmed' // ADD THIS: Initialize with first status
    };
    
    // Save to localStorage
    localStorage.setItem('tarkaCurrentOrder', JSON.stringify(orderDetails));
    localStorage.setItem('tarkaOrderDetails', JSON.stringify(orderDetails));
    
    // Set currentOrder globally
    currentOrder = orderDetails;
    
    // Clear cart and checkout state
    cart = [];
    appliedPromo = null;
    saveCartToStorage();
    updateCartCount();
    localStorage.removeItem('tarkaCheckoutState');
    
    // Redirect to confirmation page
    window.location.href = 'confirmation.html';
}


function calculateSubtotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function calculateDiscount() {
    if (!appliedPromo) return 0;
    
    const subtotal = calculateSubtotal();
    if (appliedPromo.type === 'percentage') {
        return Math.round(subtotal * (appliedPromo.discount / 100));
    } else {
        return appliedPromo.discount;
    }
}

function calculateTotal() {
    const subtotal = calculateSubtotal();
    const discount = calculateDiscount();
    const deliveryFee = subtotal > 0 ? 150 : 0;
    const discountedSubtotal = Math.max(0, subtotal - discount);
    const tax = Math.round(discountedSubtotal * 0.05);
    return discountedSubtotal + deliveryFee + tax;
}





// ===== CHECKOUT FUNCTIONS =====

 
function updateCheckoutDisplay() {
    // Update order review in checkout page
    const cartItemsPreview = document.getElementById('cart-items-preview');
    const itemCount = document.getElementById('item-count');
    const orderItems = document.getElementById('order-items');
    
    if (cartItemsPreview) {
        if (cart.length === 0) {
            cartItemsPreview.innerHTML = '<p>No items in cart</p>';
        } else {
            cartItemsPreview.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <span>${item.name} x${item.quantity}</span>
                    <span>Rs${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            `).join('');
        }
    }
    
    if (itemCount) {
        itemCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    }
    
    if (orderItems) {
        if (cart.length === 0) {
            orderItems.innerHTML = '<p>No items in order</p>';
        } else {
            orderItems.innerHTML = cart.map(item => `
                <div class="order-item">
                    <span class="item-name">${item.name}</span>
                    <span class="item-price">Rs${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            `).join('');
        }
    }
    
    // Update totals in checkout page
    updateCheckoutTotal();
}
  function updateCheckoutTotal(checkoutCart = cart, checkoutPromo = appliedPromo) {
    const subtotal = checkoutCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = subtotal > 0 ? 150 : 0;
    
    // Calculate discount based on promo
    let discountAmount = 0;
    if (checkoutPromo) {
        if (checkoutPromo.type === 'percentage') {
            discountAmount = Math.round(subtotal * (checkoutPromo.discount / 100));
        } else {
            discountAmount = checkoutPromo.discount;
        }
    }
    
    const discountedSubtotal = Math.max(0, subtotal - discountAmount);
    const tax = Math.round(discountedSubtotal * 0.05);
    const total = discountedSubtotal + deliveryFee + tax;

    const subtotalElement = document.getElementById('subtotal');
    const deliveryFeeElement = document.getElementById('delivery-fee');
    const taxElement = document.getElementById('tax');
    const totalElement = document.getElementById('checkout-total');
    const discountElement = document.getElementById('checkout-discount');
    
    if (subtotalElement) subtotalElement.textContent = `Rs ${subtotal}`;
    if (deliveryFeeElement) deliveryFeeElement.textContent = `Rs ${deliveryFee}`;
    if (taxElement) taxElement.textContent = `Rs ${tax}`;
    if (totalElement) totalElement.textContent = total;
    
    // Show discount if applied
    if (discountElement) {
        if (discountAmount > 0) {
            discountElement.innerHTML = `
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span>Discount (${checkoutPromo.code})</span>
                    <span style="color: #28a745;">- Rs ${discountAmount}</span>
                </div>
            `;
        } else {
            discountElement.innerHTML = '';
        }
    }
}

// ===== CONFIRMATION PAGE FUNCTIONS =====
function displayOrderConfirmation() {
    // Check if we're on the confirmation page
    if (!document.querySelector('.confirmation-container')) {
        return;
    }

    // Get order details from localStorage
    const orderDetails = JSON.parse(localStorage.getItem('tarkaOrderDetails')) || {};
    
    // Display order items
    const orderItemsContainer = document.getElementById('confirmation-order-items');
    const subtotalElement = document.getElementById('confirmation-subtotal');
    const deliveryElement = document.getElementById('confirmation-delivery');
    const taxElement = document.getElementById('confirmation-tax');
    const grandTotalElement = document.getElementById('confirmation-grand-total');
    const orderTotalElement = document.getElementById('order-total');
    const deliveryTimeElement = document.getElementById('delivery-time');
    const orderIdElement = document.getElementById('order-id');
    const discountElement = document.getElementById('confirmation-discount');
    
    // Display delivery time from order details
    if (deliveryTimeElement) {
        if (orderDetails.estimatedDelivery) {
            deliveryTimeElement.textContent = orderDetails.estimatedDelivery;
        } else {
            deliveryTimeElement.textContent = '25-35 minutes';
        }
    }
    
    // Display order ID
    if (orderIdElement) {
        orderIdElement.textContent = `#TKA${orderDetails.id || Math.random().toString(36).substr(2, 6).toUpperCase()}`;
    }
    
    if (orderItemsContainer) {
        const itemsToDisplay = orderDetails.items || [];
        if (itemsToDisplay.length === 0) {
            orderItemsContainer.innerHTML = '<div class="empty-cart">No items in order</div>';
        } else {
            orderItemsContainer.innerHTML = itemsToDisplay.map(item => `
                <div class="confirmation-order-item">
                    <div class="item-details">
                        <span class="item-name">${item.name}</span>
                        <span class="item-quantity">Qty: ${item.quantity}</span>
                    </div>
                    <span class="item-price">Rs ${(item.price * item.quantity)}</span>
                </div>
            `).join('');
        }
    }
    
    // Calculate totals WITH DISCOUNT from order details
    const items = orderDetails.items || [];
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = subtotal > 0 ? 150 : 0;
    
    // Use the discount from order details if available, otherwise calculate from appliedPromo
    let discountAmount = 0;
    if (orderDetails.discount !== undefined) {
        // Use the discount that was saved during checkout
        discountAmount = orderDetails.discount;
    } else if (orderDetails.appliedPromo) {
        // Calculate discount from saved promo
        const appliedPromo = orderDetails.appliedPromo;
        if (appliedPromo.type === 'percentage') {
            discountAmount = Math.round(subtotal * (appliedPromo.discount / 100));
        } else {
            discountAmount = appliedPromo.discount;
        }
    }
    
    const discountedSubtotal = Math.max(0, subtotal - discountAmount);
    const tax = Math.round(discountedSubtotal * 0.05);
    const grandTotal = discountedSubtotal + deliveryFee + tax;
    
    // Update totals
    if (subtotalElement) subtotalElement.textContent = `Rs ${subtotal}`;
    if (deliveryElement) deliveryElement.textContent = `Rs ${deliveryFee}`;
    if (taxElement) taxElement.textContent = `Rs ${tax}`;
    if (grandTotalElement) grandTotalElement.textContent = `Rs ${grandTotal}`;
    if (orderTotalElement) orderTotalElement.textContent = `Rs ${grandTotal}`;
    
    // Show discount line if there was a discount
    if (discountElement) {
        if (discountAmount > 0) {
            discountElement.innerHTML = `
                <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                    <span>Discount ${orderDetails.appliedPromo ? `(${orderDetails.appliedPromo.code})` : ''}</span>
                    <span style="color: #28a745;">- Rs ${discountAmount}</span>
                </div>
            `;
            discountElement.style.display = 'block';
        } else {
            discountElement.style.display = 'none';
        }
    }
}



// ===== DELIVERY TIME FUNCTIONS =====
function setupDeliveryTime() {
    const asapRadio = document.getElementById('asap');
    const scheduleRadio = document.getElementById('schedule');
    const scheduleTime = document.getElementById('schedule-time');
    
    if (asapRadio && scheduleRadio && scheduleTime) {
        // Show/hide schedule time based on selection
        asapRadio.addEventListener('change', function() {
            if (this.checked) {
                scheduleTime.style.display = 'none';
            }
        });
        
        scheduleRadio.addEventListener('change', function() {
            if (this.checked) {
                scheduleTime.style.display = 'block';
            }
        });
        
        // Set default to ASAP
        asapRadio.checked = true;
        scheduleTime.style.display = 'none';
    }
}

// ===== LOGIN FUNCTIONS =====
function handleLogin(event) {
    event.preventDefault();
    isLoggedIn = true;

    // Store login success flag in localStorage
    localStorage.setItem('loginSuccess', 'true');

    // Redirect to home page
    window.location.href = 'home.html';
}

// ===== ORDER TRACKING =====
// ===== ORDER TRACKING =====
function simulateOrderProgress() {
    const steps = ['confirmed', 'preparing', 'cooking', 'ready', 'delivered'];
    
    // Get current position in the steps
    let currentIndex = steps.indexOf(currentOrder.status);
    
    // If order is already delivered, don't start simulation
    if (currentIndex === steps.length - 1) {
        updateTrackingDisplay();
        return;
    }

    const interval = setInterval(() => {
        if (!currentOrder) {
            clearInterval(interval);
            updateTrackingDisplay(); // Show appropriate state
            return;
        }
        
        if (currentIndex < steps.length - 1) {
            currentIndex++;
            currentOrder.status = steps[currentIndex];
            saveOrderToStorage();
            updateTrackingDisplay();
            
            // If order is delivered, stop the simulation
            if (currentOrder.status === 'delivered') {
                clearInterval(interval);
                // Save delivered status to a separate flag
                localStorage.setItem('tarkaLastOrderDelivered', 'true');
                
                // Keep order in storage for a while so user can see it's delivered
                setTimeout(() => {
                    localStorage.removeItem('tarkaCurrentOrder');
                    currentOrder = null;
                    updateTrackingDisplay(); // Update to show delivered state
                }, 10000); // Remove after 10 seconds
            }
        } else {
            clearInterval(interval);
        }
    }, 5000); // Change every 5 seconds

    updateTrackingDisplay();
}

function updateTrackingDisplay() {
    const trackingContent = document.getElementById('tracking-content');
    if (!trackingContent) return;

    // Check if we just had a delivered order
    const lastOrderDelivered = localStorage.getItem('tarkaLastOrderDelivered') === 'true';

    if (!currentOrder && lastOrderDelivered) {
        // STATE 2: Order was recently delivered - show special delivered message
        trackingContent.innerHTML = `
            <div style="text-align: center; padding: 4rem 2rem; color: var(--text-dark);">
                <div style="font-size: 4rem; margin-bottom: 1rem;">🎉</div>
                <h3 style="color: var(--text-dark); margin-bottom: 1rem; font-size: 1.8rem;">Order Delivered Successfully!</h3>
                <p style="color: var(--text-light); font-size: 1.1rem; margin-bottom: 1rem;">
                    Thank you for your order! We hope you enjoyed your meal. 🍽
                </p>
                <p style="color: var(--text-light); font-size: 1.1rem; margin-bottom: 2rem;">
                    Ready for another delicious experience? <a href="menu.html" style="color: var(--primary-orange); text-decoration: none; font-weight: 600;">Place a new order from our menu</a>
                </p>
            </div>
        `;
        return;
    }

    if (!currentOrder) {
        // STATE 1: No orders ever placed - show initial empty state
        trackingContent.innerHTML = `
            <div style="text-align: center; padding: 4rem 2rem; color: var(--text-dark);">
                <div style="font-size: 4rem; margin-bottom: 1rem;">📦</div>
                <h3 style="color: var(--text-dark); margin-bottom: 1rem; font-size: 1.8rem;">No orders yet</h3>
                <p style="color: var(--text-light); font-size: 1.1rem; margin-bottom: 2rem;">
                    Place something delicious from the <a href="menu.html" style="color: var(--primary-orange); text-decoration: none; font-weight: 600;">menu</a> to start tracking!
                </p>
            </div>
        `;
        return;
    }

    // STATE 3: Active order - show tracking progress
    const steps = [
        { id: 'confirmed', label: 'Order Confirmed', icon: '✅', time: '1:15:28' },
        { id: 'preparing', label: 'Preparing', icon: '👨‍🍳', time: '1:18:17' },
        { id: 'cooking', label: 'Cooking', icon: '🔥', time: '1:20:45' },
        { id: 'ready', label: 'Ready for Delivery', icon: '📦', time: '1:23:12' },
        { id: 'delivered', label: 'Delivered', icon: '🚚', time: '1:25:30' }
    ];

    // Calculate progress percentage for the progress bar
    const progressPercent = ((steps.findIndex(step => step.id === currentOrder.status) + 1) / steps.length) * 100;
   const orderIdDisplay = `#TKA${currentOrder.id}`;
    trackingContent.innerHTML = `
        <div style="background: rgba(255, 255, 255, 0.95); border-radius: 15px; padding: 2rem; margin-bottom: 2rem; box-shadow: 0 8px 32px rgba(0,0,0,0.1);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h3 style="color: var(--text-dark); margin: 0;">Order #${orderIdDisplay}</h3>
                <div style="text-align: right;">
                    <p style="color: var(--text-light); margin: 0; font-size: 0.9rem;">Placed</p>
                    <p style="color: var(--text-dark); margin: 0; font-weight: 600;">${currentOrder.timestamp ? new Date(currentOrder.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) : '1:15:28'}</p>
                </div>
            </div>
            
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <p style="color: var(--text-dark); margin: 0; font-weight: 600;">Last Updated</p>
                <p style="color: var(--primary-orange); margin: 0; font-weight: 600;">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
            </div>
        </div>

        <div class="tracking-steps">
            ${steps.map(step => `
                <div class="tracking-step">
                    <div class="step-circle ${getStepClass(step.id)}">
                        ${step.icon}
                    </div>
                    <p style="color: var(--text-dark); margin: 0.5rem 0 0.25rem 0; font-weight: 600;">${step.label}</p>
                    <p style="color: var(--text-light); margin: 0; font-size: 0.9rem;">${step.time}</p>
                </div>
            `).join('')}
        </div>

        <!-- Progress Bar -->
        <div class="progress-bar" style="margin: 2rem auto;">
            <div class="progress" style="width: ${progressPercent}%;"></div>
        </div>

        <!-- ETA Section -->
        <div class="tracking-status" style="text-align: center; margin-top: 2rem;">
            <p style="color: var(--text-dark); margin-bottom: 0.5rem; font-size: 1.1rem;">
                ⏱ Estimated Delivery: <strong style="color: var(--primary-orange);">${getEstimatedDeliveryTime()}</strong>
            </p>
            <p style="color: var(--text-light); margin: 0; font-style: italic;">
                ${getStatusMessage(currentOrder.status)}
            </p>
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

function getEstimatedDeliveryTime() {
    if (!currentOrder) return '25-35 minutes';
    
    const statusTimes = {
        'confirmed': '25-35 minutes',
        'preparing': '20-30 minutes', 
        'cooking': '15-25 minutes',
        'ready': '10-15 minutes',
        'delivered': 'Delivered'
    };
    
    return statusTimes[currentOrder.status] || '25-35 minutes';
}

function getStatusMessage(status) {
    const messages = {
        'confirmed': 'Your order has been confirmed and will be prepared shortly!',
        'preparing': 'Our chefs are gathering fresh ingredients for your meal!',
        'cooking': 'Your food is being cooked to perfection!',
        'ready': 'Your order is ready and will be delivered soon!',
        'delivered': 'Enjoy your meal! Thank you for choosing TARKA! 🎉'
    };
    
    return messages[status] || 'Your order is being processed with care!';
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
    
    // Check for login success
    if (localStorage.getItem('loginSuccess') === 'true') {
        showNotification('Login successful!');
        localStorage.removeItem('loginSuccess');
    }
    
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
    // Load checkout state if available
    const savedCheckoutState = localStorage.getItem('tarkaCheckoutState');
    if (savedCheckoutState) {
        const checkoutState = JSON.parse(savedCheckoutState);
        cart = checkoutState.cart;
        appliedPromo = checkoutState.appliedPromo;
    }
    updateCheckoutDisplay();
    setupDeliveryTime();
    break;
    case 'tracking.html':
    // Clear the delivered flag when page loads fresh (not from order flow)
    if (!currentOrder && localStorage.getItem('tarkaLastOrderDelivered')) {
        localStorage.removeItem('tarkaLastOrderDelivered');
    }
    updateTrackingDisplay();
    if (currentOrder && currentOrder.status !== 'delivered') {
        // Auto-resume simulation for active orders
        simulateOrderProgress();
    }
    break;
        
       
    case 'confirmation.html':
    displayOrderConfirmation();
    if (currentOrder && currentOrder.status !== 'delivered') {
        // Start tracking simulation after a brief delay
        setTimeout(() => {
            simulateOrderProgress();
        }, 2000);
    }
    break;
            
            
        default:
            // Home page or other pages
            loadMenu();
            break;
    }
    
    // Initialize category ratings
    document.querySelectorAll('.category-card').forEach(card => {
        const ratingValue = parseFloat(card.getAttribute('data-rating')) || 0;
        const ratingContainer = card.querySelector('.rating');
        
        if (ratingContainer) {
            const fullStars = Math.floor(ratingValue);
            const halfStar = ratingValue % 1 >= 0.5;
            
            for (let i = 0; i < 5; i++) {
                const star = document.createElement('i');
                star.classList.add('fa-solid', 'fa-star');
                
                if (i < fullStars) {
                    star.classList.add('full-star');
                } else if (i === fullStars && halfStar) {
                    star.classList.add('half-star');
                }
                
                ratingContainer.appendChild(star);
            }
        }
    });
});
