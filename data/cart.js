export let cart = JSON.parse(localStorage.getItem('cart')) ||
[];

function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart))
}

export function addToCart(productId){
  let matchingItem;
  const itemQuantity = Number(document.querySelector(`.js-${productId}`).value);
  cart.forEach((item)=>{
    
    if(productId===item.productId)
      {
        matchingItem=item;
      }
    })
    if(matchingItem)
    {
      matchingItem.itemQuantity+=itemQuantity;
    }
    else{
      cart.push({
        productId,
        itemQuantity,
        deliveryOptionId: '1'
      })
    }
    saveToStorage();
}
export function removeFromCart(productId){
  const newCart=[];
  cart.forEach((cartItem)=>{
    if(productId!==cartItem.productId)
      newCart.push(cartItem);
  })
  cart=newCart;
  
  saveToStorage();
}

export function calculateCartQuantity()
{
  let cartQuantity=0;
    cart.forEach((cartItem)=> {
      cartQuantity+=cartItem.itemQuantity;
    });
    return cartQuantity;
  }
export function updateQuantity(productId, newQuantity){
  cart.forEach((cartItem)=>{
    if(cartItem.productId===productId)
      cartItem.itemQuantity=newQuantity;
  });
  saveToStorage();
}

export function updateDeliveryOption(productId,deliveryOptionId){
  let matchingItem;
  cart.forEach((item)=>{
    
    if(productId===item.productId)
      {
        matchingItem=item;
      }
    });
    matchingItem.deliveryOptionId=deliveryOptionId;
    saveToStorage();
}