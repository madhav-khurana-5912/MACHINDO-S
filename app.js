/**
 * Manchindos Custom Global Script
 * Core Features: Shared Cart, Search Index, Login Modal, Hero Slider
 */

(function () {
  'use strict';

  // --- MENU DATA FOR SEARCH ENGINE ---
  const menuItems = [
    // Kitchen Sourdough Pizzettes
    { name: "Pesto Roasted Chicken", price: 420, category: "Kitchen Menu", type: "food" },
    { name: "Margherita", price: 340, category: "Kitchen Menu", type: "food" },
    { name: "Goat Chorizo", price: 460, category: "Kitchen Menu", type: "food" },
    { name: "Veggie Fest", price: 380, category: "Kitchen Menu", type: "food" },
    { name: "Calabrese", price: 360, category: "Kitchen Menu", type: "food" },
    { name: "Malabar Chicken", price: 420, category: "Kitchen Menu", type: "food" },
    { name: "Hot and Spicy Chicken", price: 420, category: "Kitchen Menu", type: "food" },
    { name: "Mushroom & Cheese", price: 380, category: "Kitchen Menu", type: "food" },
    { name: "Bacon Pineapple", price: 460, category: "Kitchen Menu", type: "food" },
    // Salads & Soups
    { name: "Classic Caesar Salad", price: 360, category: "Kitchen Menu", type: "food" },
    { name: "Roasted Beetroot & Goat Cheese", price: 340, category: "Kitchen Menu", type: "food" },
    { name: "Korean Cucumber", price: 340, category: "Kitchen Menu", type: "food" },
    { name: "Miso Mushroom Soup", price: 340, category: "Kitchen Menu", type: "food" },
    { name: "Roasted Tomato & Basil", price: 320, category: "Kitchen Menu", type: "food" },
    { name: "Roasted Leeks & Potato", price: 320, category: "Kitchen Menu", type: "food" },
    { name: "Broccoli Almond Soup", price: 360, category: "Kitchen Menu", type: "food" },
    // Burgers & Sandwiches
    { name: "Butter Milk Fried Chicken Burger", price: 420, category: "Kitchen Menu", type: "food" },
    { name: "Crispy Aubergine Burger", price: 360, category: "Kitchen Menu", type: "food" },
    { name: "Crab & Avocado Burger", price: 520, category: "Kitchen Menu", type: "food" },
    { name: "Herbivore's Burger", price: 340, category: "Kitchen Menu", type: "food" },
    { name: "Truffle Mushroom & Cheese Melt Sando", price: 440, category: "Kitchen Menu", type: "food" },
    { name: "Manchindos Lamb Smash Burger", price: 560, category: "Kitchen Menu", type: "food" },
    { name: "Gochujang Chicken Melt Sando", price: 460, category: "Kitchen Menu", type: "food" },
    // Pastas & Mains
    { name: "Rigatoni Alla Vodka", price: 480, category: "Kitchen Menu", type: "food" },
    { name: "Truffle Mac & Cheese", price: 390, category: "Kitchen Menu", type: "food" },
    { name: "Spaghetti Pomodoro", price: 420, category: "Kitchen Menu", type: "food" },
    { name: "Pesto Gnocchi / Burrata & Walnuts", price: 520, category: "Kitchen Menu", type: "food" },
    { name: "Alfredo Fettuccine", price: 460, category: "Kitchen Menu", type: "food" },
    { name: "Pepper Pork Fettuccine", price: 580, category: "Kitchen Menu", type: "food" },
    { name: "Spaghetti Aglio e Olio", price: 440, category: "Kitchen Menu", type: "food" },
    { name: "Pumpkin Risotto", price: 390, category: "Kitchen Menu", type: "food" },
    { name: "Parmesan Risotto", price: 480, category: "Kitchen Menu", type: "food" },
    { name: "Green Peas Risotto", price: 390, category: "Kitchen Menu", type: "food" },
    { name: "Chilly Butter Garlic Spaghetti", price: 460, category: "Kitchen Menu", type: "food" },
    { name: "Herbed Chicken Tortellini", price: 520, category: "Kitchen Menu", type: "food" },
    { name: "Grilled Norwegian Salmon w/ Mashed Potatoes", price: 480, category: "Kitchen Menu", type: "food" },
    { name: "Norwegian Salmon w/ Lemon Butter Sauce", price: 680, category: "Kitchen Menu", type: "food" },
    { name: "Grilled Pork Chops w/ Roasted Pear Sauce", price: 620, category: "Kitchen Menu", type: "food" },
    { name: "Lamb Chops w/ Peppercorn Sauce", price: 590, category: "Kitchen Menu", type: "food" },
    { name: "Braised Pork Belly w/ Rice & Veggies", price: 620, category: "Kitchen Menu", type: "food" },
    // Desserts
    { name: "Filter Coffee Tiramisu", price: 395, category: "Kitchen Menu", type: "food" },
    { name: "Mango Tres Leches", price: 425, category: "Kitchen Menu", type: "food" },
    // Bar Signature Cocktails
    { name: "Cucu Sate Cocktail", price: 530, category: "Bar Menu", type: "drink" },
    { name: "Blush N Brine", price: 490, category: "Bar Menu", type: "drink" },
    { name: "Johnny Ginger", price: 540, category: "Bar Menu", type: "drink" },
    { name: "Calm Theory", price: 590, category: "Bar Menu", type: "drink" },
    { name: "Almond Old Fashion", price: 590, category: "Bar Menu", type: "drink" },
    { name: "Manchindos 7", price: 550, category: "Bar Menu", type: "drink" },
    { name: "Mr. Konkan", price: 450, category: "Bar Menu", type: "drink" },
    { name: "Rum & Rum", price: 450, category: "Bar Menu", type: "drink" },
    // Mocktails
    { name: "Berry Fusion", price: 280, category: "Bar Menu", type: "drink" },
    { name: "Guava Mary", price: 260, category: "Bar Menu", type: "drink" },
    { name: "Mango Basil Blossom", price: 260, category: "Bar Menu", type: "drink" },
    { name: "Sober Way", price: 250, category: "Bar Menu", type: "drink" },
    { name: "Virgin Piña Colada", price: 260, category: "Bar Menu", type: "drink" },
    { name: "Fresh Lime Soda", price: 100, category: "Bar Menu", type: "drink" },
    { name: "Virgin Mojito", price: 230, category: "Bar Menu", type: "drink" },
    // Signatures
    { name: "Ghee Roast Chicken Skewers", price: 420, category: "Signatures", type: "food" },
    { name: "Cucu Sate", price: 38, category: "Signatures", type: "food" },
    { name: "Hokkaido Scallop Crudo", price: 42, category: "Signatures", type: "food" },
    { name: "Wagyu Tomahawk Reserve", price: 150, category: "Signatures", type: "food" },
    { name: "Almond Old Fashioned", price: 24, category: "Signatures", type: "drink" },
    { name: "The Crimson Silk", price: 22, category: "Signatures", type: "drink" },
    { name: "Smoked Mezcalero", price: 26, category: "Signatures", type: "drink" }
  ];

  // --- SLIDER DATA ---
  const slides = [
    {
      title: "Grab Big Deals<br>on <span class='text-red-600'>Yummy Meals!</span>",
      description: "Delicious dishes await you at every turn. From savory pastas to sweet desserts, there's something for everyone.",
      image: "images/chicken_tandoori.png",
      dishName: "Chicken Tandoori",
      dishPrice: 12.15,
      isHot: true
    },
    {
      title: "Indulge in Premium<br><span class='text-red-600'>Grilled Salmon!</span>",
      description: "Fresh Norwegian salmon steak cooked over open flames, loaded with healthy omega-3 fats and served with garlic lemon butter.",
      image: "images/grilled_salmon.png",
      dishName: "Grilled Salmon Steak",
      dishPrice: 25.00,
      isHot: false
    },
    {
      title: "Savory baked layered<br><span class='text-red-600'>Eggplant Bakes!</span>",
      description: "Tender baked eggplants layered with marinara sauce, fresh basil, and bubbling hot mozzarella cheese.",
      image: "images/eggplant_bake.png",
      dishName: "Eggplant Bake",
      dishPrice: 18.00,
      isHot: false
    },
    {
      title: "Savor Exquisite<br><span class='text-red-600'>Tuna Pasta Bowl!</span>",
      description: "Artisanal penne pasta tossed with tender tuna steak chunks, sweet cherry tomatoes, Greek olives, and fresh herbs.",
      image: "images/tuna_pasta.png",
      dishName: "Tuna Pasta Sea Food",
      dishPrice: 45.00,
      isHot: true
    },
    {
      title: "Fresh & Crisp<br><span class='text-red-600'>Garden Salad!</span>",
      description: "Slices of organic green tomatoes, crispy mixed leaf greens, rich avocado, and a refreshing citrus vine dressing.",
      image: "images/green_salad.png",
      dishName: "Green Tomatoes Salad",
      dishPrice: 12.00,
      isHot: false
    },
    {
      title: "Rich & Savory<br><span class='text-red-600'>Soy Shrimp Pasta!</span>",
      description: "Premium squid ink black spaghetti tossed with wild caught plump prawns in a light glazed soy reduction.",
      image: "images/soy_shrimp.png",
      dishName: "Soy Shrimp Pasta",
      dishPrice: 35.00,
      isHot: true
    }
  ];

  let currentSlideIdx = 0;
  let slideInterval = null;

  // --- DOM HELPER ---
  function getEl(id) { return document.getElementById(id); }

  // --- CART MANAGEMENT ---
  function getCart() {
    return JSON.parse(localStorage.getItem('manchindosCart') || '[]');
  }

  function saveCart(cart) {
    localStorage.setItem('manchindosCart', JSON.stringify(cart));
    updateCartUI();
    // Dispatch event to sync state across other tabs if open
    window.dispatchEvent(new Event('cartUpdated'));
  }

  window.addToCart = function (name, price) {
    const cart = getCart();
    const existing = cart.find(item => item.name === name);
    if (existing) {
      existing.qty++;
    } else {
      cart.push({ name, price, qty: 1 });
    }
    saveCart(cart);
    animateCartBadge();
  };

  window.removeFromCart = function (index) {
    const cart = getCart();
    if (cart[index].qty > 1) {
      cart[index].qty--;
    } else {
      cart.splice(index, 1);
    }
    saveCart(cart);
  };

  window.addOne = function (index) {
    const cart = getCart();
    cart[index].qty++;
    saveCart(cart);
  };

  window.deleteItem = function (index) {
    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
  };

  window.toggleCart = function () {
    const panel = getEl('cart-panel');
    const overlay = getEl('cart-overlay');
    if (panel && overlay) {
      panel.classList.toggle('open');
      overlay.classList.toggle('open');
    }
  };

  function updateCartUI() {
    const cart = getCart();
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.qty * item.price), 0);

    // Update badges
    const badges = ['cart-badge', 'cart-badge-mobile'];
    badges.forEach(id => {
      const el = getEl(id);
      if (el) {
        el.textContent = totalQty;
        el.style.display = totalQty > 0 ? 'flex' : 'none';
      }
    });

    // Render items in cart drawer
    const container = getEl('cart-items-list');
    const totalValEl = getEl('cart-total-value');
    
    if (totalValEl) {
      totalValEl.textContent = totalPrice.toFixed(2);
    }

    if (!container) return;

    if (cart.length === 0) {
      container.innerHTML = `
        <div class="flex flex-col items-center justify-center h-64 text-center text-zinc-500">
          <span class="material-symbols-outlined text-5xl mb-4 text-zinc-600">shopping_basket</span>
          <p class="font-bold text-lg text-zinc-400">Your cart is empty</p>
          <p class="text-sm mt-1">Savor the heritage dishes by adding them to your tray.</p>
        </div>
      `;
      return;
    }

    let html = '';
    cart.forEach((item, idx) => {
      const itemSubtotal = item.qty * item.price;
      html += `
        <div class="cart-item-card flex justify-between items-center py-4 border-b border-zinc-800">
          <div class="flex-grow pr-4">
            <h4 class="font-bold text-sm text-zinc-200">${item.name}</h4>
            <p class="text-xs text-zinc-500 mt-1">$${item.price.toFixed(2)} each</p>
          </div>
          <div class="flex flex-col items-end gap-2">
            <span class="font-bold text-sm text-amber-500">$${itemSubtotal.toFixed(2)}</span>
            <div class="flex items-center gap-3">
              <div class="qty-control">
                <button onclick="removeFromCart(${idx})">-</button>
                <span>${item.qty}</span>
                <button onclick="addOne(${idx})">+</button>
              </div>
              <button onclick="deleteItem(${idx})" class="text-zinc-500 hover:text-red-500 flex items-center" title="Remove">
                <span class="material-symbols-outlined text-lg">delete</span>
              </button>
            </div>
          </div>
        </div>
      `;
    });
    container.innerHTML = html;
  }

  function animateCartBadge() {
    const badges = ['cart-badge', 'cart-badge-mobile'];
    badges.forEach(id => {
      const el = getEl(id);
      if (el) {
        el.classList.remove('badge-pulse');
        void el.offsetWidth; // Trigger reflow
        el.classList.add('badge-pulse');
      }
    });
  }

  // --- SEARCH MODAL LOGIC ---
  window.toggleSearch = function () {
    const overlay = getEl('search-modal-overlay');
    if (overlay) {
      const open = overlay.classList.toggle('open');
      if (open) {
        const input = getEl('search-input');
        if (input) {
          input.value = '';
          input.focus();
        }
        renderSearchResults('');
      }
    }
  };

  window.handleSearchInput = function (e) {
    renderSearchResults(e.target.value);
  };

  function renderSearchResults(query) {
    const container = getEl('search-results');
    if (!container) return;

    if (!query.trim()) {
      container.innerHTML = `<p class="text-center text-zinc-500 text-sm py-8">Type a dish or drink name to search our menu...</p>`;
      return;
    }

    const filtered = menuItems.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
    );

    if (filtered.length === 0) {
      container.innerHTML = `<p class="text-center text-zinc-500 text-sm py-8">No results found for "${query}"</p>`;
      return;
    }

    let html = '';
    filtered.forEach(item => {
      html += `
        <div class="search-item-row flex justify-between items-center py-3 border-b border-zinc-800">
          <div>
            <h4 class="font-bold text-sm text-zinc-100">${item.name}</h4>
            <p class="text-xs text-zinc-400 font-semibold">${item.category}</p>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-amber-500 font-bold text-sm">$${item.price}</span>
            <button onclick="addToCart('${item.name.replace(/'/g, "\\'")}', ${item.price})" class="btn-add-to-cart flex items-center justify-center">
              <span class="material-symbols-outlined text-[16px]">add</span>
            </button>
          </div>
        </div>
      `;
    });
    container.innerHTML = html;
  }

  // --- LOGIN MODAL LOGIC ---
  window.toggleLogin = function () {
    const overlay = getEl('login-modal-overlay');
    if (overlay) {
      overlay.classList.toggle('open');
    }
  };

  window.switchLoginTab = function (tab) {
    const loginForm = getEl('form-login-view');
    const registerForm = getEl('form-register-view');
    const btnLogin = getEl('tab-btn-login');
    const btnRegister = getEl('tab-btn-register');

    if (tab === 'login') {
      loginForm.style.display = 'block';
      registerForm.style.display = 'none';
      btnLogin.classList.add('border-primary', 'text-white');
      btnLogin.classList.remove('text-zinc-400');
      btnRegister.classList.remove('border-primary', 'text-white');
      btnRegister.classList.add('text-zinc-400');
    } else {
      loginForm.style.display = 'none';
      registerForm.style.display = 'block';
      btnRegister.classList.add('border-primary', 'text-white');
      btnRegister.classList.remove('text-zinc-400');
      btnLogin.classList.remove('border-primary', 'text-white');
      btnLogin.classList.add('text-zinc-400');
    }
  };

  // --- DYNAMIC HERO SLIDER (HOMEPAGE) ---
  window.initHeroSlider = function () {
    if (!getEl('hero-slide-title')) return; // Not on home page

    showSlide(0);
    startAutoSlide();
  };

  function showSlide(idx) {
    currentSlideIdx = idx;
    const slide = slides[idx];

    const titleEl = getEl('hero-slide-title');
    const descEl = getEl('hero-slide-desc');
    const plateImgEl = getEl('hero-slide-plate');
    const flameEl = getEl('hero-slide-flame');
    const cardTitleEl = getEl('hero-slide-card-title');
    const cardPriceEl = getEl('hero-slide-card-price');
    const cardImgEl = getEl('hero-slide-card-img');
    const currentNumEl = getEl('hero-slide-current-num');
    const fillEl = getEl('hero-progress-fill');

    if (titleEl) titleEl.innerHTML = slide.title;
    if (descEl) descEl.textContent = slide.description;
    
    if (plateImgEl) {
      plateImgEl.src = slide.image;
      plateImgEl.classList.remove('rotate-trigger');
      void plateImgEl.offsetWidth; // Reflow
      plateImgEl.classList.add('rotate-trigger');
    }

    if (flameEl) {
      flameEl.style.display = slide.isHot ? 'block' : 'none';
    }

    if (cardTitleEl) cardTitleEl.textContent = slide.dishName;
    if (cardPriceEl) cardPriceEl.textContent = `$${slide.dishPrice.toFixed(2)}`;
    if (cardImgEl) cardImgEl.src = slide.image;
    if (currentNumEl) currentNumEl.textContent = idx + 1;

    // Reset and trigger progress bar fill
    if (fillEl) {
      fillEl.style.transition = 'none';
      fillEl.style.width = '0%';
      void fillEl.offsetWidth; // Reflow
      fillEl.style.transition = 'width 5.5s linear';
      fillEl.style.width = '100%';
    }
  }

  function startAutoSlide() {
    stopAutoSlide();
    slideInterval = setInterval(() => {
      let nextIdx = (currentSlideIdx + 1) % slides.length;
      showSlide(nextIdx);
    }, 5500);
  }

  function stopAutoSlide() {
    if (slideInterval) {
      clearInterval(slideInterval);
    }
  }

  window.prevSlide = function () {
    stopAutoSlide();
    let prevIdx = (currentSlideIdx - 1 + slides.length) % slides.length;
    showSlide(prevIdx);
    startAutoSlide();
  };

  window.nextSlide = function () {
    stopAutoSlide();
    let nextIdx = (currentSlideIdx + 1) % slides.length;
    showSlide(nextIdx);
    startAutoSlide();
  };

  // --- AUTOMATIC MENU CLICK EVENT BINDING ---
  function bindMenuAddButtons() {
    // Look for layouts that look like menu list items and attach cart addition
    const currentUrl = window.location.href;
    
    // Auto add listener to general lists in kitchen and bar menu
    const rows = document.querySelectorAll('.flex.justify-between.items-end, .flex.items-baseline.justify-between');
    rows.forEach(row => {
      // Skip if it's the navigation bar or custom modals
      if (row.closest('nav') || row.closest('.cart-panel') || row.closest('.modal-container')) return;
      if (row.querySelector('.btn-add-to-cart') || row.querySelector('.add-btn')) return;

      const nameEl = row.querySelector('h3') || row.querySelector('span:first-child');
      const priceEl = row.querySelector('.font-headline-md, .font-price-tag');
      if (!nameEl || !priceEl) return;

      const name = nameEl.textContent.trim();
      const priceVal = parseFloat(priceEl.textContent.replace(/[^0-9.]/g, ''));
      if (!name || isNaN(priceVal) || priceVal <= 0) return;

      // Add a clean click handler to the row/parent or append a nice inline red add to cart button
      const parent = priceEl.parentElement;
      if (parent && !parent.querySelector('.btn-add-to-cart')) {
        const btn = document.createElement('button');
        btn.className = 'btn-add-to-cart ml-3';
        btn.title = `Add ${name} to Tray`;
        btn.innerHTML = '<span class="material-symbols-outlined text-[15px]">add</span>';
        btn.onclick = function (e) {
          e.stopPropagation();
          window.addToCart(name, priceVal);
        };
        parent.appendChild(btn);
      }
    });

    // Auto-bind card layouts in signatures page
    if (currentUrl.includes('signatures')) {
      const sigCards = document.querySelectorAll('.grid > div');
      sigCards.forEach(card => {
        const nameEl = card.querySelector('h3.font-headline-md');
        const priceEl = card.querySelector('span.font-headline-md');
        if (!nameEl || !priceEl || card.querySelector('.btn-add-to-cart-large')) return;

        const name = nameEl.textContent.trim();
        const priceVal = parseFloat(priceEl.textContent.replace(/[^0-9.]/g, ''));
        if (!name || isNaN(priceVal) || priceVal <= 0) return;

        const btnContainer = card.querySelector('.border-t') || card;
        const btn = document.createElement('button');
        btn.className = 'btn-add-to-cart-large mt-4 w-full text-center flex items-center justify-center gap-2';
        btn.innerHTML = '<span class="material-symbols-outlined text-[18px]">shopping_cart</span> Add to Cart';
        btn.onclick = function (e) {
          e.stopPropagation();
          window.addToCart(name, priceVal);
        };
        btnContainer.appendChild(btn);
      });
    }
  }

  // --- INITIALIZATION ---
  document.addEventListener('DOMContentLoaded', () => {
    // Initial UI render
    updateCartUI();
    
    // Bind click listeners for automatic add buttons
    bindMenuAddButtons();

    // Initialize Hero Slider if present
    initHeroSlider();

    // Scroll Reveal Intersection Observer
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });
    revealElements.forEach(el => revealObserver.observe(el));

    // Handle cross-tab updates for localStorage
    window.addEventListener('storage', (e) => {
      if (e.key === 'manchindosCart') {
        updateCartUI();
      }
    });
    window.addEventListener('cartUpdated', () => {
      updateCartUI();
    });
  });

})();
