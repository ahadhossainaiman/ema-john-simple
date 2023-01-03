import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ReviewItem.css";

export default function ReviewItem(props) {
  const {handleRemoveProduct,product} = props
  const { name, img, price, shipping, quantity } = product;
  return (
    <div className="select-container">
       <img src={img} alt="" />
      <div className="select-item">
     
      <div className="cart-content" >
        <h3>{name}</h3>
        <p>Price:<small>${price}</small></p>
        
        <p>quantity:<small>{quantity}</small></p>
      </div>
      
      <div className="">
        <button className="delete-btn" onClick={()=>handleRemoveProduct(product)}>
          <FontAwesomeIcon className="delete-button" icon={faTrashAlt}></FontAwesomeIcon>
        </button>
      </div>
      </div>
    </div>
  );
}
