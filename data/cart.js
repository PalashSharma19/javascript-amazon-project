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
        itemQuantity
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
