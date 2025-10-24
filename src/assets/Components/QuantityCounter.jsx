export default function QuantityCounter({quantity, setQuantity, minValue =0, onChange}){
    //increase quantity across products and cart
    const increase = () => {
        const newQty = quantity + 1;
        if (onChange) {
            onChange(newQty);
        } else if (setQuantity) {
            setQuantity(newQty);
        }
    }
    //decrease quantity across products and cart
    const decrease = () => {
        const newQty = Math.max(quantity - 1, minValue);
        if (onChange){
            onChange(newQty);
        } else if (setQuantity) {
            setQuantity(newQty);
        }
    }
    //Layout
    return(
        <div className="QuantityCounter">
            <button onClick={decrease}>-</button>
            <span>{quantity}</span>
            <button onClick={increase}>+</button>
        </div>
    )
}