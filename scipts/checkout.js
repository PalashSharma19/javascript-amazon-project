import { calculateCartQuantity, cart, removeFromCart, updateQuantity } from '../data/cart.js';
import { products } from '../data/products.js';
import { formatCurrency } from './utils/money.js';
let cartItemHTML='';
cart.forEach((cartItem)=>{
  const productId = cartItem.productId;
  let matchingProduct;
products.forEach((product)=>{
  if(product.id===productId)
    matchingProduct=product;
})
  cartItemHTML+=`
<div class="cart-item-container js-product-id-${matchingProduct.id}">
    <div class="delivery-date">
      Delivery date: Tuesday, June 21
    </div>

    <div class="cart-item-details-grid">
      <img class="product-image"
        src="${matchingProduct.image}">

      <div class="cart-item-details">
        <div class="product-name">
          ${matchingProduct.name}
        </div>
        <div class="product-price">
          $${formatCurrency(matchingProduct.priceCents)}
        </div>
        <div class="product-quantity">
          <span>
            Quantity: <span class="quantity-label js-quantity-label-${matchingProduct.id}">${cartItem.itemQuantity}</span>
          </span>
          <span class="update-quantity-link link-primary js-update" data-product-id="${matchingProduct.id}">
            Update
          </span>
          <input class="quantity-input js-quantity-input js-quantity-input-${matchingProduct.id}" data-product-id="${matchingProduct.id}">
            <span class="save-quantity-link link-primary js-save" data-product-id="${matchingProduct.id}">Save</span>
          <span class="delete-quantity-link link-primary js-delete" data-product-id="${matchingProduct.id}">
            Delete
          </span>
        </div>
      </div>

      <div class="delivery-options">
        <div class="delivery-options-title">
          Choose a delivery option:
        </div>
        <div class="delivery-option">
          <input type="radio" checked
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}">
          <div>
            <div class="delivery-option-date">
              Tuesday, June 21
            </div>
            <div class="delivery-option-price">
              FREE Shipping
            </div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio"
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}">
          <div>
            <div class="delivery-option-date">
              Wednesday, June 15
            </div>
            <div class="delivery-option-price">
              $4.99 - Shipping
            </div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio"
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}">
          <div>
            <div class="delivery-option-date">
              Monday, June 13
            </div>
            <div class="delivery-option-price">
              $9.99 - Shipping
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
})
function updateCartQuantity(){
  const cartQuantity=calculateCartQuantity();
  document.querySelector(".js-checkout-middle-header").innerHTML=`${cartQuantity} items`;
  console.log(cart);
}

document.querySelector(".js-cart-list").innerHTML=cartItemHTML;
updateCartQuantity();
document.querySelectorAll(".js-delete").forEach((link)=>{
  link.addEventListener('click',()=>{
    const { productId }= link.dataset;
    removeFromCart(productId);
    const container=document.querySelector(`.js-product-id-${productId}`);
    container.remove();
    updateCartQuantity();
  })
})
document.querySelectorAll(".js-update").forEach((link)=>{
  link.addEventListener('click',()=>{
    const { productId }= link.dataset;
    const container=document.querySelector(`.js-product-id-${productId}`);
    container.classList.add('is-editing-quantity');
  })
})
document.querySelectorAll(".js-save").forEach((link)=>{
  link.addEventListener('click',()=>{
    saveNewQuantity(link);
  })
})
document.querySelectorAll(".js-quantity-input").forEach((input)=>{
  input.addEventListener('keypress',(event)=>{
    if(event.key==='Enter'){
      saveNewQuantity(input);
    }
  })
})
function saveNewQuantity(link){
  const { productId }= link.dataset;
    let currentCartQuantity=Number(document.querySelector(`.js-quantity-input-${productId}`).value);;
    if(currentCartQuantity<0 || currentCartQuantity>=1000){
      alert('Select quantity between 0 and 1000');
      return;
    }
    else{
    cart.forEach((cartItem)=>{
      if(cartItem.productId===productId){
        cartItem.itemQuantity=currentCartQuantity;
        document.querySelector(`.js-quantity-label-${productId}`).innerHTML=currentCartQuantity;
        updateQuantity(productId,currentCartQuantity);
      }
    })
    updateCartQuantity();
    
    const container=document.querySelector(`.js-product-id-${productId}`);
    container.classList.remove('is-editing-quantity');
    }
}