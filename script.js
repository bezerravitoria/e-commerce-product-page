const cartIcon = document.getElementById('cart');
const num = document.getElementById('num');
const openCart = document.querySelector('.my-cart');
const cartContent = document.querySelector('.my-cart-content');
const btnPlus = document.querySelector('.plus-button');
const btnMinus = document.querySelector('.minus-button');
const btnAddToCart = document.querySelector('.add-to-cart');
const quantityHTML = document.getElementById('number-of-items');
const productNameHTML = document.querySelector('.product-name');
const productPriceHTML = document.querySelector('.price-after-discount');
const productThumbnails = document.querySelectorAll('.product-thumbnails img');


cartIcon.addEventListener('click', () => { 
    toggleCart();
});

let quantity = 0

btnPlus.addEventListener('click', () => {
    quantity += 1;
    quantityHTML.textContent = quantity;
})

btnMinus.addEventListener('click', () => {
    if (quantity > 0) {
        quantity -= 1;
        quantityHTML.textContent = quantity;
    }
})


btnAddToCart.addEventListener('click', () => {
    let productName = productNameHTML.textContent;
    let productPrice = productPriceHTML.textContent;
    productPrice = productPrice.substring(1);
    if (quantity > 0) {
        cartContent.innerHTML = 
        `<div class="cartContent">
        <div class="gridImg"><img src="images/image-product-1-thumbnail.jpg"></div>
        <div class="cartContentProductName">${productName}</div>
        <div class="cartContentProductPrice">$${productPrice} x ${quantity} <span style="color: var(--Black)">$${productPrice * quantity}<span></div>
        <div class="delete"><img src="images/icon-delete.svg"></div>
        <button class="checkout">Checkout</button>
        </div>`;

        num.innerHTML = `<p>${quantity}</p>`;
        num.style.display = 'block';

        btnDelete = document.querySelector('.delete');
        btnDelete.addEventListener('click', () => {
            cartContent.innerHTML = '<p>Your cart is empty</p>';
            num.style.display = 'none';
        })
    }
    });
    
productThumbnails.forEach(element => element.addEventListener('click', () => {
    overlay.style.display = 'flex';
}))


    function toggleCart() {
        if (openCart.style.display == 'block') {
            openCart.style.display = 'none';
        } else {
            openCart.style.display = 'block';
        }
}


/*OVERLAY*/
const overlay = document.querySelector('.overlay-background');
const closeBtn = document.getElementById('closeBtn');
const overlayThumbnails = document.querySelectorAll(".overlay-thumbnails img");
const previousBtn = document.getElementById('previousBtn');
const nextBtn = document.getElementById('nextBtn');
const mainImg = document.querySelector(".overlay-main-img");
var i = 0;

closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
})

overlayThumbnails.forEach(element => element.addEventListener('click', () => {          /*ADD AN EVENTLISTENER TO EACH THUMBNAIL*/
    mainImg.setAttribute('src', element.getAttribute('bigImg'));
    i = parseInt(element.getAttribute('i'));
    overlayThumbnails.forEach(element => element.className = element.className.replace("true", "false"));    
    element.className = element.className.replace("false", "true");
}))

previousBtn.addEventListener('click', () => {
    i-=1;
    if (i < 0) {
        i = 3;
    }
    mainImg.setAttribute('src', overlayThumbnails[i].getAttribute('bigImg'));
    toggleClasses();
})

nextBtn.addEventListener('click', () => {
    i+=1;

    if (i > 3) {
        i = 0;
    }

    mainImg.setAttribute('src', overlayThumbnails[i].getAttribute('bigImg'));
    toggleClasses();
})

function toggleClasses() {
    overlayThumbnails.forEach(element => element.className = element.className.replace("true", "false"));
    overlayThumbnails[i].className = overlayThumbnails[i].className.replace("false", "true");
}


/* MOBILE */

const menu = document.querySelector('.menu');
const menuOverlay = document.querySelector('.menu-background');
const checkbox = document.getElementById('toggler');
const closeMenuBtn = document.getElementById('menu-close-btn');

menu.addEventListener('click', () => {
    menuOverlay.style.display = 'flex';
}
)

closeMenuBtn.addEventListener('click', () => {
    menuOverlay.style.display = 'none';
})
