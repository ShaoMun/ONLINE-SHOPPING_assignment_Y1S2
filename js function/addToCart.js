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
