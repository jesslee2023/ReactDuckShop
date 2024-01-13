import Cart from "./Cart";
import { CartDropDown } from "./CartDropDown";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header({ cartItems, onRemove, increaseHandler, decreaseHandler }) {
  const [hidden, setHidden] = useState(true);

  const handleHidden = () => {
    setHidden(!hidden);
  };

  return (
    <div
      style={{
        backgroundColor: "#282c34",
        minHeight: 60,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        display: "flex",
        fontSize: "2em",
        color: "white",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "white",
          cursor: "pointer",
        }}
      >
        Duck Shop
      </Link>
      <div
        style={{ marginLeft: "auto", cursor: "pointer" }}
        onClick={handleHidden}
      >
        <Cart numItems={cartItems.length} />
      </div>
      {hidden ? null : (
        <CartDropDown
          cartItems={cartItems}
          onRemove={onRemove}
          increaseHandler={increaseHandler}
          decreaseHandler={decreaseHandler}
        />
      )}
    </div>
  );
}

export default Header;
