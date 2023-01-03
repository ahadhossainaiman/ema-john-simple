import React, { useEffect, useState } from "react";
import { addToDb, getStoreCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

export default function Shop() {
  const [products, setProducts] = useState([]);
  
  const [cart,setCart] = useState([])
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
 
  useEffect(()=>{
    const storedCart = getStoreCart();
    console.log(storedCart);
    
    const saveCart= [];
    for(const id in storedCart){
      const addedProduct = products.find(product => product.id === id);
      if(addedProduct){
        const quantity = storedCart[id];
        console.log(quantity);
        
        addedProduct.quantity = quantity;
        console.log(addedProduct.quantity);
        
        saveCart.push(addedProduct);
      }
      console.log(saveCart);
      
      
    }
    setCart(saveCart);
    
  },[products]);
 

  const addToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find(product => product.id === selectedProduct.id);
    if(!exists){
      selectedProduct.quantity = 1;
      newCart = [...cart,selectedProduct];
    } else {
      const rest = cart.filter(product => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest,exists];
    }
    setCart(newCart);
    addToDb(selectedProduct.id)
  };

  
  return (
    <div className="shop_container">
      <div className="product_container">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <div className="cart_container">
        <div className="cart_content">
          <Cart cart={cart}>
            <button className="clear-btn">Clear Cart</button>
            <button className="review-btn">Review Order</button>
          </Cart>
        </div>
      </div>
    </div>
  );
}
