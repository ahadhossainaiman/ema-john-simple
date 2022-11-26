import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

export default function Product(props) {
    
    const {name,img,seller,price,ratings}=props.product;
  return (
    <>
    <div className='product'>
        <img src={img} alt="pic" />
        <div className='product_info'>
        <p className='product_name'>{name}</p>
        <p>Price: ${price}</p>
        <p><small>Manufacturer:{seller}</small></p>
        <p><small>Rating: {ratings} stars</small></p>
        </div>
       <button onClick={()=>props.addToCart(props.product)} className='btn_cart'>
        <p>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></p>
       </button>
        
    </div>
    </>
  )
}
