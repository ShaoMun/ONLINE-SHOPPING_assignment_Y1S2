// JavaScript code
const minPrice = document.getElementById('min-price');
const maxPrice = document.getElementById('max-price');
const minValue = document.getElementById('min-value');
const maxValue = document.getElementById('max-value');
const applyBtn = document.getElementById('apply-btn');
const sliderError = document.getElementById('slider-error');
const newProductsHTML = document.querySelector('.js-products-container');
const resetBtn = document.querySelector('.reset-button button');

// Function to update price range values
function updatePrice() {
  minValue.textContent = 'RM' + minPrice.value;
  maxValue.textContent = 'RM' + maxPrice.value;
}

// Function to apply price filter
function applyPriceFilter(min, max) {
  // Filter products based on the price range
  const filteredProducts = newProductList.filter((product) => {
    return product.price >= min && product.price <= max;
  });

  // Display filtered products
  displayProducts(filteredProducts);
}

// Function to apply filter
function applyFilter() {
  sliderError.innerHTML = '';
  const min = parseInt(minPrice.value);
  const max = parseInt(maxPrice.value);

  // Validate if min price is lower than max price
  if (min >= max) {
    sliderError.innerHTML = 'Max price has to be higher than Min price';
    return;
  }

  // Get the selected category if any
  const selectedCategoryElement = document.querySelector('.active-filter-button');
  const selectedCategory = selectedCategoryElement ? selectedCategoryElement.textContent.toLowerCase() : '';

  // Filter products based on price range and category (if any)
  const filteredProducts = newProductList.filter((product) => {
    const matchesCategory = selectedCategory ? product.category.includes(selectedCategory) : true;
    const matchesPrice = product.price >= min && product.price <= max;
    return matchesPrice && matchesCategory;
  });

  // Display filtered products
  displayProducts(filteredProducts);

  // Attach event listeners to "Add to Cart" buttons again
  attachAddToCartListeners();
}

// Function to display products
function displayProducts(productList) {
  let productHTML = '';
  productList.forEach((product) => {
    productHTML +=
    `<div class="products">
    <div class="product-img">
        <img src="${product.image}" alt="${product.productName}">
        <button class="js-add-to-cart" 
        data-product-name="${product.productName}"
        data-product-brand="${product.brand}"
        data-product-price="${product.price}"
        data-product-image="${product.image}">ADD TO CART</button>
    </div>
    <div class="products-desc">
        <p class="product-brand">${product.brand}</p>
        <p class="product-name">${product.productName}</p>
        <p class="product-price">RM${product.price}.00</p>
    </div>
</div>`;
  });
  newProductsHTML.innerHTML = productHTML;
}

// Display all products initially
displayProducts(newProductList);

// Function to attach event listeners to "Add to Cart" buttons
function attachAddToCartListeners() {
    document.querySelectorAll('.js-add-to-cart')
        .forEach((button) => {
            button.addEventListener('click', () => {
                const productName = button.dataset.productName;
                const productBrand = button.dataset.productBrand;
                const productPrice = button.dataset.productPrice;
                const productImage = button.dataset.productImage;

                // Check if the product already exists in the cart
                const existingItemIndex = cart.findIndex(item => item.productName === productName && item.productBrand === productBrand);

                if (existingItemIndex !== -1) {
                    // If product exists, increment quantity
                    cart[existingItemIndex].quantity++;
                } else {
                    // If product doesn't exist, add it to the cart
                    cart.push({
                        productName: productName,
                        productBrand: productBrand,
                        productPrice: productPrice,
                        productImage: productImage,
                        quantity: 1
                    });
                }

                // Update cart and local storage
                updateCart();
            });
        });
}

// Event listeners for price range inputs and apply button
minPrice.addEventListener('input', updatePrice);
maxPrice.addEventListener('input', updatePrice);
applyBtn.addEventListener('click', applyFilter);

// Event listener for category filter buttons
document.querySelectorAll('.js-filter-button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.js-filter-button').forEach((btn) => btn.classList.remove('active-filter-button'));
    button.classList.add('active-filter-button');
    applyFilter();
  });
});

// Event listener for the reset button
resetBtn.addEventListener('click', () => {
  // Reset min and max price inputs to their default values
  minPrice.value = minPrice.min;
  maxPrice.value = maxPrice.max;

  // Update displayed minimum and maximum prices
  updatePrice();

  // Reset the filter and display all products
  displayProducts(newProductList);

  // Clear the search input field
  document.querySelector('.search-input').value = '';

  document.querySelectorAll('.js-filter-button').forEach((btn) => btn.classList.remove('active-filter-button'));
});

// Function to handle search input
function handleSearch() {
  const searchInput = document.querySelector('.search-input').value.toLowerCase();

  // Get the selected category if any
  const selectedCategoryElement = document.querySelector('.active-filter-button');
  const selectedCategory = selectedCategoryElement ? selectedCategoryElement.textContent.toLowerCase() : '';

  // Get the min and max price
  const min = parseInt(minPrice.value);
  const max = parseInt(maxPrice.value);

  // Filter products based on search input, category (if any), and price range
  const filteredProducts = newProductList.filter((product) => {
    const matchesSearch = product.productName.toLowerCase().includes(searchInput) || product.brand.toLowerCase().includes(searchInput);
    const matchesCategory = selectedCategory ? product.category.includes(selectedCategory) : true;
    const matchesPrice = product.price >= min && product.price <= max;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  // Display filtered products
  displayProducts(filteredProducts);
}

// Event listener for search input change
document.querySelector('.search-input').addEventListener('input', handleSearch);

import {cart} from './cart-dataset.js';

// Function to update the cart and local storage
function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart); // For debugging
}

// Function to initialize the cart from local storage
function initializeCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        // If there's cart data in local storage, parse and assign it to the cart
        Object.assign(cart, JSON.parse(storedCart));
    }
}

// Call initializeCart on page load to populate cart from local storage
initializeCart();

// Attach event listeners to "Add to Cart" buttons initially
attachAddToCartListeners();
