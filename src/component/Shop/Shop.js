import React, { useEffect, useState } from "react";
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

  const addToCart = (product) => {
    const newCart = [...cart,product];
    setCart(newCart)
  };
  console.log(cart);
  
  return (
    <div className="shop_container">
      <div className="product_container">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <div className="cart_container">
        <div className="cart_content">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
}
