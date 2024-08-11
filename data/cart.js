export const cart = [];

export function addToCart(productId){
  let matchingItem;
  const itemQuantity = Number(document.querySelector(`.js-${productId}`).value);
  cart.forEach((item)=>{
    
    if(productId===cartItem.productId)
      {
        matchingItem=cartItem;
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
}

