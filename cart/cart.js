// Function to retrieve cart from local storage
function getCartFromLocalStorage() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        return JSON.parse(storedCart);
    } else {
        return [];
    }
}


// Get cart from local storage
const cart = getCartFromLocalStorage();


// Function to update the cart and local storage
function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart); // For debugging
    generateCartHTML(); // Regenerate cart HTML after update
}

// Function to generate HTML for cart items
function generateCartHTML() {
    let cartHTML = '';
    let totalAmount = 0;
    if (cart.length === 0) {
        // Display text indicating that the cart is empty
        cartHTML = '<p style="font-size: 20px; color: red;">Your cart is currently empty, please add more items to it.</p>';
    } else {
        cart.forEach((cartItem, index) => {
            // Calculate total price for the item
            const totalPrice = cartItem.quantity * cartItem.productPrice;
            totalAmount += totalPrice;

            cartHTML +=
            `<hr>
            <div class="cart-item">
                <img src="${cartItem.productImage}" >
                <p class="cart-desc"><b>${cartItem.productBrand}</b> ${cartItem.productName} <br>
                Quantity: <span class="quantity">
                <button class="increase-quantity-btn" data-index="${index}">+</button>
                ${cartItem.quantity}</span>             
                <button class="decrease-quantity-btn" data-index="${index}">-</button>
                </p>
                <p class="cart-price">RM${totalPrice}.00</p>
                <button class="delete-item-btn" data-index="${index}">Delete</button>
            </div>`;
        });
    }

    // Display cart HTML in the LeftCol element
    document.querySelector('.LeftCol').innerHTML = cartHTML;
    document.querySelector('.totalAmount').innerHTML = `RM${totalAmount}.00`;
    // Add event listeners to delete buttons
    document.querySelectorAll('.delete-item-btn').forEach(button => {
        button.addEventListener('click', () => {
            // Get the index of the item to be deleted from the data-index attribute
            const index = parseInt(button.dataset.index);

            // Remove the item from the cart array
            cart.splice(index, 1);

            // Update cart in local storage
            updateCart();

            // Regenerate cart HTML
            generateCartHTML();
        });
    });

    // Add event listeners to increase quantity buttons
    document.querySelectorAll('.increase-quantity-btn').forEach(button => {
        button.addEventListener('click', () => {
            // Get the index of the item to be updated from the data-index attribute
            const index = parseInt(button.dataset.index);

            // Increase the quantity of the item
            cart[index].quantity++;

            // Update cart in local storage
            updateCart();

            // Regenerate cart HTML
            generateCartHTML();
        });
    });

    // Add event listeners to decrease quantity buttons
    // Add event listeners to decrease quantity buttons
    document.querySelectorAll('.decrease-quantity-btn').forEach(button => {
        button.addEventListener('click', () => {
            // Get the index of the item to be updated from the data-index attribute
            const index = parseInt(button.dataset.index);

            // Decrease the quantity of the item
            if (cart[index].quantity > 1) {
                cart[index].quantity--;
            } else {
                // If quantity is already 1, remove the item from the cart
                cart.splice(index, 1);
            }

            // Update cart in local storage
            updateCart();

            // Regenerate cart HTML
            generateCartHTML();
        });
    });

}


// Generate cart HTML initially
generateCartHTML();


//STORE PRICE IN SESSION STORAGE 
//document.getElementById("totalAmount").innerHTML = Total;
//sessionStorage.setItem('amount',Total);

