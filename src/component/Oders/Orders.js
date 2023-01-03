import React from 'react';
import useCart from '../../Hook/useCart/useCart.js';
import useProducts from '../../Hook/useProducts/useProducts.js';
import { removeFromDb } from '../../utilities/fakedb.js';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem.js';
import './Orders.css';

export default function Orders() {
    const [products,setProducts] = useProducts();
    const [cart,setCart] = useCart(products);
    const handleRemoveProduct = (product)=>{
      const rest = cart.filter((pd => pd.id!==product.id));
      setCart(rest);
      removeFromDb(product.id)
    }
  return (

    <div className="shop_container">
      <div className="order_container">
        {
            cart.map(product=><ReviewItem key={product.id}
                product={product}
                handleRemoveProduct={handleRemoveProduct}
            ></ReviewItem>)
        }
      </div>
      <div className="cart_container" style={{hight:"100vh"}}>
        <div className="cart_content">
          <Cart cart={cart} >
            <button className='clear-btn'>Clear Cart</button>
            <button className='Proceed-btn'>Proceed Checkout</button>
          </Cart>
        </div>
      </div>
    </div>
  )
}
