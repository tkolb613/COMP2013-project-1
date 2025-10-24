import "./App.css";
import GroceriesAppContainer from "./assets/Components/GroceriesAppContainer";
import data from "./data/products";

function App() {
  return (
  <>
  <GroceriesAppContainer data = {data} />
  </>
  );
}

export default App;
