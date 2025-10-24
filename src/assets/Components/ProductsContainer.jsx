import ProductCard from "./ProductCard";

export default function ProductsContainer({
  products,
  handleAddToCart
}) {
  //Layout
  return (
    <div className="ProductsContainer">
      {products.map((product) => (
        <ProductCard
        key={product.id}
        product={product}
        handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}
