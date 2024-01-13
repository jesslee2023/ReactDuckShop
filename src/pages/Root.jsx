import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Root({ cartItems, onRemove, increaseHandler, decreaseHandler }) {
  return (
    <>
      <Header
        cartItems={cartItems}
        onRemove={onRemove}
        increaseHandler={increaseHandler}
        decreaseHandler={decreaseHandler}
      />
      <Outlet />
    </>
  );
}

export default Root;
