import React, {useState} from "react";
import NavBar from "./NavBar";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import products from "../../data/products";

export default function GroceriesAppContainer(){
    //new state for the cart which starts as an empty array
    const [cart, setCart] = useState([]);

    //this function will handle adding products to the cart
    const handleAddToCart = (product, quantity)=> {
        if (quantity ===0) {
            alert("Please enter a quantity before adding to cart!");
            return;
        }

        setCart((prevCart)=>{
            const prevItem = prevCart.find((item)=> item.id === product.id);
            if(prevItem){
                return prevCart.map((item)=>
                item.id === product.id ? {...item, quantity: item.quantity + quantity}: item);
            } else {
                return [...prevCart, {...product, quantity}];
            }
        });
    }

    //this function will handle emptying the cart of all products
    const handleEmptyCart = () => {
        setCart([])
    };

    //this function will handle removing all quantities of a single type of item from the cart
    const handleRemoveFromCart = (productId) => {
        setCart((prevCart)=> prevCart.filter((item)=> item.id !== productId));
    };

    //this function will handle both adding and removing items to the cart
    const handleUpdateQuantity = (productId, newQuantity) => {
        if(newQuantity < 1) return;
        setCart((prevCart)=> prevCart.map((item)=> item.id === productId ? {...item, quantity: newQuantity} : item));
    };

    //calculates the total number of items in the cart
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    //calculates the total price of all items in the cart
    const totalPrice = cart.reduce((sum, item) =>{
        const numericPrice = parseFloat(item.price.replace("$", ""));
        return sum + numericPrice * item.quantity;
    }, 0);

    //Layout
  return(
     <div className="GroceriesAppContainer">
        <NavBar username="Thomas" cartNotEmpty={cart.length > 0} />

<div className="Main">
    <div className="Products">

    <ProductsContainer
    products={products}
    handleAddToCart={handleAddToCart}
    />
    </div>
    <div className="ShoppingCart">
      <h1>Cart</h1>
      {cart.length === 0 && <p>Cart is empty</p>}
      <CartContainer
      cart={cart}
      handleEmptyCart={handleEmptyCart}
      handleRemoveFromCart={handleRemoveFromCart}
      handleUpdateQuantity={handleUpdateQuantity}
      totalPrice={totalPrice}
      />
  </div>
  </div>
  </div>
  );
}