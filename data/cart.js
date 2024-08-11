export const cart = [{
  productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  itemQuantity: 2
},{
  productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
  itemQuantity: 2
}];

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

