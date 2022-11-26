import React from 'react'

export default function Cart({cart}) {
  return (
    <div>
        <h3>Order Summary</h3>
        <p><small>Selected Items:{cart.length}</small></p>
        <p><small>Total Price:</small></p>
        <p><small>Total Shipping Charge:$</small></p>
        <p>Tax:$</p>
        <h2>Grand Total:$</h2>
    </div>
  )
}
