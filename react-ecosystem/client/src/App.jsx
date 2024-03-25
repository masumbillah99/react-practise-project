import "./App.css";
import ProductDetails from "./components/products/ProductDetails";
import ProductList from "./components/products/ProductList";
import { ProductDetailsProvider } from "./provider";

function App() {
  return (
    <ProductDetailsProvider>
      <div className="flex m-2">
        <ProductList />
        <ProductDetails />
      </div>
    </ProductDetailsProvider>
  );
}

export default App;
