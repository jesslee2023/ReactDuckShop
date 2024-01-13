import React from "react";

import "../css/CartItem.css";

const CartItem = ({ item, onRemove, increaseHandler, decreaseHandler }) => {
  const onDecrease = () => {
    if (item.count === 1) {
      onRemove(item.id);
    } else {
      decreaseHandler(item);
    }
  };
  return (
    <div className="cart-item">
      <img src={item.image} className="img-cart" alt="item" />
      <div className="item-details">
        <span className="name">{item.name}</span>
        <span className="quantity">
          <button onClick={() => onDecrease(item)}>-</button>
          {item.count}
          <button onClick={() => increaseHandler(item)}>+</button>
        </span>
        <span className="price">{item.price * item.count}</span>
        <button className="remove-button" onClick={() => onRemove(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
