import React from 'react';
import './Cart.css';

export default function Cart(props) {
  const {cart} = props
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    console.log(props);
    
    

    for(let product of cart){
        quantity =  quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    let tax = parseFloat((total*0.1).toFixed(2))

  return (
    <div className='cart'>
        <h3>Order Summary</h3>
        <p><small>Selected Items: {quantity}</small></p>
        <p><small>Total Price:$ {total}</small></p>
        <p><small>Total Shipping Charge:$ {shipping}</small></p>
        <p>Tax:$ {tax}</p>
        <h2>Grand Total:$ {total+shipping+tax}</h2>
        {
          props.children
        }
    </div>
  )
}
