import { Link } from "react-router-dom";

import Product from "./Product";
import { products } from "../data";

function Body({ onAdd }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "1em",
        flexWrap: "wrap",
      }}
    >
      {products.map((product) => {
        return (
          <Link to={`/product/${product.id}`} key={product.id}>
            <Product product={product} onAdd={onAdd} />
          </Link>
        );
      })}
    </div>
  );
}

export default Body;
