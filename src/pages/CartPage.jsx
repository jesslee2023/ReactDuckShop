import React from "react";
import CartItem from "../components/CartItem";

const CartPage = ({
  cartItems,
  onRemove,
  increaseHandler,
  decreaseHandler,
}) => {
  return (
    <div style={{ backgroundColor: "lightBlue" }}>
      {cartItems.map((item) => (
        <div key={item.id}>
          {item.count === 0 ? null : (
            <div>
              <CartItem
                item={item}
                onRemove={onRemove}
                increaseHandler={increaseHandler}
                decreaseHandler={decreaseHandler}
              />
              <hr />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CartPage;
