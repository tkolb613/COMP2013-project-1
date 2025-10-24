import cartEmpty from "../cart-empty.png";
import cartFull from "../cart-full.png";

export default function NavBar({username, cartNotEmpty}){
    //Layout
    return(
        <div className="NavBar">
            <h1>Groceries App</h1>
            <p>Welcome, {username}!</p>
            <div className="CartIcon">
                <img src={cartNotEmpty ? cartFull : cartEmpty}
                height={40}
                />

            </div>

        </div>
    )
}