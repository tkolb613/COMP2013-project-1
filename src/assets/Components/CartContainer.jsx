import CartCard from "./CartCard";

export default function CartContainer({cart, handleRemoveFromCart, handleEmptyCart, handleUpdateQuantity, totalPrice}){
if(cart.length ===0){
    return <p>No items in the cart!</p>
}
//Layout
return (
<div className="CartContainer">
    {cart.map((item)=> (
        <CartCard        
            key={item.id}
            {...item}
            handleRemoveFromCart={handleRemoveFromCart}
            handleUpdateQuantity={handleUpdateQuantity}
            />            
        ))}
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <button onClick={handleEmptyCart}>Empty Cart</button>
</div>
)
}