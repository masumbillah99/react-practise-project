import "./App.css";
import AddProduct from "./components/products/AddProduct";
import ProductDetails from "./components/products/ProductDetails";
import ProductList from "./components/products/ProductList";
import ShapeComponent from "./components/demos/ShapeComponent";
import { ProductDetailsProvider } from "./provider";

function App() {
  return (
    <>
      <ProductDetailsProvider>
        <div className="flex m-2 relative">
          {/* <AddProduct />
        <ProductList />
        <ProductDetails /> */}
        </div>
      </ProductDetailsProvider>
      <ShapeComponent />
    </>
  );
}

export default App;
