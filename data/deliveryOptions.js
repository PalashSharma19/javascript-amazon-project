import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
export function getDeliveryOptions(deliveryOptionId){
  let deliveryOption;
  deliveryOptions.forEach((option)=>{
    if(option.id===deliveryOptionId)
      deliveryOption=option;
  });
  return deliveryOption || deliveryOptions[0];
}
export function calculateDeliveryOptions(deliveryOption){
  const today = dayjs();
  const deliveryDate = today.add(deliveryOption.deliveryDays,'days');
  return deliveryDate;
}
export const deliveryOptions=[{
  id:'1',
  deliveryDays: 7,
  deliveryPrice:0
},{
  id:'2',
  deliveryDays: 3,
  deliveryPrice:499
},{
  id:'3',
  deliveryDays: 1,
  deliveryPrice:999 
}];