import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Shop from "./pages/Shop";
import ItemPage from "./pages/ItemPage";
import Root from "./pages/Root";
import CartPage from "./pages/CartPage";

function App() {
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(e, item) {
    e.preventDefault();
    // Check if item is already in cart
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // Item exists, increase quantity
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      );

      setCartItems(updatedCartItems);
    } else {
      // Item doesn't exist, add to cart
      setCartItems([...cartItems, { ...item, count: 1 }]);
    }
  }

  const handleRemoveFromCart = (e, id) => {
    e.preventDefault();
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  const increaseHandler = (e, item) => {
    e.preventDefault();
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, count: cartItem.count + 1 }
        : cartItem
    );
    setCartItems(updatedCartItems);
  };

  const decreaseHandler = (e, item) => {
    e.preventDefault();
    const updatedCartItems = cartItems.map((cartItem) => {
      // cartItem.id === item.id
      //   ? { ...cartItem, count: cartItem.count - 1 }
      //   : cartItem
      if (cartItem.id === item.id) {
        if (cartItem.count === 0) {
          return cartItem;
        } else {
          return { ...cartItem, count: cartItem.count - 1 };
        }
      } else {
        return cartItem;
      }
    });
    setCartItems(updatedCartItems);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Root
              cartItems={cartItems}
              onRemove={handleRemoveFromCart}
              increaseHandler={increaseHandler}
              decreaseHandler={decreaseHandler}
            />
          }
        >
          <Route
            index
            element={
              <Shop cartItems={cartItems} handleAddToCart={handleAddToCart} />
            }
          />
          <Route
            path="/product/:id"
            element={<ItemPage handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                onRemove={handleRemoveFromCart}
                increaseHandler={increaseHandler}
                decreaseHandler={decreaseHandler}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
