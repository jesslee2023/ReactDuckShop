import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import Product from "../components/Product";
import { products } from "../data";

export default function ItemPage({ handleAddToCart }) {
  const { id } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    const foundItem = products.find((p) => {
      return p.id === +id;
    });
    setItem(foundItem);
  }, [id]);

  if (!item) return <div>Item not found</div>;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ textAlign: "center", color: "blue", fontSize: "80px" }}>
        {item.description}
      </div>
      <Product product={item} onAdd={handleAddToCart} />
    </div>
  );
}
