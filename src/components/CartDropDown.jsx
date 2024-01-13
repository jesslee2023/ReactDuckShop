import React from "react";
import CartItem from "./CartItem";
import "../css/CartDropDown.css";
import { Link } from "react-router-dom";

export const CartDropDown = ({
  cartItems,
  onRemove,
  increaseHandler,
  decreaseHandler,
}) => {
  return (
    <div className="cart-dropdown">
      {cartItems.length === 0 ? (
        <div>No Items Added!</div>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={onRemove}
              increaseHandler={increaseHandler}
              decreaseHandler={decreaseHandler}
            />
          ))}
          <Link to="/cart" className="goto-cart">
            Go To Cart
          </Link>
        </div>
      )}
    </div>
  );
};
