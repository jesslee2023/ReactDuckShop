import React from "react";

import "../css/CartItem.css";

const CartItem = ({ item, onRemove, increaseHandler, decreaseHandler }) => (
  <div className="cart-item">
    <img src={item.image} className="img-cart" alt="item" />
    <div className="item-details">
      <span className="name">{item.name}</span>
      <span className="quantity">
        <button onClick={(e) => decreaseHandler(e, item)}>-</button>
        {item.count}
        <button onClick={(e) => increaseHandler(e, item)}>+</button>
      </span>
      <span className="price">{item.price * item.count}</span>
      <button className="remove-button" onClick={(e) => onRemove(e, item.id)}>
        Remove
      </button>
    </div>
  </div>
);

export default CartItem;
