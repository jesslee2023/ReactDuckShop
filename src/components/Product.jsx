function Product({ product, onAdd }) {
  return (
    <div
      style={{
        padding: "1em",
        textAlign: "center",
        backgroundColor: "lightgray",
        margin: "0.5em auto",
        borderRadius: "1em",
        width: "60%",
      }}
    >
      <img width={200} height={200} src={product.image} alt={product.name} />
      <p>
        {product.name} - {product.price} SEK
      </p>
      <button onClick={(e) => onAdd(e, product)}>+ Add to cart</button>
    </div>
  );
}

export default Product;
