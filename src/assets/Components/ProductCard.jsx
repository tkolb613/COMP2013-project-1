import React, {useState} from "react";
import QuantityCounter from "./QuantityCounter";

export default function ProductCard({
  product,
  handleAddToCart,
}) {
  const [quantity, setQuantity] =useState(0);

  //Building our output
  return (
    <div className="ProductCard">
      {/* image */}
      <img src={product.image} alt="" height="100px" />
      {/* product name */}
      <h3>{product.productName}</h3>
      {/* product quantity */}
      <p>Quantity: {product.quantity}</p>
      {/* product brand */}
      <p>Brand: {product.brand}</p>
      {/* product price */}
      <p>Price: {product.price}</p>

      <QuantityCounter quantity={quantity} setQuantity={setQuantity} minValue={0}/>

      <button onClick={()=> handleAddToCart(product, quantity)}>
        Add to Cart
        </button>
    </div>
  );
}
