import QuantityCounter from "./QuantityCounter";

export default function CartCard({
    id,
    productName,
    price,
    image,
    quantity,
    handleRemoveFromCart,
    handleUpdateQuantity
}) {
    //Layout
    return (
    <div className="CartCard">
        <h2>{productName}</h2>
        <img src={image} alt={productName} height="20px" />
        <QuantityCounter
            quantity={quantity}
            minValue={1}
            onChange={(newQty) => handleUpdateQuantity(id, newQty)}
        />
        <p>Total Price: ${(parseFloat(price.replace("$", "")) * quantity).toFixed(2)}</p>
        <button onClick={() => handleRemoveFromCart(id)}>
            Remove Item
        </button>
    </div>
    );
}
